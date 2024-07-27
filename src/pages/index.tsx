import { useTranslation } from "react-i18next";

export default function Home() {
    const { t } = useTranslation('hello-world');

    return <>
        <h1>{t('TITLE')}</h1>
    </>
}