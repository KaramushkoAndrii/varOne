

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import PageHeader from "../components/pageHeader/PageHeader";
import InfoCard from "../components/infoCard/InfoCard";
import PageContent from "../components/pageContent/PageContent";
import ImgContainer from "../components/imgContainer/ImgContainer";



import povernenyaBorgu from '../resources/borgPage/povernennya-borgu.webp';

const DutyPage = ({isOpen}) => {

    const { t } = useTranslation();

    return (
        <>
            <PageHeader text={'duty'} 
                        bgClass={'duty'} />

            <div className="page-container">
                <InfoCard  isOpen={isOpen}/>

                <section className="page-info">
                    <PageContent title={'duty-page.title'}
                                buttonText={null}
                                titleDescription={'duty-page.titleDescription'}
                                sectionHeader={'duty-page.sectionHeader'}
                                descriptionTop={'duty-page.descriptionTop'}
                                isOpen={isOpen}/>
                    <ImgContainer src={povernenyaBorgu} alt={'povernenya-borgu'} />
                    <PageContent sectionHeader={'duty-page.sectionHeaderSecond'}
                                descriptionTop={'duty-page.descriptionTopSecond'}
                                isOpen={isOpen}>
                                

                        <span>{t('duty-page.descriptionBottomSecond')}<Link to={'borg'}>{t('duty-page.dolg')}</Link></span>
                    </PageContent>
                </section>
            </div>
        </>
    )
}

export default DutyPage; 