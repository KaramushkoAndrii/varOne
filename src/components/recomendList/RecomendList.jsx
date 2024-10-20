import { useTranslation } from "react-i18next";
import { BsTelephoneInbound, BsCheckSquare, BsSearch, BsListOl, BsSuitcaseLg, BsPersonCheckFill } from "react-icons/bs";

import './recomendList.scss'

const RecomendList = () => {

    const { t } = useTranslation();

    const recomendList = [
        {   icon: <BsTelephoneInbound />,
            title:'callback'
        },
        {   icon: <BsCheckSquare />,
            title:'strategy'
        },
        {   icon: <BsSearch />,
            title:'promise'
        },
        {   icon: <BsListOl />,
            title:'dogovor'
        },
        {   icon: <BsSuitcaseLg />,
            title:'specializaciya'
        },
        {   icon: <BsPersonCheckFill />,
            title:'free'
        }
    ]

    return (
        <section className="recomend">
            <h2>{t('recomend.title')}</h2>
            <h3 className="recomend__description">{t('recomend.description')}</h3>
            <ul className="recomend__list">
                {recomendList.map((item, key) => (<li className="recomend__item" key={key}>
                    <div className="recomend__item--icon">{item.icon}</div>
                    <span className="recomend__item--text">{t(`recomend.${item.title}`)}</span>
                </li>))}
            </ul>
        </section>
    )
}

export default RecomendList;