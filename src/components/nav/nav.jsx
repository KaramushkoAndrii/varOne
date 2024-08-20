import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom'

import './nav.scss'

const Nav = () => {

    const { t } = useTranslation();

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
            'href':'#contact',
            'title': 'feedback',
        }
    ]


    return (
        <nav>
            <ul className='navigation_list'>
                {links.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.href}>
                                {t(`nav.${item.title}`)}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav;