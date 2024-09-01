import { useTranslation } from 'react-i18next';

import './services.scss';

const Services = ({list}) => {
    const { t } = useTranslation();
    return (
        <>
            <h2>{t('services.services')}</h2>
            <ul className='page-services'>
                {list.map((item, key) => (
                    <li key={key}> 
                        {t(item)}    
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Services;