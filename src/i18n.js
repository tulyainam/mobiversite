import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resouces= {
    en: {
        translation: {
            display: 'Display',
            english: 'English',
        }
    },
    tr: {
        translation: {
            display: 'Ekran',
            english: 'İngilizce',
        }
    },
    gr: {
        translation: {
            display: 'Anzeige',
            english: 'Englisch',
        }
    }
};

i18n.use(initReactI18next).init({
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        resouces: resouces,
    });

export default i18n;