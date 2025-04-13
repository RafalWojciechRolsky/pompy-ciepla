/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pompy4you.pl',
      },
    ],
  },
};

module.exports = nextConfig;
