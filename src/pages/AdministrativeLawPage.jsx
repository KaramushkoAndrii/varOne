
import { useTranslation } from "react-i18next";
import PageHeader from "../components/pageHeader/PageHeader";
import InfoCard from "../components/infoCard/InfoCard";
import PageContent from "../components/pageContent/PageContent";
import RecomendList from "../components/recomendList/RecomendList";

const AdministrativeLawPage = ({onToggleModal}) => {

    const { t } = useTranslation()

    const help = [
        'administrativeLaw-services.pdd',
        'administrativeLaw-services.pensiya',
        'administrativeLaw-services.objalovanie',
        'administrativeLaw-services.gossluzhashiy',
        'administrativeLaw-services.publichnaya-slujba',
        'administrativeLaw-services.nalog',
        'administrativeLaw-services.control',
        'administrativeLaw-services.tck'
    ]

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
                                    buttonText={null}/>
                        <PageContent title={'administrativeLaw-page.titleBottom'} 
                                     list={help}
                                     buttonText={null}
                                     descriptionBottom={'administrativeLaw-page.descriptionBottomSecond'}>
                            <p>{t('administrativeLaw-page.help')}</p>
                            <ul>
                                {adminHelpList.map((item, key) => (
                                    <li key={key}>
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