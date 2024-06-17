import { useTranslation } from 'react-i18next';

import './servicesList.scss';


const ServicesList = () => {

    const { t } = useTranslation();
    const services = [
        {
            title: 'service1',
            //bgImg: 'url()',
            href: '#'
        },
        {
            title: 'service2',
            //bgImg: 'url()',
            href: '#'
        },
        {
            title: 'service3',
            //bgImg: 'url()',
            href: '#'
        },
        {
            title: 'service4',
            //bgImg: 'url()',
            href: '#'
        }
        ,  {
            title: 'service1',
            //bgImg: 'url()',
            href: '#'
        },
        {
            title: 'service2',
            //bgImg: 'url()',
            href: '#'
        },
        {
            title: 'service3',
            //bgImg: 'url()',
            href: '#'
        },
        {
            title: 'service4',
            //bgImg: 'url()',
            href: '#'
        },
        {
            title: 'service1',
            //bgImg: 'url()',
            href: '#'
        },
        {
            title: 'service2',
            //bgImg: 'url()',
            href: '#'
        },
        {
            title: 'service3',
            //bgImg: 'url()',
            href: '#'
        },
        {
            title: 'service4',
            //bgImg: 'url()',
            href: '#'
        }
        ,  {
            title: 'service1',
            //bgImg: 'url()',
            href: '#'
        },
        {
            title: 'service2',
            //bgImg: 'url()',
            href: '#'
        },
        {
            title: 'service3',
            //bgImg: 'url()',
            href: '#'
        },
        {
            title: 'service4',
            //bgImg: 'url()',
            href: '#'
        }
    ]


    return (
        <ul className='services_list'>
            {
                services.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>
                            <h3>{t(`services.${item.title}`)}</h3>
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

export default ServicesList;