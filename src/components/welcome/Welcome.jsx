



import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import MainFoto from '../../resources/MainFoto.webp'
import './welcome.scss'

const Welcome = ({onToggleModal}) => {

    const { t } = useTranslation();
    return (
        <section id="welcome" className="welcome">
            <div className="welcome_info">
                <h2 className="welcome_title">{t('welcome.title')}</h2>
                <p className="welcome_description">{t('welcome.description')}</p>
                <Button text={t('buttons.consultation')} onClick={onToggleModal}/>
            </div>
            <div className="welcome_img">
                <img src={MainFoto} alt={MainFoto} loading={"lazy"}/>
            </div>
        </section>
    )
}

export default Welcome;