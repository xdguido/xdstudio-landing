/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
  async redirects() {
    return [
      // Force https + www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'xdstudiogg.com',
          },
        ],
        destination: 'https://www.xdstudiogg.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.xdstudiogg.com',
          },
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://www.xdstudiogg.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
