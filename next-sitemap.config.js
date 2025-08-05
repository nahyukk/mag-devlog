/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mag-devlog.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: "./public",
  exclude: [
    "/portfolio",
    "/TIL",
    "/Study",
    "/TIL/*",
    "/Study/*",
  ],
};