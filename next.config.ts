// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iucltqyclynvzjjexxdl.supabase.co",
        pathname: "/storage/v1/object/public/menu-item-images/**",
      },
      {
        protocol: "https",
        hostname: "iucltqyclynvzjjexxdl.supabase.co",
        pathname: "/storage/v1/object/public/vendor-images/**",
      },
      {
        protocol: "https",
        hostname: "iucltqyclynvzjjexxdl.supabase.co",
        pathname: "/storage/v1/object/public/category-images/**",
      },
    ],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};


const { withNetlify } = require('@netlify/next')

module.exports = withNetlify({
  reactStrictMode: true,
  images: {
    domains: ['https://supabase.com/dashboard/project/iucltqyclynvzjjexxdl/storage/buckets/vendor-images'], // allow remote images if needed
  },
})

export default nextConfig;