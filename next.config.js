/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['example-apis.vercel.app'],
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["example-apis.vercel.app"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
