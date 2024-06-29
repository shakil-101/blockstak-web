/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  // env: {
  //   API_URL: process.env.BASE_URL,
  // },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "**",
      },
      {
        hostname: "localhost",
      },
    ],
  },
};

module.exports = nextConfig;
