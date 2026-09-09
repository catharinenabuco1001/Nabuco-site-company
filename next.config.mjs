/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        // O feed RSS do YouTube serve thumbnails em subdomínios numerados
        // (i.ytimg.com, i1.ytimg.com, i2.ytimg.com, i3.ytimg.com, i4...).
        protocol: "https",
        hostname: "*.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "ytimg.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
};

export default nextConfig;
