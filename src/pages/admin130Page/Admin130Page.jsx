


import { useTranslation } from 'react-i18next';
import PageHeader from '../../components/pageHeader/PageHeader';
import PageContent from '../../components/pageContent/PageContent';
import InfoCard from '../../components/infoCard/InfoCard';
import RecomendList from '../../components/recomendList/RecomendList';
import MySwiper from '../../components/mySwiper/MySwiper';
import ImgContainer from '../../components/imgContainer/ImgContainer';


import vidpovidalnist from '../../resources/lawyerPage/admin-pravoporushennya.webp';
import img from '../../resources/podil-zemlya.webp';

import './admin130Page.scss'

const Admin130Page = ({onToggleModal}) => {

    const { t } = useTranslation();

    const list = [
        "admin130-page.list-nevinnost",
        "admin130-page.list-udostoverenie",
        "admin130-page.list-shtraf"
    ]

    const topList = [
        "opyanenie",
        "reaction",
        "drager",
        "peredacha",
        "upotreblenie",
        "upodreblenie-posle-ostanovki"
    ]    

    const styagnenyaList = [
        "vziskanie-leshenie-prav",
        "vziskanie-shtraf",
        "vziskanie-konfiscaciya"
    ]

    const prytagnenyList = [
        "prvilvlechenie-protokol",
        "prvilvlechenie-napravlenie-v-sud",
        "prvilvlechenie-vyzov"
    ]

    const zaconnoePrivlechenieList = [
        "prvilvlechenie-video",
        "prvilvlechenie-zaconnaya-ostanovka",
        "prvilvlechenie-ficsaciya",
        "prvilvlechenie-viyavit",
        "prvilvlechenie-razyasnit",
        "prvilvlechenie-documenty-na-drager",
        "prvilvlechenie-poryadok-osmotra"
    ]    

    const whyList = [
        'pochemy-opyt',
        'pochemy-detalniy-analiz',
        'pochemy-individualniy-podhod',
        'pochemy-garantiya',
        'pochemy-poryadochnost'
    ]

    const helpList = [
        "dogovor",
        "oznacomlenie",
        "advocatskiy-zapros",
        "strategiya",
        "documenty"
    ]

    const slideData = [
        {
            image: img,
            alt: 'descr',
            title:'admin130-page.win-bez-sklady',
            link: 'https://reyestr.court.gov.ua/Review/113342322'
        },
        {
            image: img,
            alt: 'descr',
            title: 'admin130-page.win-bez-sklady',
            link: 'https://reyestr.court.gov.ua/Review/114067550'
        },
        {
            image: img,
            alt: 'descr',
            title: 'admin130-page.win-bez-sklady',
            link: 'https://reyestr.court.gov.ua/Review/114157104'
        },
        {
            image: img,
            alt: 'descr',
            title: 'admin130-page.win-bez-sklady',
            link: 'https://reyestr.court.gov.ua/Review/110850737'
        },
        {
            image: img,
            alt: 'descr',
            title: 'admin130-page.win-bez-sklady',
            link: 'https://reyestr.court.gov.ua/Review/113920755'
        },
        {
            image: img,
            alt: 'descr',
            title: 'admin130-page.win-bez-sklady',
            link: 'https://reyestr.court.gov.ua/Review/116228477'
        },
        {
            image: img,
            alt: 'descr',
            title: 'admin130-page.win-bez-sklady',
            link: 'https://reyestr.court.gov.ua/Review/115612649'
        }
    ]

    const swiperConfig = {
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true
    };

    return (
        <>
            <PageHeader text={'admin130'}
                        bgClass={'admin130'} />

            <div className="page-container">

                <InfoCard onToggleModal={onToggleModal} />

                <section className="page-info">
                    <PageContent title={'admin130-page.title'}
                                 sectionHeader={'admin130-page.title-list'}
                                 list={list}
                                 buttonText={null}>

                            <h3 className='admin130__subtitle'>{t('admin130-page.win')}</h3>
                            <MySwiper swiperConfig={swiperConfig}
                                      slides={slideData} 
                                      moreBtn={'buttons.detal'} />


                            <ImgContainer src={vidpovidalnist} alt={'vidpovidalnist-nastypae'} />
                            <h2 className='admin130__subtitle'>{t('admin130-page.otvetstvennost')}</h2>
                            <ul className='admin130__list'>
                                {topList.map((item, key) => (
                                    <li key={key} className='admin130__list-item'>{t(`admin130-page.${item}`)}</li>
                                ))}
                            </ul>

                            <h2 className='admin130__subtitle'>{t('admin130-page.vziskanie-title')}</h2>
                            <ul className='admin130__list'>
                                {styagnenyaList.map((item, key) => (
                                    <li key={key} className='admin130__list-item'>{t(`admin130-page.${item}`)}</li>
                                ))}
                            </ul>


                            <h3 className='admin130__subtitle admin130__subtitle--pb1'><b>{t('admin130-page.statistica')}</b></h3>
                            <h3 className='admin130__subtitle admin130__subtitle--pb1'>{t('admin130-page.otnositelno-question')}</h3>
                            <p className='admin130__description'>{t('admin130-page.otnositelno-answer')}</p>

                            <h3 className='admin130__subtitle'>{t('admin130-page.privlechenie-title')}</h3>
                            <ul className='admin130__list'>
                                {prytagnenyList.map((item, key) => (
                                    <li key={key} className='admin130__list-item'>{t(`admin130-page.${item}`)}</li>
                                ))}
                            </ul>


                            <h3 className='admin130__subtitle'>{t('admin130-page.privlechenie-zakonnoe')}</h3>
                            <ul className='admin130__list admin__list--m0'>
                                {zaconnoePrivlechenieList.map((item, key) => (
                                    <li key={key} className='admin130__list-item'>
                                        {t(`admin130-page.${item}`)}
                                    </li>
                                ))}
                            </ul>
                            <h3 className='admin130__subtitle admin130__subtitle--pb1'>{t('admin130-page.privlechenie-more')}</h3>
                            <p>{t('admin130-page.vajno')}</p>


                            <h3 className='admin130__subtitle'>{t('admin130-page.pochemy-my')}</h3>
                            <ul className='admin130__list'>
                                {whyList.map((item, key) => (
                                    <li key={key} className='admin130__list-item'>{t(`admin130-page.${item}`)}</li>
                                ))}
                            </ul>

                            <h3 className='admin130__subtitle'>{t('admin130-page.chem-mozhet-pomoch')}</h3>
                            <ul className='admin130__list'>
                                {helpList.map((item, key) => (
                                    <li key={key} className='admin130__list-item'>{t(`admin130-page.${item}`)}</li>
                                ))}
                            </ul>

                            <RecomendList />
                    </PageContent>
                </section>
            </div>
        </>
    )
}

export default Admin130Page;