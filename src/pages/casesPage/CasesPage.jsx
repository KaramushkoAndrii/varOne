import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import PageHeader from "../../components/pageHeader/PageHeader";
import InfoCard from "../../components/infoCard/InfoCard";
import { useTranslation } from "react-i18next";
import { caseList } from "../../components/lists/Lists";


import './casesPage.scss';

const CasesPage  = ({isOpen}) => {

    const { t } = useTranslation();

    const pageTitle = t('services.cases')

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <PageHeader  text={pageTitle} 
                        bgClass={'cases'} />

            <div className="page-container">
                <InfoCard  isOpen={isOpen}/>

                <section className="page-info">
                    <section className="main-section">
                        <h2 className="page__title">{t('cases-page.title')}</h2>
                        <p>{t('cases-page.description')}</p>
                        <ul className="cases__list">
                            {caseList.map((item, key) => (
                                <li className="cases__item" style={{backgroundImage: `url(${item.bg})`}} key={key}>
                                    <Link to={item.link} target="__blank"> 
                                        {t(item.title)}
                                    </Link>
                                </li>))
                            } 
                        </ul>
                    </section>
                </section> 
            </div>
        </>
    )
}

export default CasesPage;


                                // : caseList.map((item, key) => <li className="cases__item"  style={{backgroundImage: `url(${item.bg})`}} key={key}>{item.title}</li>)}