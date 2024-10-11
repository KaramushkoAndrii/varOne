

import PageHeader from "../components/pageHeader/PageHeader";
import InfoCard from "../components/infoCard/InfoCard";
import PageContent from "../components/pageContent/PageContent";
import Services from "../components/services/Services";
import { familyList } from "../components/lists/Lists";

const FamilyPage = ({isOpen}) => {
    
    return (
        <>
            <PageHeader text={'family'} 
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