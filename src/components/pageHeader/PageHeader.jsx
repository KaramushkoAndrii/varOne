import { useTranslation } from "react-i18next";

import './pageHeader.scss';


const PageHeader = ({text, bgClass}) => {
    const { t } = useTranslation();
    return (
        <div className={`page-header ${bgClass}`}>
            <h2>{t(`services.${text}`)}</h2>
        </div>
    )
}

export default PageHeader;