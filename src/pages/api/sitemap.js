// Dynamic sitemap API route
// Accessible at /api/sitemap

export default function handler(req, res) {
  // Get the base URL from environment variable or request
  // Vercel automatically provides VERCEL_URL in production
  const host = req.headers.host;
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                  'https://surgeonup.com';

  // Static routes
  const staticRoutes = [
    { path: '', priority: '1.0', changefreq: 'weekly' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/about/about-robin', priority: '0.7', changefreq: 'monthly' },
    { path: '/about/about-tam', priority: '0.7', changefreq: 'monthly' },
    { path: '/services', priority: '0.9', changefreq: 'weekly' },
    { path: '/more-services', priority: '0.8', changefreq: 'weekly' },
    { path: '/more-services/AIOO', priority: '0.7', changefreq: 'monthly' },
    { path: '/more-services/AISEO', priority: '0.7', changefreq: 'monthly' },
    { path: '/more-services/GBP', priority: '0.7', changefreq: 'monthly' },
    { path: '/blogs', priority: '0.8', changefreq: 'weekly' },
    { path: '/pdfBlogs', priority: '0.8', changefreq: 'weekly' },
    { path: '/contact', priority: '0.7', changefreq: 'monthly' },
    { path: '/privacy', priority: '0.5', changefreq: 'yearly' },
    { path: '/terms-of-service', priority: '0.5', changefreq: 'yearly' },
  ];

  const currentDate = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(sitemap);
}

