

import { useTranslation } from "react-i18next";


import PageHeader from "../components/pageHeader/PageHeader";
import InfoCard from "../components/infoCard/InfoCard";
import PageContent from "../components/pageContent/PageContent";
import Services from "../components/services/Services";

const MilitaryPage = ({onToggleModal}) => {

    const { t } = useTranslation();

    const militaryHelp = [
        'military-page.consult-military',
        'military-page.security-military-man',
        'military-page.help-with-social',
        'military-page.mobilization-and-demobilization',
        'military-page.military-criminal',
        'military-page.compensation'
    ]

    const militaryServices = [
        {link:'zvilnenya-z-viyskovoi-sluzhby', name: 'military-page.services-help'},
        {link:'otrymanya-vidsrochki', name: 'military-page.services.otsrochka'},
        {link:'oskarzhenya-vlk', name: 'military-page.services.vlk'},
        {link:'oscarzhenya-rishen-tck', name: 'military-page.services.tck'},
        {link: 'zahust-vid-nezakonnogo-utrymanya-tck', name: 'military-page.services.uderszhanie'},
        {link: 'skladanya-raporty-ta-inshih-documentiv', name: 'military-page.services.raport'},
        {link: 'suprovid-simeynih-ta-inshih-sprav', name: 'military-page.services.soprovoszhdenie'},
        {link: 'dopomoga-v-otrymanii-15-millions', name: 'military-page.services.millions'},
        {link: 'styagnenya-ne-splachenogo-zabezpechenya', name: 'military-page.services.vziskanie'},
        {link: 'oskarzhenya-ne-provomirnyh-rishen', name: 'military-page.services.nepravomernie'}
    ]

    return (
        <>
            <PageHeader text={'military'} 
                        bgClass={'military'} />

            <div className="page-container">
                <InfoCard onToggleModal={onToggleModal} />


                <section className="page-info">
                    <PageContent title={'services.military'} 
                                 titleDescription={'military-page.titleDescription'}
                                 sectionHeader={'military-page.sectionHeader'} 
                                 list={militaryHelp} >


                                <p><b>{t('military-page.military-lawyer')}</b></p>

                                <Services title={'military-page.military-lawyer-services'} list={militaryServices} />

                                <h3 className="protection-page__lower">{t('protection-page.more')}</h3>

                    </PageContent>
                </section>
            </div>
        </>
    )
}

export default MilitaryPage;