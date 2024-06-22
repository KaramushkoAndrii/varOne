import { useTranslation } from 'react-i18next';
import Button from "../button/Button";
import ServicesList from '../servicesList/ServicesList';

import './mainServices.scss';


const MainServices = () => {

    const { t } = useTranslation();

    return (
        // <section className='services'>
        //     <div className='sevices__content'>
        //         <h2>{t('main.services')}</h2>
        //         <p>{t('main.request')}</p>
        //         <Button text={t('buttons.task')}/>
        //     </div>
        //     <ServicesList />
        // </section>
        <section className='services'>
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