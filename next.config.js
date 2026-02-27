/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  async redirects() {
    return [
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/corporate-insurance', destination: '/corporate', permanent: true },
      { source: '/retail-insurance', destination: '/retail', permanent: true },
      { source: '/retails', destination: '/retail', permanent: true },
      { source: '/industries', destination: '/industry', permanent: true },
    ];
  },
};

module.exports = nextConfig;
