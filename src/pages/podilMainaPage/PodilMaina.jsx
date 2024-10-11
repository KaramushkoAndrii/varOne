import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import PageHeader from '../../components/pageHeader/PageHeader';
import PageContent from '../../components/pageContent/PageContent';
import InfoCard from '../../components/infoCard/InfoCard';
import RecomendList from '../../components/recomendList/RecomendList';
import MySwiper from '../../components/mySwiper/MySwiper';
import ImgContainer from '../../components/imgContainer/ImgContainer';


import podilMaina from '../../resources/podil-maina.webp';
import podilKvartyra from '../../resources/podil-kvartyra.webp';
import podilSpilne from '../../resources/podil-spilne.webp';
import podilZemlya from '../../resources/podil-zemlya.webp';
import podilZUrahuvannyam from '../../resources/familyPage/podil-z-urahuvannyam.webp';



import './podilMainaPage.scss';


const PodilMainaPage = ({isOpen}) => {

    const { t } = useTranslation();

    const pageTitle = t('services.podil')

    const sudebniyPoryadok = [
        "top",
        "middle",
        "second-middle",
        "bottom"
    ]

    const razdelList = [
        'razdel-list-a',
        'razdel-list-b',
        'razdel-list-c'
    ]

    const razdelDescription = [
        'razdel-sostavlyaetsya',
        'razdel-isklucheniya',
        'razdel-sud',
        'razdel-dolya',
        'razdel-main'
    ]

    const neRazdelList = [
        'do-braka',
        'darenee',
        'lichnye',
        'individualnie',
        'otdelnoe-projivanie',
        'more'
    ]

    const slideData = [
        {
            image: podilMaina,
            alt: 'descr',
            title:'podil-win.podil-maina',
            link: 'https://reyestr.court.gov.ua/Review/104454342'
        },
        {
            image: podilKvartyra,
            title: 'podil-win.podil-kvartyra',
            link: 'https://reyestr.court.gov.ua/Review/106214322'
        },
        {
            image: podilSpilne,
            alt: 'descr',
            title: 'podil-win.podil-spilne',
            link: 'https://reyestr.court.gov.ua/Review/117779520'
        },
        {
            image: podilZemlya,
            alt: 'descr',
            title: 'podil-win.podil-zemlya',
            link: 'https://reyestr.court.gov.ua/Review/93609451'
        }
    ]

    const swiperConfig = {
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true
    };


    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <PageHeader text={pageTitle}
                        bgClass={'podil'} />

            <div className='page-container'>
                <InfoCard isOpen={isOpen} />

                <section className='page-info'>
                    <PageContent title={'podil-page.title'}
                                 buttonText={null}
                                 titleDescription={'podil-page.titleDescription'}
                                 sectionHeader={'podil-page.razdelenie-proishodit'}>


                        <p className='podil__description'>
                            <span><b>{t('podil-page.dobrovolnyi-poryadok')}</b></span>
                            {t('podil-page.dobrovolnyi-poryadok-description')}
                        </p>

                        <p className='podil__description'>
                            <span><b>{t('podil-page.sydebny-poryadok')}</b></span>
                            {t('podil-page.sydebny-poryadok-description')}
                        </p>

                        <h2 className='podil__slider--title'>{t('podil-page.razdel-win')}</h2>
                        <MySwiper slides={slideData} 
                                  swiperConfig={swiperConfig}
                                  moreBtn={'buttons.detal'} />


                        <h2 className='podil__title podil--dobrovilny'>{t('podil-page.dobrovolnyi-poryadok-razdel')}</h2>
                        <p className='podil__description podil__description--dobrovilny'>{t('podil-page.dobrovolnyi-poryadok-razdel-description')}</p>

                        <h2 className='podil__title podil--sudovy'>{t('podil-page.sydebny-poryadok-razdel')}</h2>
                        <div>
                            {sudebniyPoryadok.map((item, key) => (
                                <p key={key} className='podil__description podil__description--sudovy'>
                                    {t(`podil-page.sydebny-poryadok-razdel-description-${item}`)}
                                </p>
                            ))}
                        </div>

                        <h3 className='podil__rezdel--title'>{t('podil-page.pri-razdele')}</h3>


                        <ul className='podil__list'>
                            {razdelList.map((item, key) => <li key={key} className='podil__item'>{t(`podil-page.${item}`)}</li>)}
                        </ul>

                        <ImgContainer src={podilZUrahuvannyam} alt={'podil-vidbuvaetsya-z-urahuvannyam'} />
                        {razdelDescription.map((item,key) => (
                            <p key={key} className='razdel__description'>{t(`podil-page.${item}`)}</p>
                        ))}


                        <h3 className='podil__not-list'>{t('podil-page.ne-razdel-title')}</h3>

                        <ul className='podil__list podil__list--ne'>
                            {neRazdelList.map((item,key) => <li key={key} className='podil__item'>{t(`podil-page.ne-razdel-${item}`)}</li>)}
                        </ul>


                        <RecomendList />
                    </PageContent>
                </section>
            </div>
        </>
    )
}

export default PodilMainaPage;