/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'api.deandivizio.com',
              port: '',
            },
          ],
        },
};

export default nextConfig;