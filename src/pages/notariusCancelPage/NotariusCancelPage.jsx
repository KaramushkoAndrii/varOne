

import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import PageHeader from '../../components/pageHeader/PageHeader';
import PageContent from '../../components/pageContent/PageContent';
import InfoCard from '../../components/infoCard/InfoCard';
import RecomendList from '../../components/recomendList/RecomendList';
import ImgContainer from '../../components/imgContainer/ImgContainer';


import oskarjennya from '../../resources/notariusPage/oskarjennya.webp';
import './notariusCancelPage.scss';

const NotariusCancelPage = ({isOpen}) => {

    const { t } = useTranslation();
    
    const pageTitle = t('services.notarius')

    const notariusDescriptionTop = [
        "ispolnitelnaya-nadpis",
        "nadpis-cel",
        "uslobie-isponlitelnoy-nadpisi",
        "vnimanie"
    ]

    const zapisContent = [
        "data",
        "adress",
        "adress-doljnika",
        "srok",
        "summa",
        "razmer-platy",
        "number",
        "data-juridicheskaya",
        "srok-k-ispolneniu"
    ]

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <PageHeader text={pageTitle}
                        bgClass={'notarius'}/>

            <div className="page-container">
                <InfoCard isOpen={isOpen} />

                <section className="page-info">
                    <PageContent title={'notarius-page.title'}
                                 titleDescription={'notarius-page.each'}
                                 buttonText={null}>

                        <ImgContainer src={oskarjennya} alt={'oskarjennya-notarius'} />
                        <div className='notarius__content'>
                            {notariusDescriptionTop.map((item,key) => (
                                <p key={key} className='notarius__content--item'>{t(`notarius-page.${item}`)}</p>
                            ))}
                        </div>

                        <h3 className='notarius__subtitle'>{t('notarius-page.kak-uznat')}</h3>
                        <p className='notarius__description'>{t('notarius-page.pismo-na-pochtu')}</p>

                        <h3 className='notarius__subtitle'>{t('notarius-page.why')}</h3>
                        <p className='notarius__description'>{t('notarius-page.logichno')}</p>

                        <h3 className='notarius__subtitle'>{t('notarius-page.cancel')}</h3>
                        <p className='notarius__description'>{t('notarius-page.cancel-sud')}</p>
                        <p className='notarius__description'>{t('notarius-page.nadpis-zaconna')}</p>
                        

                        <h3 className='notarius__subtitle'>{t('notarius-page.nadpis-content')}</h3>
                        <p className='notarius__description'>{t('notarius-page.nadpis-content-must')}</p>
                        <ul className='notarius__list'>
                            {zapisContent.map((item, key) => (
                                <li key={key} className='notarius__list--item'>
                                    {t(`notarius-page.${item}`)}
                                </li>
                            ))}
                        </ul>
                        <p className='notarius__description'>{t('notarius-page.important')}</p>
                        <p className='notarius__description'>{t('notarius-page.pri-nesobludenii')}</p>

                        <h3 className='notarius__subtitle'>{t('notarius-page.na-chto-obratit-vnimanie')}</h3>
                        <p className='notarius__description'><i>1. {t('notarius-page.ne-udostoveren')}</i></p>
                        <p className='notarius__description'>{t('notarius-page.ne-udostoveren-description')}</p>

                        <p className='notarius__description'><i>2. {t('notarius-page.sroki')}</i></p>
                        <p className='notarius__description'>{t('notarius-page.sroki-description')}</p>

                        <p className='notarius__description'><i>3. {t('notarius-page.otsutsvie-spora')}</i></p>
                        <p className='notarius__description'>{t('notarius-page.otsutstvie-spora-description')}</p>



                        <h3 className='notarius__subtitle'>{t('notarius-page.ostanovit-vziskanie')}</h3>
                        <p className='notarius__description'>{t('notarius-page.ostanovit-vziskanie-zayavlenie')}</p>
                        <p className='notarius__description'>{t('notarius-page.ostanovit-vziskanie-podhod')}</p>

                       

                        <RecomendList />
                    </PageContent>

                </section>
            </div>
        </>
    )
}

export default NotariusCancelPage