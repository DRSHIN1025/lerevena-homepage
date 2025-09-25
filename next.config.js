/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/lerevena-homepage' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/lerevena-homepage' : '',
}

module.exports = nextConfig