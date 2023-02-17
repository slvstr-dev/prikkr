/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  pageExtensions: ['ts', 'tsx', 'mdx']
};

module.exports = nextConfig;
