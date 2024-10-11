
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";


import PageHeader from "../components/pageHeader/PageHeader";
import InfoCard from "../components/infoCard/InfoCard";
import PageContent from "../components/pageContent/PageContent";
import Services from "../components/services/Services";
import { familyList } from "../components/lists/Lists";

const FamilyPage = ({isOpen}) => {
    

    const { t } = useTranslation();

    const pageTitle = t('services.family');

    return (
        <>

            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            
            <PageHeader text={pageTitle} 
                        bgClass={'family'} />

            <div className="page-container">
                <InfoCard  isOpen={isOpen}/>

                <section className="page-info">
                    <PageContent title={'family-page.title'}
                                titleDescription={'family-page.titleDescription'}
                                sectionHeader={'family-page.sectionHeader'}
                                descriptionTop={'family-page.descriptionTop'}
                                isOpen={isOpen}
                                buttonText={null}/>

                    <PageContent sectionHeader={'family-page.sectionHeaderSecond'}
                                descriptionTop={'family-page.descriptionTopSecond'}
                                descriptionBottom={'family-page.descriptionBottomSecond'}
                                isOpen={isOpen}/>


                    <Services list={familyList}/>
                </section>
            </div>
        </>
    )
}

export default FamilyPage;