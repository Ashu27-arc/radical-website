import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/admin/',
        '/wp-admin/',
        '/private/',
      ],
    },
    sitemap: 'https://radicaleducation.in/sitemap.xml',
    host: 'https://radicaleducation.in',
  };
}
