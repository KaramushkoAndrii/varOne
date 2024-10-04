
import { useTranslation } from "react-i18next";
import PageHeader from "../components/pageHeader/PageHeader";
import InfoCard from "../components/infoCard/InfoCard";
import PageContent from "../components/pageContent/PageContent";
import RecomendList from "../components/recomendList/RecomendList";
import ImgContainer from "../components/imgContainer/ImgContainer";
import Services from "../components/services/Services";
import { administrativeList } from "../components/lists/Lists";

import adminPravo from '../resources/lawyerPage/admin-dela.webp';

const AdministrativeLawPage = ({onToggleModal}) => {

    const { t } = useTranslation()

    const adminHelpList = [
        'analiz',
        'jaloba',
        'podgotovka',
        'vozrajeniya',
        'predstavitelstvo',
    ]


    return (
        <>
            <PageHeader text={'administrative-law'} 
                        bgClass={'administrative-law'}/>

            <div className="page-container">
                    <InfoCard onToggleModal={onToggleModal}/>

                    <section className="page-info">
                        <PageContent title={'administrativeLaw-page.title'}
                                    titleDescription={'administrativeLaw-page.titleDescription'}
                                    descriptionTop={'administrativeLaw-page.descriptionTop'}
                                    descriptionBottom={'administrativeLaw-page.descriptionBottom'}
                                    buttonText={null}>
                        <ImgContainer src={adminPravo} alt={'pravova-dopomoga'} />
                        
                            <Services title={'administrativeLaw-page.titleBottom'} list={administrativeList} />
                            <p>{t('administrativeLaw-page.descriptionBottomSecond')}</p>
                            <p>{t('administrativeLaw-page.help')}</p>
                            <ul>
                                {adminHelpList.map((item, key) => (
                                    <li className="description__item" key={key}>
                                        {t(`administrativeLaw-services.${item}`)}
                                    </li>
                                ))}
                            </ul>

                            <RecomendList />
                            
                        </PageContent>

                    </section>
            </div>
        </>

    )
}

export default AdministrativeLawPage;