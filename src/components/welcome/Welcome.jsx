


import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import MainFoto from '../../resources/MainFoto.webp'
import './welcome.scss'

const Welcome = ({onToggleModal}) => {

    const { t } = useTranslation();

    const [film, setFilm] = useState(false);

    const handleVideoToggle = () => {
        setFilm(!film)
    }

    const video = (
        <iframe
            src="https://www.youtube.com/embed/xRWgTcrHJJ4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    );


    return (
        <section id="welcome" className="welcome">
            <div className="welcome_info">
                <h2 className="welcome_title">{t('welcome.title')}</h2>
                <p className="welcome_description">{t('welcome.description')}</p>
                <Button text={t('buttons.consultation')} onClick={onToggleModal}/>
                <Button text={film ? 'Назад' : t('buttons.video')} onClick={handleVideoToggle}/>
            </div>
            <div className="welcome_img">
                {film ? 
                         video :
                         <img src={MainFoto} alt={MainFoto} loading={"lazy"}/>}
                
            </div>
            
        </section>
    )
}

export default Welcome;