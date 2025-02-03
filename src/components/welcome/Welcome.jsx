


import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import { slideFromLeft } from "../Animations";
import Button from "../button/Button";
import MainFoto from '../../resources/MainFoto.webp'
import './welcome.scss'

const Welcome = ({isOpen}) => {

    const { t } = useTranslation();

    const [film, setFilm] = useState(false);

    const handleVideoToggle = () => {
        setFilm(!film)
    }

    const video = (
        <iframe
            src="https://www.youtube.com/embed/SwmRyntv9sM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    );

    const welcomeContent = [
        'title',
        'start',
        'now'
    ]


    return (
        <section id="welcome" className="welcome">
            <div className="welcome_info">
                <motion.h2 {...slideFromLeft} className="welcome_title">{t('welcome.title')}</motion.h2>

                {welcomeContent.map((item, key) => <p key={key} className="welcome_description">{t(`bio.${item}`)}</p>)}

                <Button text={t('buttons.consultation')} onClick={isOpen}/>

                <Button text={film ? 'Назад' : t('buttons.video')} onClick={handleVideoToggle}/>
                
            </div>
            <div className="welcome_img">

                
                <div className="welcome__slogan" style={{display: film ? 'none' : 'block'}}>
                    <p className="welcome__slogan--content">
                        "Amat  Victoria Curam"
                        <span>{t('bio.slogan')}</span>
                    </p>
                </div>


                {film ? 
                         video :
                         <img src={MainFoto} alt={MainFoto} loading={"lazy"}/>}
                
            </div>
            
        </section>
    )
}

export default Welcome;