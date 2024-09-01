import PageHeader from "../../components/pageHeader/PageHeader";
import InfoCard from "../../components/infoCard/InfoCard";
import { useTranslation } from "react-i18next";
import Mainfoto from '../../resources/MainFoto.webp';

import './casesPage.scss';

const CasesPage  = ({onToggleModal, list}) => {

    const { t } = useTranslation();

    // main list, it can be change if you will youse prop "list"
    const caseList = [
        {
            title: 'Заголовок1',
            bg: Mainfoto
        },
        {
            title: 'Заголовок2',
            bg: Mainfoto
        },
        {
            title: 'Заголовок3',
            bg: Mainfoto
        },
        {
            title: 'Заголовок4',
            bg: Mainfoto
        },
        {
            title: 'Заголовок5',
            bg: Mainfoto
        },
        {
            title: 'Заголовок6',
            bg: Mainfoto
        },
        {
            title: 'Заголовок7',
            bg: Mainfoto
        },
        {
            title: 'Заголовок8',
            bg: Mainfoto
        },
        {
            title: 'Заголовок9',
            bg: Mainfoto
        },
        {
            title: 'Заголовок10',
            bg: Mainfoto
        },
        {
            title: 'Заголовок11',
            bg: Mainfoto
        },
        {
            title: 'Заголовок12',
            bg: Mainfoto
        },
        {
            title: 'Заголовок13',
            bg: Mainfoto
        },
        {
            title: 'Заголовок14',
            bg: Mainfoto
        },
        {
            title: 'Заголовок15',
            bg: Mainfoto
        },
        {
            title: 'Заголовок16',
            bg: Mainfoto
        },
        {
            title: 'Заголовок17',
            bg: Mainfoto
        },
        {
            title: 'Заголовок18',
            bg: Mainfoto
        },
        {
            title: 'Заголовок19',
            bg: Mainfoto
        },
        {
            title: 'Заголовок20',
            bg: Mainfoto
        }
    ]

    return (
        <>
            <PageHeader  text={'cases'} 
                        bgClass={'cases'} />

            <div className="page-container">
                <InfoCard  onToggleModal={onToggleModal}/>

                <section className="page-info">
                    <section className="main-section">
                        <h2>{t('cases-page.title')}</h2>
                        <p>{t('cases-page.description')}</p>
                        <ul className="cases__list">
                            {list 
                                ? list.map((item, key) => <li className="cases__item" style={{backgroundImage: `url(${item.bg})`}} key={key}>{item}</li>) 
                                : caseList.map((item, key) => <li className="cases__item"  style={{backgroundImage: `url(${item.bg})`}} key={key}>{item.title}</li>)}
                        </ul>
                    </section>
                </section> 
            </div>
        </>
    )
}

export default CasesPage;