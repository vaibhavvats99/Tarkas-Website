/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'm.media-amazon.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(fbx)$/,
      type: 'asset/resource',
    })
    return config
  },
}

module.exports = nextConfig