import { useTranslation } from 'react-i18next';
import Button from "../button/Button";
import ServicesList from '../servicesList/ServicesList';

import './mainServices.scss';


const MainServices = () => {

    const { t } = useTranslation();

    return (
        <section id='services' className='services'>
            <h2>{t('main.services')}</h2>
            <ServicesList />
            <div className='services__request'>
                <p>{t('main.request')}</p>
                <Button text={t('buttons.task')}/>
            </div>
        </section>
    )
}

export default MainServices;