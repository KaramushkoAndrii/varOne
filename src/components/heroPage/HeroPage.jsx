
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import { slideFromBottom } from '../Animations';
import Button from '../button/Button'

import './HeroPage.scss'

const HeroPage = ({isOpen}) => {

    const { t } = useTranslation();

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId)
        if(section) {
            section.scrollIntoView({behavior: 'smooth'})
        }
    }
    

    return (
        <section className='hero_section'>
            <motion.h1 {...slideFromBottom}>
                {t('main.title')}
                <p>
                    {t('main.description')}
                </p>
            </motion.h1>
            <motion.div {...slideFromBottom} className='hero_btn_group'>
                <Button text={t('buttons.discuss')} onClick={isOpen} />
                <Button text={t('buttons.more info')} 
                        bg={'transperent'}
                        onClick={() => scrollToSection('services')} />
            </motion.div>
        </section>
    )
}

export default HeroPage;