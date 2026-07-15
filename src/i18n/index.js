import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import fr from './translations/fr.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            fr: { translation: fr }
        },
        lng: localStorage.getItem('language') || 'fr', // Default to French
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
