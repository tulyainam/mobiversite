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
        debug: true,
        fallbackLng: "en", // use de if selected language is not available
        interpolation: {
        escapeValue: false
        },
        ns: "translation", // namespaces help to divide huge translations into multiple small files.
        defaultNS: "translation",
        resouces: resouces,
    });

export default i18n;