import { useTranslation } from 'react-i18next';
//import 'bootstrap-icons/font/bootstrap-icons.css';
import houseLogo from '../../resources/listIcons/house.svg';




import './servicesList.scss';


const ServicesList = () => {

    const { t } = useTranslation();
    const services = [
        {
            title: 'house',
            icon: houseLogo,
            href: '#'
        },
        {
            title: 'family',
            icon: houseLogo,
            href: '#'
        },
        {
            title: 'military',
            icon: houseLogo,
            href: '#'
        },
        {
            title: 'lawyer',
            icon: houseLogo,
            href: '#'
        },
        {
            title: 'duty',
            icon: houseLogo,
            href: '#'
        },
        {
            title: 'protection',
            icon: houseLogo,
            href: '#'
        },
        {
            title: 'worker',
            icon: houseLogo,
            href: '#'
        },
        {
            title: 'administrative law',
            icon: houseLogo,
            href: '#'
        },
        {
            title: 'administrative violation',
            icon: houseLogo,
            href: '#'
        }
    ]


    return (
        <ul className='services-list'>
            {
                services.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>
                            <img src={item.icon} alt={item.icon} />
                            {/* <i className={`bi bi-${item.icon}`}/> */}
                            <h3>{t(`services.${item.title}`)}</h3>
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

export default ServicesList;