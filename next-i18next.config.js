// next-i18next.config.js
const nextI18NextConfig = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'th'],
    },
    reloadOnPrerender: process.env.NODE_ENV === 'development', // For hot-reloading in development
  };
  
  export default nextI18NextConfig;
  