// src/app/sitemap.ts
import type { MetadataRoute } from 'next';
import type { MenuItem } from 'primereact/menuitem';
import { fetchAllWpPostsForSitemap } from '@/lib/wp-fetcher';
import { getWpPages } from '@/lib/api';
import { courses } from '@/data/courses';
import { services } from '@/data/services';
import { mainMenuData } from '@/data/mainMenuData';

// ─── Config ───────────────────────────────────────────────────────────────────

export const dynamic = 'force-dynamic';

const BASE_URL = 'https://www.radicaleducation.in';

// ─── Static Routes ────────────────────────────────────────────────────────────

/** All hand-crafted static pages in the site. */
const STATIC_ROUTES: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
}> = [
  { path: '/',                              priority: 1.0, changeFrequency: 'daily'   },
  { path: '/about-us',                      priority: 0.8, changeFrequency: 'monthly' },
  { path: '/blogs',                         priority: 0.8, changeFrequency: 'daily'   },
  { path: '/careers',                       priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact-us',                    priority: 0.8, changeFrequency: 'monthly' },
  { path: '/counselling-authority',         priority: 0.8, changeFrequency: 'monthly' },
  { path: '/courses',                       priority: 0.8, changeFrequency: 'monthly' },
  { path: '/gallery',                       priority: 0.8, changeFrequency: 'monthly' },
  { path: '/list-your-institute',           priority: 0.8, changeFrequency: 'monthly' },
  { path: '/mbbs-abroad-admission',         priority: 0.8, changeFrequency: 'monthly' },
  { path: '/mbbs-deemed-colleges-in-india', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/neet-pg-india-admission',       priority: 0.8, changeFrequency: 'monthly' },
  { path: '/neet-ug-india-admission',       priority: 0.8, changeFrequency: 'monthly' },
  { path: '/neet-update',                   priority: 0.8, changeFrequency: 'weekly'  },
  { path: '/our-team',                      priority: 0.8, changeFrequency: 'monthly' },
  { path: '/privacy-policy',               priority: 0.8, changeFrequency: 'yearly'  },
  { path: '/refund-policy',                priority: 0.8, changeFrequency: 'yearly'  },
  { path: '/reviews',                       priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services',                      priority: 0.8, changeFrequency: 'monthly' },
  { path: '/study-abroad',                  priority: 0.8, changeFrequency: 'monthly' },
  { path: '/terms-condition',               priority: 0.8, changeFrequency: 'yearly'  },
];

/** WP page slugs that are already covered by static or local routes. */
const WP_PAGE_EXCLUDE_SLUGS = new Set([
  'home',
  'blog',
  'privacy-policy',
  'terms-condition',
  'terms-and-conditions',
]);

/** MBBS Abroad country sub-pages. */
const MBBS_ABROAD_COUNTRIES = [
  'nepal',
  'russia',
  'kazakhstan',
  'singapore',
  'georgia',
  'uzbekistan',
  'bangladesh',
  'kyrgyzstan',
] as const;

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Build a full canonical URL from a path segment.
 * Never adds a trailing slash (except the root '/').
 */
function buildUrl(path: string): string {
  const cleaned = path === '/' ? '' : path.replace(/\/+$/, '');
  return `${BASE_URL}${cleaned || '/'}`;
}

/**
 * Parse a date string safely.
 * Returns a Date object when valid, otherwise undefined so Next.js
 * can omit the field rather than emit an invalid value.
 */
function safeDate(dateStr: string | undefined | null): Date | undefined {
  if (!dateStr) return undefined;
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? undefined : d;
}

/**
 * Recursively walk a PrimeReact MenuItem tree and collect every `url` value.
 */
function extractMenuUrls(items: MenuItem[]): string[] {
  const urls: string[] = [];
  for (const item of items) {
    if (item.url) urls.push(item.url);
    if (Array.isArray(item.items)) {
      urls.push(...extractMenuUrls(item.items as MenuItem[]));
    }
  }
  return urls;
}

/**
 * Normalise a raw menu URL to a canonical path:
 *   - Keep only paths (starting with '/')
 *   - Strip trailing slash (unless it IS the root)
 *   - Drop absolute URLs pointing to other domains
 */
function normaliseMenuUrl(raw: string): string | null {
  const trimmed = raw.trim();

  // Skip external links or empty values
  if (!trimmed || !trimmed.startsWith('/')) return null;

  // Remove trailing slash (root stays '/')
  return trimmed === '/' ? '/' : trimmed.replace(/\/+$/, '');
}

// ─── Sitemap Default Export ───────────────────────────────────────────────────

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Track every URL we emit to avoid duplicates
  const emitted = new Set<string>();

  const entries: MetadataRoute.Sitemap = [];

  /** Conditionally push an entry, skipping it if the URL was already added. */
  function push(entry: MetadataRoute.Sitemap[number]): void {
    if (emitted.has(entry.url)) return;
    emitted.add(entry.url);
    entries.push(entry);
  }

  // ── 1. Static routes ────────────────────────────────────────────────────────
  for (const route of STATIC_ROUTES) {
    push({
      url: buildUrl(route.path),
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    });
  }

  // ── 2. Blog posts ───────────────────────────────────────────────────────────
  try {
    const posts = await fetchAllWpPostsForSitemap();
    for (const post of posts) {
      if (!post.slug) continue;
      push({
        url: buildUrl(`/blogs/${post.slug}`),
        lastModified: safeDate(post.modified) ?? safeDate(post.date) ?? new Date(),
        changeFrequency: 'daily',
        priority: 0.7,
      });
    }
  } catch (err) {
    console.error('[sitemap] Failed to fetch blog posts:', err);
  }

  // ── 3. WordPress pages ──────────────────────────────────────────────────────
  try {
    const wpPages = await getWpPages();
    for (const page of wpPages) {
      if (!page.slug) continue;
      if (WP_PAGE_EXCLUDE_SLUGS.has(page.slug)) continue;

      push({
        url: buildUrl(`/${page.slug}`),
        lastModified: safeDate(page.date) ?? new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
      });
    }
  } catch (err) {
    console.error('[sitemap] Failed to fetch WP pages:', err);
  }

  // ── 4. Course routes ────────────────────────────────────────────────────────
  for (const course of courses) {
    if (!course.slug) continue;
    push({
      url: buildUrl(`/courses/${course.slug}`),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  // ── 5. Service routes ───────────────────────────────────────────────────────
  for (const service of services) {
    if (!service.slug) continue;
    push({
      url: buildUrl(`/services/${service.slug}`),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  // ── 6. MBBS Abroad country pages ────────────────────────────────────────────
  for (const country of MBBS_ABROAD_COUNTRIES) {
    push({
      url: buildUrl(`/mbbs-abroad-admission/${country}`),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  // ── 7. Menu-based fallback URLs ─────────────────────────────────────────────
  const rawMenuUrls = extractMenuUrls(mainMenuData);
  for (const raw of rawMenuUrls) {
    const path = normaliseMenuUrl(raw);
    if (!path) continue;

    const url = buildUrl(path);
    if (emitted.has(url)) continue; // already included above

    push({
      url,
      changeFrequency: 'yearly',
      priority: 0.5,
    });
  }

  return entries;
}
