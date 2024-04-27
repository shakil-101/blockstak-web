/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // env: {
  //   API_URL: process.env.BASE_URL,
  // },
  images: {
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
