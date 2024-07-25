import i18next from "i18next";
import {useTranslation} from "@/translation";

i18next.addResourceBundle('pt', 'hello-world', require('./pt.yaml').default);

export function HelloWorld() {
  const { t } = useTranslation('hello-world');

  return <h1>{t('TITLE')}</h1>;
}