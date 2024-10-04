

import PageHeader from "../components/pageHeader/PageHeader";
import InfoCard from "../components/infoCard/InfoCard";
import PageContent from "../components/pageContent/PageContent";
import Services from "../components/services/Services";
import { familyList } from "../components/lists/Lists";

const FamilyPage = ({onToggleModal}) => {
    
    return (
        <>
            <PageHeader text={'family'} 
                        bgClass={'family'} />

            <div className="page-container">
                <InfoCard  onToggleModal={onToggleModal}/>

                <section className="page-info">
                    <PageContent title={'family-page.title'}
                                titleDescription={'family-page.titleDescription'}
                                sectionHeader={'family-page.sectionHeader'}
                                descriptionTop={'family-page.descriptionTop'}
                                onToggleModal={onToggleModal}
                                buttonText={null}/>

                    <PageContent sectionHeader={'family-page.sectionHeaderSecond'}
                                descriptionTop={'family-page.descriptionTopSecond'}
                                descriptionBottom={'family-page.descriptionBottomSecond'}
                                onToggleModal={onToggleModal}/>


                    <Services list={familyList}/>
                </section>
            </div>
        </>
    )
}

export default FamilyPage;