import i18next from "i18next";
import {initReactI18next, useTranslation as baseTranslation} from "react-i18next";
import {createContext, ReactNode, useContext} from "react";

const translations = require.context('./pages/', true, /(pt|en)\.yaml$/);

const namespaces: string[] = [];
translations.keys().forEach(filename => {
   const namespace = filename.replace(/(en|pt)\.yaml$/, '');

   if (!namespaces.includes(namespace)) {
       namespaces.push(namespace);
   }
});

const resources: Record<string, Record<string, Record<string, string>>> = {}
translations.keys().forEach(filename => {
    const namespace = filename.replace(/(en|pt)\.yaml$/, '');
    const language = filename.match(/(en|pt)\.yaml$/)?.[1];

    if (!language) return;

    if (!resources[language]) {
        resources[language] = {};
    }
    resources[language][namespace] = translations(filename).default;
});

export default i18next
    .use(initReactI18next)
    .init({
        ns: namespaces,
        resources: resources,
        lng: "pt",
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export const TranslationContext = createContext(null);
export function TranslationProvider({children, namespace}: {
    children: ReactNode;
    namespace: string;
}) {
    return (
        <TranslationContext.Provider value={baseTranslation(namespace) as any}>
            {children}
        </TranslationContext.Provider>
    )
}
export function useTranslation(namespace?: string): { t: (key: string) => string } {
    if (!namespace)
        return useContext(TranslationContext) as any;
    return baseTranslation(namespace) as any;
}