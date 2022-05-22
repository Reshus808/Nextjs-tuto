/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // this use out folder all files convert folder for routing error
  images: {
    domains: ["images.pexels.com"],
  }
}

module.exports = nextConfig
