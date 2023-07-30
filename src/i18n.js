import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        lng: 'en',
        resouces: {
            en: {
                translation: {
                    display: 'Display'
                }
            },
            tr: {
                translation: {
                    display: 'Ekran'
                }
            },
            gr: {
                translation: {
                    display: 'Anzeige'
                }
            }
        }
    });

export default i18n;