import { MetadataRoute } from 'next';
import { getWpBlogs, getWpPages } from '@/lib/api';
import { courses } from '@/data/courses';
import { services } from '@/data/services';

const DOMAIN = 'https://radicaleducation.in';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static Routes
  const staticRoutes = [
    '',
    '/about-us',
    '/ayush-counselling-2025',
    '/bds-in-india',
    '/blogs',
    '/careers',
    '/contact-us',
    '/counselling-authority',
    '/courses',
    '/gallery',
    '/list-your-institute',
    '/mbbs-abroad-admission',
    '/mbbs-deemed-colleges-in-india',
    '/mbbs-in-india',
    '/neet-pg-india-admission',
    '/neet-ug-india-admission',
    '/neet-update',
    '/our-team',
    '/privacy-policy',
    '/refund-policy',
    '/reviews',
    '/services',
    '/study-abroad',
    '/study-india',
    '/terms-condition',
  ].map((route) => ({
    url: `${DOMAIN}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Fetch WordPress Posts (Blogs)
  const wpPosts = await getWpBlogs();
  const blogRoutes = wpPosts.map((post) => ({
    url: `${DOMAIN}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 3. Fetch WordPress Pages (Special landing pages)
  const wpPages = await getWpPages();
  const pageRoutes = wpPages
    .filter((page) => !['home', 'blog', 'privacy-policy', 'terms-and-conditions'].includes(page.slug)) // filter out some defaults
    .map((page) => ({
      url: `${DOMAIN}/${page.slug}`,
      lastModified: new Date(page.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  // 4. Course Routes
  const courseRoutes = courses.map((course) => ({
    url: `${DOMAIN}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 5. Service Routes
  const serviceRoutes = services.map((service) => ({
    url: `${DOMAIN}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 6. MBBS Abroad Country Routes
  const abroadCountries = [
    'nepal',
    'russia',
    'kazakhstan',
    'singapore',
    'georgia',
    'uzbekistan',
    'bangladesh',
    'kyrgyzstan',
  ].map((country) => ({
    url: `${DOMAIN}/mbbs-abroad-admission/${country}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Combine all routes
  return [
    ...staticRoutes,
    ...blogRoutes,
    ...pageRoutes,
    ...courseRoutes,
    ...serviceRoutes,
    ...abroadCountries,
  ];
}

