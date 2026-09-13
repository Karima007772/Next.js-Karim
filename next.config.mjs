/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apilpeunramrental.projct.cloud',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;