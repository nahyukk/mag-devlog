/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  ...(isProd && { output: "export" }),
  basePath: "/til-and-study",
  assetPrefix: "/til-and-study",
};

export default nextConfig;
