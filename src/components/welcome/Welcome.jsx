


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

    const casesList = [
        'civil-cases',
        'family-cases',
        'admin-cases',
        'admin-cases-more',
        'arest-cases'
    ]

    const welcomeContent = [
        'before',
        'study',
        'after',
        'first-company',
        'second-lawyer',
        'now'
    ]


    return (
        <section id="welcome" className="welcome">
            <div className="welcome_info">
                <h2 className="welcome_title">{t('welcome.title')}</h2>

                {welcomeContent.map((item, key) => <p key={key} className="welcome_description">{t(`bio.${item}`)}</p>)}

                <ul className="welcome-list">
                    {casesList.map((item, key) => (
                        <li key={key} className="welcome-list__item">{t(`bio-list.${item}`)}</li>
                    ))}
                </ul>

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