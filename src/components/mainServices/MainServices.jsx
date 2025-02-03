import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import { slideFromLeft, slideFromBottom } from '../Animations';
import Button from "../button/Button";
import ServicesList from '../servicesList/ServicesList';

import './mainServices.scss';


const MainServices = ({isOpen}) => {

    const { t } = useTranslation();

    return (
        <section id='services' className='services'>
            <motion.h2 {...slideFromLeft}>{t('main.services')}</motion.h2>
            <ServicesList />
            <motion.div {...slideFromBottom} className='services__request'>
                <p>{t('main.request')}</p>
                <Button text={t('buttons.task')} onClick={isOpen}/>
            </motion.div>
        </section>
    )
}

export default MainServices;