

import { useTranslation } from "react-i18next";

import PageHeader from "../../components/pageHeader/PageHeader";
import InfoCard from "../../components/infoCard/InfoCard";
import PageContent from "../../components/pageContent/PageContent";
import Services from "../../components/services/Services";
import ImgContainer from "../../components/imgContainer/ImgContainer";
import { buildingList } from "../../components/lists/Lists";
import { Helmet } from "react-helmet";

import neruhomist from '../../resources/neruhomistPage/neruhomist.webp';

import './buildingPage.scss';

const BuildingPage = ({isOpen}) => {

    const { t } = useTranslation();

    const pageTitle = t('services.building');

    const tipyNarusheniy = [
        "prava-sobstvenosti",
        "razdel-nedvishimosty",
        "rastorjenie-dogovora",
        "ustranenie-ogranicheniy",
        "objalovanie-prava-sobstvenosti",
        "nedeystvitelny-dogovor",
        "spory-s-pravom-sobstvenosti",
        "nalozhenie-aresta"
    ]

    const helpList = [
        "protection-help",
        "dosudebnoe-uregulirovanie-help",
        "podgotovka-help",
        "predstavlenie-interesov-help",
        "objalovanie-help"
    ]

    return (
        <>

            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <PageHeader text={pageTitle} 
                        bgClass={'build'}/>

            <div className="page-container">

                <InfoCard isOpen={isOpen}/>

                <section className="page-info">
                    <PageContent title={'building-page.title'}
                                 titleDescription={'building-page.specialist'}
                                 descriptionTop={'building-page.spory'}
                                 buttonText={null}>

                        <div className="building__content building-narushenie__content">
                            <ImgContainer src={neruhomist} alt={'neruhomist-ts-zhitlovi-spory'} />
                            <h2 className="building__subtitle">{t('building-page.vidy')}</h2>
                            <ul className="building__list">
                                {tipyNarusheniy.map((item, key) => (
                                    <li key={key} className="building__item">
                                        {t(`building-page.${item}`)}
                                    </li>
                                ))}
                            </ul>
                            <h3 className="protection-page__lower">{t('protection-page.more')}</h3>
                        </div>

                        <p className="narushenie__description">
                            {t('building-page.consultation')}
                        </p>

                        <div className="building__content building-services__content">
                            <h2 className="building__subtitle">{t('building-page.lawyer-help-title')}</h2>
                            <ul className="building__list">
                                {helpList.map((item, key) => (
                                    <li key={key} className="building__item">
                                        {t(`building-page.${item}`)}
                                    </li>
                                ))}
                            </ul>
                            <h3 className="protection-page__lower">{t('protection-page.more')}</h3>
                        </div>


                        <Services list={buildingList} title={'building-page.services-title'}/>

                    </PageContent>
                </section>
            </div>
        </>
    )
}

export default BuildingPage;