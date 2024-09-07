import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import './services.scss';

const Services = ({list}) => {
    const { t } = useTranslation();
    return (
        <>
            <h2>{t('services.services')}</h2>
            <ul className='page-services'>
                {list.map((item, key) => (
                    <li key={key}> 
                        <Link to={item.link}>
                            {t(item.name)}
                        </Link>    
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Services;