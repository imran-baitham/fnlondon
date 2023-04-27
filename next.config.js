/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.fnlondon.com'],
  },
}

module.exports = nextConfig
