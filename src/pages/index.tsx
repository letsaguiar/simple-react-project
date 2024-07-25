import {useTranslation} from "@/translation";

export default function Home() {
    const { t } = useTranslation();

    return (
        <h1>{t('TITLE')}</h1>
    )
}