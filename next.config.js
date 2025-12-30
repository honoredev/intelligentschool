/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: '/home/beni/Documents/Mindcraft',
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: /node_modules/
      }
      config.cache = false
    }
    return config
  },
}

module.exports = nextConfig