import PageHeader from "../components/pageHeader/PageHeader";
import InfoCard from "../components/infoCard/InfoCard";
import PageContent from "../components/pageContent/PageContent";

const FamilyPage = ({onToggleModal}) => {

    
    const list = [
        "Услуга номер 1",
        "Услуга номер 2",
        "Услуга номер 3",
        "Услуга номер 4",
        "Услуга номер 1",
        "Услуга номер 2",
        "Услуга номер 3",
        "Услуга номер 4",
        "Услуга номер 1",
        "Услуга номер 2",
        "Услуга номер 3",
        "Услуга номер 4",
        "Услуга номер 1",
        "Услуга номер 2",
        "Услуга номер 3",
        "Услуга номер 4"
    ]
    
    return (
        <>
            <PageHeader text={'family'} 
                        bgClass={'family'} />

            <div className="page-container">
                <InfoCard  onToggleModal={onToggleModal}/>

                <div className="page-info">
                    <PageContent title={'family-page.title'}
                                titleDescription={'family-page.titleDescription'}
                                sectionHeader={'family-page.sectionHeader'}
                                descriptionTop={'family-page.descriptionTop'}
                                descriptionBottom={'family-page.descriptionBottom'}
                                list={list}
                                onToggleModal={onToggleModal}/>

                    <PageContent sectionHeader={'family-page.sectionHeader'}
                                descriptionTop={'family-page.descriptionTop'}
                                descriptionBottom={'family-page.descriptionBottom'}
                                list={list}
                                onToggleModal={onToggleModal}/>
                </div>
            </div>
        </>
    )
}

export default FamilyPage;