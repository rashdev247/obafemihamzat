// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://drobafemihamzat.vercel.app',
  generateRobotsTxt: true, 
  generateIndexSitemap: true, 
  sitemapSize: 5000,    
  changefreq: 'daily',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
