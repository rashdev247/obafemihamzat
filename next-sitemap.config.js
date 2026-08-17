const campaignRoutes = [
  '/',
  '/about',
  '/vision-2027',
  '/achievements',
  '/news',
  '/join',
];

const CODA_API_BASE = process.env.CODA_API_BASE || 'https://coda.io/apis/v1';
const CODA_TABLE_NAME = process.env.CODA_TABLE_NAME || 'Blog Posts';

async function resolveBlogTableId() {
  if (process.env.CODA_TABLE_ID) {
    return process.env.CODA_TABLE_ID;
  }

  if (!process.env.CODA_API_TOKEN || !process.env.CODA_DOC_ID) {
    return null;
  }

  const response = await fetch(`${CODA_API_BASE}/docs/${process.env.CODA_DOC_ID}/tables`, {
    headers: {
      Authorization: `Bearer ${process.env.CODA_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data.items?.find((table) => table.name === CODA_TABLE_NAME)?.id || null;
}

async function fetchNewsSitemapEntries() {
  if (!process.env.CODA_API_TOKEN || !process.env.CODA_DOC_ID) {
    return [];
  }

  const tableId = await resolveBlogTableId();
  if (!tableId) {
    return [];
  }

  const rows = [];
  let nextPageToken;

  do {
    const params = new URLSearchParams({
      useColumnNames: 'true',
      limit: '500',
      ...(nextPageToken && { pageToken: nextPageToken }),
    });

    const response = await fetch(
      `${CODA_API_BASE}/docs/${process.env.CODA_DOC_ID}/tables/${tableId}/rows?${params}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.CODA_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    rows.push(...(data.items || []));
    nextPageToken = data.nextPageToken;
  } while (nextPageToken);

  return rows
    .map((row) => row.values || {})
    .filter((values) => values.Status === 'Published' || values.Status === 'published')
    .filter((values) => typeof values.Slug === 'string' && values.Slug.trim())
    .map((values) => ({
      loc: `/news/${values.Slug.trim()}`,
      changefreq: 'daily',
      priority: values.Featured === true || values.Featured === 'true' ? 0.9 : 0.82,
      lastmod: values['Published Date'] || new Date().toISOString(),
    }));
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://drobafemihamzat.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.8,
  exclude: ['/api/*', '/404', '/settings'],
  transform: async (config, path) => {
    const priorities = {
      '/': 1,
      '/vision-2027': 0.95,
      '/achievements': 0.9,
      '/about': 0.85,
      '/join': 0.85,
      '/news': 0.8,
    };

    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    const staticPaths = await Promise.all(
      campaignRoutes.map((path) => config.transform(config, path))
    );
    const newsPaths = await fetchNewsSitemapEntries();

    return [...staticPaths, ...newsPaths];
  },
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
