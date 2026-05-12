/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows any HTTPS hostname
      },
      {
        protocol: 'http',
        hostname: '**', // Allows any HTTP hostname
      },
    ],
  },
};

export default nextConfig;
