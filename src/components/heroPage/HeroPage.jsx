
import Button from '../button/Button'

import { useTranslation } from 'react-i18next';

import './HeroPage.scss'

const HeroPage = () => {

    const { t } = useTranslation();

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId)
        if(section) {
            section.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (
        <section className='hero_section'>
            <h1>
                {t('main.title')}
                <p>
                    {t('main.description')}
                </p>
            </h1>
            <div className='hero_btn_group'>
                <Button text={t('buttons.discuss')} />
                <Button text={t('buttons.more info')} 
                        bg={'transperent'}
                        onClick={() => scrollToSection('services')} />
            </div>
        </section>
    )
}

export default HeroPage;