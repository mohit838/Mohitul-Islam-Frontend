/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['pexels.com', 'unsplash.com', 'youtube.com'],

    // If You Have Any S3 Type Image Buckets Then Do That
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 's3.amazonaws.com',
    //     port: '',
    //     pathname: '/my-bucket/**',
    //   },
    // ],
  },
};

module.exports = nextConfig;
