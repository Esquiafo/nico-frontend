import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "title": "React Router Contacts",
        "search_placeholder": "Search",
        "new_button": "New",
        "your_name": "Your Name",
        "your_friend": "Your Friend"
      }
    },
    es: {
      translation: {
        "title": "Contactos de React Router",
        "search_placeholder": "Buscar",
        "new_button": "Nuevo",
        "your_name": "Tu Nombre",
        "your_friend": "Tu Amigo"
      }
    }
  },
  lng: 'en',  // default language
  fallbackLng: 'en',  // fallback language if translation is missing
  interpolation: {
    escapeValue: false  // react already safes from xss
  }
});

export default i18n;
