import i18next from "i18next";
import {initReactI18next} from "react-i18next";

const resources = {
    pt: {
        translation: {
            "Welcome to React": "Bem-vindo ao React e react-i18next",
        },
    },
    en: {
        translation: {
            "Welcome to React": "Welcome to React and react-i18next",
        },
    },
};

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: "pt",
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18next;