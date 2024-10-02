
import { useTranslation } from "react-i18next";


import PageHeader from "../../components/pageHeader/PageHeader";
import InfoCard from "../../components/infoCard/InfoCard";
import PageContent from "../../components/pageContent/PageContent";
import Services from "../../components/services/Services";
import ImgContainer from "../../components/imgContainer/ImgContainer";


import lawyerContrant from '../../resources/lawyerPage/na-pidstavi-chogo-pracuvaty-z-advokatom.webp';
import categoryFamily from '../../resources/lawyerPage/kategoriya-simeynih-sprav.webp';
import borgoviZabovyazannya from '../../resources/lawyerPage/borgovi-zabovyazannya.webp';
import adminDela from '../../resources/lawyerPage/admin-dela.webp';
import adminPravoporushennya from '../../resources/lawyerPage/admin-pravoporushennya.webp';
import viyskoviSpravy from '../../resources/lawyerPage/viyskovi-spravy.webp';

import './lawyerPage.scss'

const LawyerPage = ({onToggleModal}) => {

    const { t } = useTranslation();


    const distancionnoDescription = [
        "technology",
        "video",
        "email",
        "chat"
    ]

    const servicesList = [

        {   
            link: 'security',
            name: 'protection-page-list.security'
        },
        {
            link:'cancel',
            name: 'protection-page-list.cancel'
        },
        {
            link: 'escort',
            name: 'protection-page-list.escort'
        },
        {
            link: 'less-damage',
            name: 'protection-page-list.less-damage'
        },
        {
            link: 'notarius',
            name: 'protection-page-list.notarius'
        },
        {
            link: 'inaction',
            name: 'protection-page-list.inaction'
        },
        {
            link: 'assessment',
            name: 'protection-page-list.assessment'
        },
        {
            link: 'credit',
            name: 'protection-page-list.credit'
        },
        {
            link: 'debt',
            name: 'protection-page-list.debt'
        },
    ]

    return (
        <>
            <PageHeader text={'lawyer'} bgClass={'lawyer'} />

            <div className="page-container">
                <InfoCard onToggleModal={onToggleModal} />

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
                                          list={servicesList}/>


                                <ImgContainer src={borgoviZabovyazannya} alt={'borgovi-zabovyazannya'} />
                                <Services title={'uslugi-page.dolg-category-title'} 
                                          list={servicesList}/>


                                <ImgContainer src={adminDela} alt={'administrativne-pravo'}/>
                                <Services title={'uslugi-page.admin-category-title'}
                                          list={servicesList}/>

                                <ImgContainer src={adminPravoporushennya} alt={'admin-pravoporushennya'}/>
                                <Services title={'uslugi-page.admin-narushenie-category-title'} 
                                          list={servicesList}/>

                                <ImgContainer src={viyskoviSpravy} alt={'viyskovi-spravy'} />
                                <Services title={'uslugi-page.military-title'} 
                                          list={servicesList}/>

                                <h3 className="protection-page__lower">{t('protection-page.more')}</h3>

                    </PageContent>
                </section>
            </div>
        </>
    )
}

export default LawyerPage;