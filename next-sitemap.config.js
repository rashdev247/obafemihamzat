const campaignRoutes = ['/', '/about', '/vision-2027', '/achievements', '/join'];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://drobafemihamzat.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.8,
  exclude: ['/api/*', '/404'],
  transform: async (config, path) => {
    const priorities = {
      '/': 1,
      '/vision-2027': 0.95,
      '/achievements': 0.9,
      '/about': 0.85,
      '/join': 0.85,
    };

    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) =>
    Promise.all(campaignRoutes.map((path) => config.transform(config, path))),
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
    ],
    transformRobotsTxt: async (_, robotsTxt) =>
      robotsTxt.replace(
        'Host: https://drobafemihamzat.vercel.app',
        'Host: drobafemihamzat.vercel.app'
      ),
  },
}
