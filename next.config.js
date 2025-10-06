/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'dipfejgwailbomoqbmmr.supabase.co',
      port: '',
      pathname: '/**'
    }]
  },
  async rewrites() {
    return [
      {
        source: '/js/script.js',
        destination: 'https://plausible.io/js/script.js'
    },
    ]
  },
};

module.exports = nextConfig;
