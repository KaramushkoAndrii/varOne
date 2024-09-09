
import { useTranslation } from "react-i18next";

import MySwiper from "../../components/mySwiper/MySwiper";

import PageHeader from "../../components/pageHeader/PageHeader";
import PageContent from "../../components/pageContent/PageContent";
import InfoCard from "../../components/infoCard/InfoCard";
import RecomendList from "../../components/recomendList/RecomendList";
import foto from '../../resources/cases.webp';
import foto2 from '../../resources/duty.webp';
import foto3 from '../../resources/family.webp';
import foto4 from '../../resources/lawyerH.webp';

import './brakPage.scss';

const BrakPage = ({onToggleModal}) => {

    const { t } = useTranslation();

    const list = [
        'brak-list.divorce',
        'brak-list.collection-of-alimony',
        'brak-list.division-of-property'
    ]

    const divorceList = [
        'your-place',
        'without',
        'agree',
        'kids',
        'original',
        'copy'
    ]

    const divorceListBottom = [
        'adult',
        'dissagre'
    ]

    const alimonyList = [
        'alimony-by-kid',
        'alimony-by-parrent',
        'change-alimony',
        'past-period-alimony'
    ]

    const alimonyDescriptionList = [
        'first',
        'second',
        'third',
        'fourth',
        'fifth',
        'sixth'
    ]

    const slideData = [
        {
            image: foto,
            alt: 'descr',
            title:'brak-win.divorce-and-alimony',
            link: 'https://reyestr.court.gov.ua/Review/110419172 '
        },
        {
            image: foto2,
            title: 'brak-win.divorce',
            link: 'https://reyestr.court.gov.ua/Review/100898590 '
        },
        {
            image: foto3,
            alt: 'descr',
            title: 'brak-win.alimony',
            link: 'https://reyestr.court.gov.ua/Review/93891443'
        },
        {
            image: foto4,
            alt: 'descr',
            title: 'brak-win.change-alimony',
            link: 'https://reyestr.court.gov.ua/Review/98285614'
        }
    ]

    const swiperConfig = {
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true
    };

    return (
        <>
            <PageHeader text={'brak'}
                        bgClass={'brak'}/>
            <div className="page-container">
                <InfoCard onToggleModal={onToggleModal}/>

                <section className="page-info">
                    <PageContent title={'brak-page.title'} 
                                 titleDescription={'brak-page.titleDescription'}
                                 buttonText=''
                                 list={list}>
                        <p>{t('brak-page.with-out-you')}</p>
                        <p>{t('brak-page.seven-years')}</p>

                        <h2>{t('brak-page.title-divorce')}</h2>

                        <ul className="divorced-list">
                            {divorceList.map((item,key) => <li key={key}>{t(`divorce-list.${item}`)}</li>)}
                        </ul>

                        <p><b>{t('divorce-list.divorce')}</b></p>

                        <ul className="divorced-list">
                            {divorceListBottom.map((item,key) => <li key={key}>{t(`divorce-list.${item}`)}</li>)}
                        </ul>

                        <h2>{t('brak-page.title-collection-of-alimony')}</h2>

                        <ul className="alimony-list">
                            {alimonyList.map((item, key) => <li key={key}>{t(`collection-of-alimony-list.${item}`)}</li>)}
                        </ul>

                        {alimonyDescriptionList.map((item,key) => (
                            <p className="alimony-description" key={key}>{t(`collection-of-alimony-description.${item}`)}</p>
                        ))}

                        <h3>{t('brak-page.consultation')}</h3>

                        <RecomendList />

                        <h2 className="brak-win">{t('brak-win.title')}</h2>

                        <MySwiper slides={slideData} 
                                  swiperConfig={swiperConfig}
                                  moreBtn={'brak-win.button'} />
                        
                    </PageContent>
                </section>

            </div>
        </>
    )
}

export default BrakPage;