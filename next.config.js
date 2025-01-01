/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
    ],
  },
  // Enable hostname and port configuration for production
  server: {
    hostname: '0.0.0.0',
    port: 8080
  },
  // Allow external connections
  experimental: {
    allowExternalDir: true,
  },
}

module.exports = nextConfig
