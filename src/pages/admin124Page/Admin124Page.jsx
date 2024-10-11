
import { useTranslation } from 'react-i18next';


import PageHeader from '../../components/pageHeader/PageHeader';
import PageContent from '../../components/pageContent/PageContent';
import InfoCard from '../../components/infoCard/InfoCard';
import RecomendList from '../../components/recomendList/RecomendList';
import MySwiper from '../../components/mySwiper/MySwiper';
import ImgContainer from '../../components/imgContainer/ImgContainer';
import pdd from '../../resources/124Page/zahist-pdd.webp';
import img from '../../resources/podil-zemlya.webp';

import './admin124Page.scss'


const Admin124Page =({isOpen}) => {

    const { t } = useTranslation();

    const lawyerServices = [
        "admin124-page.dtp-124",
        "admin124-page.dtp-286",
        "admin124-page.vziskanie-usherba",
        "admin124-page.zashita-130"
    ]

    const securityList = [
        "zashita-vyezd",
        "zashita124",
        "zashita286",
        "zashita-hodotaystvo",
        "zashita-opredelenie",
        "zashita-strahovaya",
        "zashita-ecspertiza",
        "zashita-analiz",
        "zashita-objalovanie",
        "zashita-dosudebnoe-rasledovanie"
    ]

    const dtpList = [
        "soprovozdenie-v-sude",
        "vozmeshenie-usherba",
        "oredelenie-summ",
        "predstavitelstvo-v-strahovoy"
    ]

    const slideData = [
        {
            image: img,
            alt: 'descr',
            title:'admin124-page.win',
            link: 'https://reyestr.court.gov.ua/Review/83013158'
        },
        {
            image: img,
            alt: 'descr',
            title:'admin124-page.win',
            link: 'https://reyestr.court.gov.ua/Review/76502281'
        },
        {
            image: img,
            alt: 'descr',
            title:'admin124-page.win',
            link: 'https://reyestr.court.gov.ua/Review/80038689'
        },
        {
            image: img,
            alt: 'descr',
            title:'admin124-page.win',
            link: 'https://reyestr.court.gov.ua/Review/75185739'
        }
    ]

    const swiperConfig = {
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true
    };


    return (
        <>
            <PageHeader text={'admin124'}
                        bgClass={'admin124'} />

            <div className="page-container">
                <InfoCard isOpen={isOpen} />

                <section className="page-info">

                    <PageContent title={'admin124-page.title'} 
                                 sectionHeader={'admin124-page.lawyer-services'}
                                 list={lawyerServices}
                                 buttonText={null}>

                        <div className='admin124__slider'>
                            <h2 className='admin124__win--title'>{t('admin124-page.win-title')}</h2>
                            <MySwiper slides={slideData}
                                      swiperConfig={swiperConfig}
                                      moreBtn={'buttons.detal'} />
                        </div>


                        <h2 className='admin124__subtitle'>{t('admin124-page.lawyer-services')}</h2>
                        <p className='admin124__description'>{t('admin124-page.poslugi-7-years')}</p>


                        <div className='admin124__zahist'>
                            <ImgContainer src={pdd} alt={'zahist-pri-pdd'} />
                            <h3 className='admin124__subtitle'>{t('admin124-page.zashita-title')}</h3>
                            <ul className='admin124__list'>
                                {securityList.map((item, key) => (
                                    <li key={key} className='admin__list--item'>{t(`admin124-page.${item}`)}</li>
                                ))}
                            </ul>
                        </div>


                        <div className='admin124__zahist'>
                            <h3 className='admin124__subtitle'>{t('admin124-page.zashita-postradavshih-title')}</h3>
                            <ul className='admin124__list'>
                                {dtpList.map((item, key) => (
                                    <li key={key} className='admin__list--item'>{t(`admin124-page.${item}`)}</li>
                                ))}
                            </ul>
                        </div>


                        <RecomendList />
                    </PageContent>
                </section>
            </div>

        </>
    )
}

export default Admin124Page;