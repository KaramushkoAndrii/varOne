
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import PageHeader from "../components/pageHeader/PageHeader";
import PageContent from "../components/pageContent/PageContent";
import InfoCard from "../components/infoCard/InfoCard";
import RecomendList from "../components/recomendList/RecomendList";

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

    const win = [
        {
            title: "divorce-and-alimony",
            img: "",
            url: "https://reyestr.court.gov.ua/Review/110419172"
        },
        {
            title: "divorce",
            img: "",
            url: "https://reyestr.court.gov.ua/Review/100898590"
        },
        {
            title: "alimony",
            img: "",
            url: "https://reyestr.court.gov.ua/Review/93891443"
        },
        {
            title: "change-alimony",
            img: "",
            url: "https://reyestr.court.gov.ua/Review/98285614"
        }
    ]

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

                        <h2>{t('brak-win.title')}</h2>
                    </PageContent>
                </section>

            </div>
        </>
    )
}

export default BrakPage;