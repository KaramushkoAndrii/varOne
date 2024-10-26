

import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";


import PageHeader from "../components/pageHeader/PageHeader";
import InfoCard from "../components/infoCard/InfoCard";
import PageContent from "../components/pageContent/PageContent";
import Services from "../components/services/Services";
import ImgContainer from "../components/imgContainer/ImgContainer";
import { militaryServices } from "../components/lists/Lists";



import military from '../resources/lawyerPage/viyskovi-spravy.webp';


const MilitaryPage = ({isOpen}) => {

    const { t } = useTranslation();

    const militaryHelp = [
        'military-page.consult-military',
        'military-page.security-military-man',
        'military-page.help-with-social',
        'military-page.mobilization-and-demobilization',
        'military-page.military-criminal',
        'military-page.compensation'
    ]

    const pageTitle = t('services.military');



    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <PageHeader text={pageTitle} 
                        bgClass={'military'} />

            <div className="page-container">
                <InfoCard isOpen={isOpen} />


                <section className="page-info">
                    <PageContent title={'services.military'} 
                                 titleDescription={'military-page.titleDescription'}
                                 sectionHeader={'military-page.sectionHeader'} 
                                 list={militaryHelp}
                                 isOpen={isOpen}>
                                

                                <ImgContainer src={military} alt={'viyskoviy-advokat'} />

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