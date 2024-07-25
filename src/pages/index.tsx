import {useTranslation} from "@/translation";
import {HelloWorld} from "@/components/hello-world/HelloWorld";

export default function Home() {
    const { t } = useTranslation();

    return <>
        <h1>{t('TITLE')}</h1>
        <HelloWorld/>
    </>
}