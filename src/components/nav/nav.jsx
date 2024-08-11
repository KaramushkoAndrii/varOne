import { useTranslation } from 'react-i18next';

import './nav.scss'

const Nav = () => {

    const { t } = useTranslation();

    const links = [
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
                            <a href={item.href}>
                                {t(`nav.${item.title}`)}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav;