import PageHeader from "../components/pageHeader/PageHeader";
import InfoCard from "../components/infoCard/InfoCard";
import PageContent from "../components/pageContent/PageContent";
import Services from "../components/services/Services";

const FamilyPage = ({onToggleModal}) => {


    //Add translation at translation.json list and listBottom

    const listBottom = [
        'family-list.min',
        'family-list.justice',
        'family-list.guard'
    ]

    const servicesList = [
        'family-services.brak',
        'family-services.imushestvo',
        'family-services.mesto-zhitelsva-rebenka',
        'family-services.alimenti',
        'family-services.osparivanie',
        'family-services.priznanie-nedeesposobnym',
        'family-services.projivanie-odnoy-semiey',
        'family-services.drygie-factory'
    ]
    
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
                                onToggleModal={onToggleModal}/>

                    <PageContent sectionHeader={'family-page.sectionHeaderSecond'}
                                descriptionTop={'family-page.descriptionTopSecond'}
                                descriptionBottom={'family-page.descriptionBottomSecond'}
                                list={listBottom}
                                onToggleModal={onToggleModal}/>


                    <Services list={servicesList}/>
                </section>
            </div>
        </>
    )
}

export default FamilyPage;