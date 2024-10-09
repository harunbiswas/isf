

/** @type {import('next').NextConfig} */
const nextConfig = {


  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'th'],

  },
  images: {
    domains: ['rayoflightthemes.com'],
  },
  webpack: (config) => {
    return config;
  },
  reactStrictMode: true,
 
 
};

export default nextConfig;
