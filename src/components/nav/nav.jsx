import { useTranslation } from 'react-i18next';

const Nav = () => {

    const { t } = useTranslation();

    const links = [
        {
            'href': '#',
            'title': t('nav.services'),
        },
        {
            'href': '#',
            'title': t('nav.cases'),
        },
        {
            'href': '#',
            'title': t('nav.about'),
        },
        {
            'href':'#',
            'title': t('nav.feedback'),
        }
    ]


    return (
        <ul>
            {links.map((item, index) => {
                return (
                    <li key={index}>
                        <a href={item.href}>
                            {item.title}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

export default Nav;