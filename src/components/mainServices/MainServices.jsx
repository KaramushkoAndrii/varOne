import { useTranslation } from 'react-i18next';
import Button from "../button/Button";
import ServicesList from '../servicesList/ServicesList';

import './mainServices.scss';


const MainServices = () => {

    const { t } = useTranslation();

    return (
        <section className='services'>
            <div>
                <h2>{t('main.services')}</h2>
                <p>{t('main.request')}</p>
                <Button text={t('buttons.task')}/>
            </div>
            <ServicesList />
        </section>
    )
}

export default MainServices;