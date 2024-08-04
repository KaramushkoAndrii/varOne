import { useTranslation } from "react-i18next";

import Button from "../button/Button";

import lawyer from '../../resources/lawyer.webp'
import './welcome.scss'

const Welcome = () => {

    const { t } = useTranslation();
    return (
        <section id="welcome" className="welcome">
            <div className="welcome_info">
                <h2 className="welcome_title">{t('welcome.title')}</h2>
                <p className="welcome_description">{t('welcome.description')}</p>
                <Button text={t('buttons.consultation')} />
            </div>
            <div className="welcome_img">
                <img src={lawyer} alt={lawyer} loading={"lazy"}/>
            </div>
        </section>
    )
}

export default Welcome;