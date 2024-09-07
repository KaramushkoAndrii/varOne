import { useTranslation } from "react-i18next";

const RecomendList = () => {

    const { t } = useTranslation();

    const recomendList = [
        'callback',
        'strategy',
        'promise',
        'dogovor',
        'specializaciya',
        'free',
    ]

    return (
        <>
            <h2>{t('recomend.title')}</h2>
            <h3>{t('recomend.description')}</h3>
            <ul>
                {recomendList.map((item, key) => <li key={key}>{t(`recomend.${item}`)}</li>)}
            </ul>
        </>
    )
}

export default RecomendList;