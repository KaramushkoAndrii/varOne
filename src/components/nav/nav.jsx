import { useTranslation } from 'react-i18next';
import {Link, useNavigate, useLocation} from 'react-router-dom'

import './nav.scss'

const Nav = () => {

    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const links = [
        {
            'href': '/',
            'title': 'main'
        },
        {
            'href': '#welcome',
            'title': 'about',
        },
        {
            'href': '#services',
            'title': 'services',
        },
        {
            'href': 'cases',
            'title': 'cases'
        },
        {
            'href':'#contact',
            'title': 'feedback',
        }
    ];

    const handleNavigation = (href) => {
        if(href.startsWith('#')) {
            if(location.pathname !== '/') {
                navigate('/')
            }

            setTimeout(() => {
                const el = document.querySelector(href);
                if(el) {
                    el.scrollIntoView({behavior: 'smooth'})
                }
            }, 100)
        } else {
            navigate(href)
        }
    }


    return (
        <nav>
            <ul className='navigation_list'>
                {links.map((item, index) => {
                    return (
                        <li key={index}>
                            <span onClick={() => handleNavigation(item.href)}>
                                {t(`nav.${item.title}`)}
                            </span>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav;