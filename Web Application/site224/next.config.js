/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_Endpoint: process.env.API_Endpoint,
  }
}

module.exports = nextConfig
