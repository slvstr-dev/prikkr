/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com']
  },
  experimental: {
    appDir: true
  },
  pageExtensions: ['ts', 'tsx', 'mdx']
};

module.exports = nextConfig;
