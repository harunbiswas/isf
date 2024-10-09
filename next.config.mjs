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
    pageExtensions: [
        "page.jsx",
        "page.js",
        // FIXME: Next.js has a bug which does not resolve not-found.page.tsx correctly
        // Instead, use `not-found.ts` as a workaround
        // "ts" is required to resolve `not-found.ts`
        // https://github.com/vercel/next.js/issues/65447
        "js"
    ],
};

export default nextConfig;
