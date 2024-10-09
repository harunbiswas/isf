/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'th'],
      },
      images: {
        domains: ['rayoflightthemes.com'],
      }, 
      
      webpack: (config, { isServer, webpack }) => {
        return config;
      }

   
};

export default nextConfig;
