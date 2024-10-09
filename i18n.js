// i18n.js
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './public/locales/en/common.json';
import th from './public/locales/th/common.json';

i18next
  .use(initReactI18next)
  .init({
    resources: {
        en: { translation: en },
        th: { translation: th },
      
      },
    lng: localStorage.getItem('lng'), 
    fallbackLng: 'en', // Fallback language
    supportedLngs: ['en', 'th'],
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18next;
