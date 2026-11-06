/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Teste "Raio X da Sua Base": página pronta em public/raio-x.html,
  // servida em /raio-x.
  async rewrites() {
    return [{ source: "/raio-x", destination: "/raio-x.html" }];
  },
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
      {
        // Capas de TikTok vêm do oEmbed público (ver src/lib/tiktok.ts),
        // servidas por subdomínios numerados do CDN da TikTok.
        protocol: "https",
        hostname: "*.tiktokcdn.com",
      },
      {
        protocol: "https",
        hostname: "*.tiktokcdn-us.com",
      },
    ],
  },
};

export default nextConfig;
