
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';


import PageHeader from '../../components/pageHeader/PageHeader';
import PageContent from '../../components/pageContent/PageContent';
import InfoCard from '../../components/infoCard/InfoCard';
import RecomendList from '../../components/recomendList/RecomendList';
import MySwiper from '../../components/mySwiper/MySwiper';
import ImgContainer from '../../components/imgContainer/ImgContainer';

import podil from '../../resources/podil-maina.webp';
import sudovyPoryadok from '../../resources/borgPage/styagnenya-sudovyi-poryadok.webp';
import './povernenyaBorguPage.scss'

const PovernenyaBorguPage = ({isOpen}) => {

    const { t } = useTranslation();

    const pageTitle = t('services.dolg')

    const dosudebnoeList = [
        "econom",
        "peregovory",
        "garantiy-net"
    ]

    const advokatDosudenboList = [
        "sbor-informacii",
        "trebovanie",
        "contact"
    ]

    const sudebnyPoryadokList = [
        "ne-nameren",
        "pered-sudom",
        "pri-razrabotke",
        "posle-resheniya",
        "finaly"
    ]

    const slideData = [
        {
            image: podil,
            alt: 'descr',
            title:'vozvrat-dolga-page.win-dolgovaya-rospiska',
            link: 'https://reyestr.court.gov.ua/Review/113909704'
        },
        {
            image: podil,
            title: 'vozvrat-dolga-page.win-dolg-200',
            link: 'https://reyestr.court.gov.ua/Review/95816615'
        },
        {
            image: podil,
            alt: 'descr',
            title: 'vozvrat-dolga-page.win-dolg-100',
            link: 'https://reyestr.court.gov.ua/Review/103342181'
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
                        bgClass={'dolg'} />
            

            <div className="page-container">
                <InfoCard isOpen={isOpen} />


                <section className="page-info">

                    <PageContent title={'vozvrat-dolga-page.title'}
                                 titleDescription={'vozvrat-dolga-page.titleDescription'}
                                 descriptionTop={'vozvrat-dolga-page.descriptionTop'}
                                 descriptionBottom={'vozvrat-dolga-page.descriptionBottom'}
                                 buttonText={null}>
                        
                        <h2 className='wining-list__vozvrat-dolga'>{t('vozvrat-dolga-page.win-title')}</h2>
                        <MySwiper slides={slideData} 
                                  swiperConfig={swiperConfig}
                                  moreBtn={'buttons.detal'} />

                        <h2 className='vozvrat__title'>{t('vozvrat-dolga-page.proces')}</h2>
                        <h3 className='vozvrat__title'>{t('vozvrat-dolga-page.dosudebnyi')}</h3>

                        <div className='dosudebnyi__description'>
                            {dosudebnoeList.map((item, key) => (
                                <p key={key} className='dosudebnoe__content'>{t(`vozvrat-dolga-page.${item}`)}</p>
                            ))}
                        </div>

                        <h3>{t('vozvrat-dolga-page.vo-vremya-dosudebnogo')}</h3>
                        <ul className='dosudebnyi__list'>
                            {advokatDosudenboList.map((item, key) => (
                                <li key={key} className='dosudebnoe__list--item'>{t(`vozvrat-dolga-page.${item}`)}</li>
                            ))}
                        </ul>


                        <ImgContainer src={sudovyPoryadok} alt={'styagnenya-u-sudovomy-poryadky'} />
                        <h3 className='vozvrat__title'>{t('vozvrat-dolga-page.sudebnyi-poryadok')}</h3>
                        <div className='sudebnyi-poryadok__content'>
                            {sudebnyPoryadokList.map((item,key) => (
                                <p key={key} className='sudebnoe__content'>{t(`vozvrat-dolga-page.${item}`)}</p>
                            ))}
                        </div>

                        <RecomendList />
                    </PageContent>

                </section>
            </div>
        </>
    )
}

export default PovernenyaBorguPage;