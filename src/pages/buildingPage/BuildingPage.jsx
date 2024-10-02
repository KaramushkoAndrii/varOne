

import { useTranslation } from "react-i18next";

import PageHeader from "../../components/pageHeader/PageHeader";
import InfoCard from "../../components/infoCard/InfoCard";
import PageContent from "../../components/pageContent/PageContent";
import Services from "../../components/services/Services";
import ImgContainer from "../../components/imgContainer/ImgContainer";

import neruhomist from '../../resources/neruhomistPage/neruhomist.webp';

import './buildingPage.scss';

const BuildingPage = () => {

    const { t } = useTranslation();

    const tipyNarusheniy = [
        "prava-sobstvenosti",
        "razdel-nedvishimosty",
        "rastorjenie-dogovora",
        "ustranenie-ogranicheniy",
        "objalovanie-prava-sobstvenosti",
        "nedeystvitelny-dogovor",
        "spory-s-pravom-sobstvenosti",
        "nalozhenie-aresta"
    ]

    const helpList = [
        "dosudebnoe-uregulirovanie-help",
        "podgotovka-help",
        "predstavlenie-interesov-help",
        "objalovanie-help"
    ]

    const servicesList = [
        {
            link: 'suprovid-spravy-pro-vitrebuvanna-neruhomogo-maina',
            name: 'building-page.services-istrebovanie'
        },
        {
            link: 'rozarvannya-dogovory-orendy-zemli',
            name: 'building-page.services-rastorjenie'
        },
        {
            link: 'spory-pro-vyznanya-prava-vlasnosti-na-neruhome-maino',
            name: 'building-page.services-spory'
        },
        {
            link: 'spravy-pro-vyselennya-z-primishennya',
            name: 'building-page.servives-vyselenie'
        },
        {
            link: 'scasuvannya-dogovoriv-z-neruhomym-mainom',
            name: 'building-page.services-rastorjenie-nedvijemost'
        },
        {
            link: 'oformlennya-samovilno-zbudovanyh-objectiv',
            name: 'building-page.services-oformlenie-postroek'
        },
        {
            link: 'vydil-na-podil-maina-v-narure',
            name: 'building-page.services-vydel'
        },
        {
            link: 'suprovid-pryvatyzacii-kvartyry',
            name: 'building-page.services-privatizaciya'
            
        },
    ]

    return (
        <>
            <PageHeader text={'building'} 
                        bgClass={'build'}/>

            <div className="page-container">

                <InfoCard />

                <section className="page-info">
                    <PageContent title={'building-page.title'}
                                 titleDescription={'building-page.specialist'}
                                 descriptionTop={'building-page.spory'}
                                 buttonText={null}>

                        <div className="building__content building-narushenie__content">
                            <ImgContainer src={neruhomist} alt={'neruhomist-ts-zhitlovi-spory'} />
                            <h2 className="building__subtitle">{t('building-page.vidy')}</h2>
                            <ul className="building__list">
                                {tipyNarusheniy.map((item, key) => (
                                    <li key={key} className="building__item">
                                        {t(`building-page.${item}`)}
                                    </li>
                                ))}
                            </ul>
                            <h3 className="protection-page__lower">{t('protection-page.more')}</h3>
                        </div>

                        <p className="narushenie__description">
                            {t('building-page.consultation')}
                        </p>

                        <div className="building__content building-services__content">
                            <h2 className="building__subtitle">{t('building-page.lawyer-help-title')}</h2>
                            <ul className="building__list">
                                {helpList.map((item, key) => (
                                    <li key={key} className="building__item">
                                        {t(`building-page.${item}`)}
                                    </li>
                                ))}
                            </ul>
                            <h3 className="protection-page__lower">{t('protection-page.more')}</h3>
                        </div>


                        <Services list={servicesList} title={'building-page.services-title'}/>

                    </PageContent>
                </section>
            </div>
        </>
    )
}

export default BuildingPage;