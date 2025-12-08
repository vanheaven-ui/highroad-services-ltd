/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://highroad-services-ltd.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 5000, // Smaller for 7 pages
  changefreq: "monthly", // Less frequent for evergreen content
  priority: 0.8, // Slight bump from default
  exclude: ["/admin/*"],
  // If dynamic (e.g., blog posts), add back additionalPaths with lastmod
};
