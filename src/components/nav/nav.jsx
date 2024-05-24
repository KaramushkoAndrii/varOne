import { useTranslation } from 'react-i18next';

const Nav = () => {

    const { t } = useTranslation();

    const links = [
        {
            'href': '#',
            'title': 'services',
        },
        {
            'href': '#',
            'title': 'cases',
        },
        {
            'href': '#',
            'title': 'about',
        },
        {
            'href':'#',
            'title': 'feedback',
        }
    ]


    return (
        <ul>
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
    )
}

export default Nav;