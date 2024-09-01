import PageHeader from "../components/pageHeader/PageHeader";
import InfoCard from "../components/infoCard/InfoCard";
import PageContent from "../components/pageContent/PageContent";

const DutyPage = ({onToggleModal}) => {

    return (
        <>
            <PageHeader text={'duty'} 
                        bgClass={'duty'} />

            <div className="page-container">
                <InfoCard  onToggleModal={onToggleModal}/>

                <section className="page-info">
                    <PageContent title={'duty-page.title'}
                                titleDescription={'duty-page.titleDescription'}
                                sectionHeader={'duty-page.sectionHeader'}
                                descriptionTop={'duty-page.descriptionTop'}
                                onToggleModal={onToggleModal}/>
                    <PageContent sectionHeader={'duty-page.sectionHeaderSecond'}
                                descriptionTop={'duty-page.descriptionTopSecond'}
                                descriptionBottom={'duty-page.descriptionBottomSecond'}
                                onToggleModal={onToggleModal}
                                chil={'duty-page.dolg'}
                                childrenHref={'/'}/>
                </section>
            </div>
        </>
    )
}

export default DutyPage; 