
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";


import PageHeader from "../../components/pageHeader/PageHeader";
import InfoCard from "../../components/infoCard/InfoCard";
import PageContent from "../../components/pageContent/PageContent";
import Services from "../../components/services/Services";
import ImgContainer from "../../components/imgContainer/ImgContainer";
import { familyList, AdministrativeViolationList, militaryServices, administrativeList, dutyList } from "../../components/lists/Lists";


import lawyerContrant from '../../resources/lawyerPage/na-pidstavi-chogo-pracuvaty-z-advokatom.webp';
import categoryFamily from '../../resources/lawyerPage/kategoriya-simeynih-sprav.webp';
import borgoviZabovyazannya from '../../resources/lawyerPage/borgovi-zabovyazannya.webp';
import adminDela from '../../resources/lawyerPage/admin-dela.webp';
import adminPravoporushennya from '../../resources/lawyerPage/admin-pravoporushennya.webp';
import viyskoviSpravy from '../../resources/lawyerPage/viyskovi-spravy.webp';

import './lawyerPage.scss'

const LawyerPage = ({isOpen}) => {

    const { t } = useTranslation();

    const pageTitle = t('services.lawyer')


    const distancionnoDescription = [
        "technology",
        "video",
        "email",
        "chat"
    ]


    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <PageHeader text={pageTitle} bgClass={'lawyer'} />

            <div className="page-container">
                <InfoCard isOpen={isOpen} />

                <section className="page-info">
                    <PageContent title={'uslugi-page.uslugi-title'}
                                 titleDescription={'uslugi-page.consultation'}
                                 descriptionTop={'uslugi-page.both'}
                                 descriptionBottom={'uslugi-page.main'}
                                 buttonText={null}>


                                <ImgContainer src={lawyerContrant} alt={'na-pidstavi-chogo-spivpacuvaty'} />
                                <h3 className="uslugi-advokata__title contract-title">{t('uslugi-page.sotrudnichestvo')}</h3>
                                <p className="uslugi-advokata__description">{t('uslugi-page.dogovor')}</p>

                                <h3 className="uslugi-advokata__title distancion">{t('uslugi-page.distancionno')}</h3>
                                <div className="uslugi-advokata__description distancionno__description">
                                    {distancionnoDescription.map((item, key) => (
                                        <p key={key} className="distancionno__description--item">{t(`uslugi-page.${item}`)}</p>
                                    ))}
                                </div>

                                <h2 className="uslugi-advokata__title uslugi__title">{t('uslugi-page.predostavlyaet-title')}</h2>

                                <ImgContainer src={categoryFamily} alt={'kategoriya-simeynih-sprav'} />
                                <Services title={'uslugi-page.family-category-title'} 
                                          list={familyList}/>


                                <ImgContainer src={borgoviZabovyazannya} alt={'borgovi-zabovyazannya'} />
                                <Services title={'uslugi-page.dolg-category-title'} 
                                          list={dutyList}/>


                                <ImgContainer src={adminDela} alt={'administrativne-pravo'}/>
                                <Services title={'uslugi-page.admin-category-title'}
                                          list={administrativeList}/>

                                <ImgContainer src={adminPravoporushennya} alt={'admin-pravoporushennya'}/>
                                <Services title={'uslugi-page.admin-narushenie-category-title'} 
                                          list={AdministrativeViolationList}/>

                                <ImgContainer src={viyskoviSpravy} alt={'viyskovi-spravy'} />
                                <Services title={'uslugi-page.military-title'} 
                                          list={militaryServices}/>

                                <h3 className="protection-page__lower">{t('protection-page.more')}</h3>

                    </PageContent>
                </section>
            </div>
        </>
    )
}

export default LawyerPage;