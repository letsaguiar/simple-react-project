import i18next from "i18next";
import {initReactI18next} from "react-i18next";

const translations = require.context('./translations/', true, /\.yaml$/);

const resources: Record<string, Record<string, Record<string, string>>> = {}
translations.keys().forEach(filename => {
    const namespace = filename.replace(/\.\/(en|pt)\//, '').replace(/\.yaml/, '');
    const language = filename.replace(/\.\//, '').split('/')[0];

    if (!language) return;

    if (!resources[language]) {
        resources[language] = {};
    }
    resources[language][namespace] = translations(filename).default;
});

export default i18next
    .use(initReactI18next)
    .init({
        resources: resources,
        lng: "pt",
    });