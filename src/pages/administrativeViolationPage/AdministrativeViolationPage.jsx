
import { useTranslation } from "react-i18next";


import PageHeader from "../../components/pageHeader/PageHeader";
import InfoCard from "../../components/infoCard/InfoCard";
import PageContent from "../../components/pageContent/PageContent";
import Services from "../../components/services/Services";
import ImgContainer from "../../components/imgContainer/ImgContainer";
import { AdministrativeViolationList } from "../../components/lists/Lists";


import pravoporushennya from '../../resources/adminPravoporushennyaPage/pravoporushennya-poslugi.webp';
import './administrativeViolationPage.scss'

const AdministrativeViolationPage = ({onToggleModal}) => {

    const { t } = useTranslation();

    const lawyerServices = [
        'nadejnaya-zashita',
        'pomosh-v-sbore-dokazatelstv',
        'vazno'
    ]


    const lawyerHelpList = [
        'besplatnye-konsyltacii',
        'razrabotka',
        'kachestvenuy-podgotovky',
        'predstavitelsvo-vashih-interesov',
        'dokazatelstv',
        'pomosh'
    ]

    return (
        <>
            <PageHeader text={'administrative-violation'} bgClass={'administrative-violation'} />

            <div className='page-container'>
                <InfoCard onToggleModal={onToggleModal} />
                
                <section className='page-info'>
                    <PageContent title={'admin-violation-page.title'}
                                 titleDescription={'admin-violation-page.juridicheskaya-pomosh'}
                                 descriptionTop={'admin-violation-page.admibistrativnoe-narushenie-eto'}
                                 buttonText={null}
                                 descriptionBottom={'admin-violation-page.svoi-normy-zaconodatelstva'}>
                                

                                <h3 className="admin-violation__title">{t('admin-violation-page.uslugi-title')}</h3>
                                <ImgContainer src={pravoporushennya} alt={'poslygi-advokata'} />
                                <div className="lawyer__services">
                                    {lawyerServices.map((item,key) => (
                                        <p key={key} className="lawyer__services--item">{t(`admin-violation-page.${item}`)}</p>
                                    ))}
                                </div>


                                <h3 className="admin-violation__title--second">{t('admin-violation-page.posle-obrasheniya-title')}</h3>
                                <ul className="admin-violation__list">
                                    {lawyerHelpList.map((item, key) => (
                                        <li key={key} className="admin-violation__item">
                                            {t(`admin-violation-page.${item}`)}
                                        </li>
                                    ))}
                                </ul>

                                <Services title={'admin-violation-page.services-title'} list={AdministrativeViolationList} />

                                <h3 className="protection-page__lower">{t('protection-page.more')}</h3>
                    </PageContent>

                </section>
            </div>
        </>
    )
}

export default AdministrativeViolationPage;