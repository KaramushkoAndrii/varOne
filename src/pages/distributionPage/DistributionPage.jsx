
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';


import PageHeader from '../../components/pageHeader/PageHeader';
import InfoCard from '../../components/infoCard/InfoCard';
import PageContent from '../../components/pageContent/PageContent';
import RecomendList from '../../components/recomendList/RecomendList';
import MySwiper from '../../components/mySwiper/MySwiper';
import podil from '../../resources/podil-spilne.webp';
import ImgContainer from '../../components/imgContainer/ImgContainer';


import misceProzhivannya from '../../resources/familyPage/misce-prozivannya.webp';
import lisheniePrav from '../../resources/familyPage/pozbavlennya-batkivskih-prav.webp';

import './distribution.scss'

const DistributionPage = ({isOpen}) => {

    const { t } = useTranslation();

    const pageTitle = t('services.distribution')

    const distributionContentList = [
        'roditeli-zhivyt-otdelno',
        'interesy-rebenka',
        'vybor-rebenka',
        'vrebnye-privychki',
        'izmeneniye-mesta-zhitelstva',
        'leshenie-prav-na-rebenka'
    ]

    const lisheniePravList = [
        'uklonyaetsa-ot-obezanostey',
        'zhesto-obrashaetsya-s-rebenkom',
        'alcogoliki',
        'ecsplyatacia-rebenka',
        'opasnost-dly-rebenka'
    ]

    const poryadokObsheniyaContent = [
        "zloypotreblyaet-pravami",
        "poryadok-obsheniya-cherez-sud",
        "podacha-zayavleniya-v-sud",
        "reshenie-suda-po-obsheniu",
        "pri-reshenii-beretsya-vo-vnimanie"
    ]

    const reshenieList = [
        "ispolneniye-obyazonostey",
        "lichnaya-privyazanost-rebenka",
        "vozrast-rebenka",
        "sostoyanie-zdorovya",
        "drugie-obstoyatelsva",
        "psihicheskoe-zdorovye-roditeley",
        "zloypotreblenie-alcoholem"
    ]

    const lesheniePravPrichina = [
        "leshenie-ne-vypolnyut-obyazanosti",
        "leshenie-reguliryetsya",
        "leshenie-v-sudebnom-poryadke",
        "leshenie-privlekaet"
    ]

    const lesheniePravSudom = [
        "ne-zabrali-iz-roddoma",
        "uklonyaetsa-ot-vypolneniya-obezanostey",
        "zhestokoe-obrashenie",
        "chronicheskie-alkogoliki",
        "pribegaut-k-eksplyatacii",
        "osyzdeny-ugolovno"
    ]


    const posledstviyaList = [
        "poterya-prav",
        "ne-zakoniy-predstavitel-rebenka",
        "prava-i-lgoty",
        "ne-mojet-byt-usynovitelem",
        "lgoty-pri-potere-trudosposobnosti",
        "teryaet-drugie-prava"
    ]

    const slideData = [
        {
            image: podil,
            alt: 'descr',
            title:'distribution-page.lishenie-materi-prav',
            link: 'https://reyestr.court.gov.ua/Review/119350497'
        },
        {
            image: podil,
            alt: 'descr',
            title: 'distribution-page.mesto-zhitelstva-rebenka',
            link: 'https://reyestr.court.gov.ua/Review/105222656'
        },
        {
            image: podil,
            alt: 'descr',
            title: 'distribution-page.ustranenie-prepytstviy-v-obshenii',
            link: 'https://reyestr.court.gov.ua/Review/104812131'
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
                        bgClass={'distribution'} />

            <div className='page-container'>
                <InfoCard isOpen={isOpen}/>


                <section className='page-info'>
                    <PageContent title={'distribution-page.title'}
                                 titleDescription={'distribution-page.titleDescription'}
                                 buttonText={null}>

                                {distributionContentList.map((item,key) => {

                                    if (key === 2) {
                                        return (
                                            <>
                                                <ImgContainer src={misceProzhivannya} alt={'misce-projivannya'} />
                                                <p className='distribution__content' key={key}>{t(`distribution-page.${item}`)}</p>
                                            </>
                                        )
                                    } else {
                                        return <p className='distribution__content' key={key}>{t(`distribution-page.${item}`)}</p>
                                    }
                                })}

                                <ul className='lishenie__prav--list'>
                                    {lisheniePravList.map((item, key) => (
                                        <li key={key} className='lishenie__prav--item'>
                                            {t(`distribution-page.${item}`)}
                                        </li>
                                    ))}
                                </ul>


                                <h2 className='distribution__win'>{t('distribution-page.win')}</h2>
                                <MySwiper slides={slideData} 
                                          swiperConfig={swiperConfig}
                                          moreBtn={'buttons.detal'} />

                                <h3 className='obshenie__title'>{t('distribution-page.poryadok-obsheniya')}</h3>
                                {poryadokObsheniyaContent.map((item,key) => (
                                    <p key={key} className='poryadok__obshenitaContent'>
                                        {t(`distribution-page.${item}`)}
                                    </p>
                                ))}
                                <ul className='uchastie__list'>
                                    {reshenieList.map((item, key) => (
                                        <li key={key} className='uchastie__item'>{t(`distribution-page.${item}`)}</li>
                                    ))}
                                </ul>
                                <p>{t('distribution-page.v-slychae-ukloneniya')}</p>



                                <h3 className='lishenie__title'>{t('distribution-page.leshenie-roditelskih-prav')}</h3>
                                <ImgContainer src={lisheniePrav} alt={'pozbavlennya-batkivskih-prav'} />
                                <div className='leshenie__container'>
                                    {lesheniePravPrichina.map((item,key) => (
                                        <p key={key} className='leshenie__content'>
                                            {t(`distribution-page.${item}`)}
                                        </p>
                                    ))}
                                </div>


                                <h3 className='lishenie__sudom'>{t('distribution-page.mogut-byt-lisheny')}</h3>
                                <ul className='lishenie__list'>
                                    {lesheniePravSudom.map((item, key) => (
                                        <li key={key} className='lishenie__item'>
                                            {t(`distribution-page.${item}`)}
                                        </li>
                                    ))}
                                </ul>

                                <h3 className='lishenie__posledstviya'>{t('distribution-page.posledstviya')}</h3>
                                <ul className='posledstviya__list'> 
                                    {posledstviyaList.map((item,key) => (
                                        <li key={key} className='posledstviya__item'>
                                            {t(`distribution-page.${item}`)}
                                        </li>
                                    ))}
                                </ul>
                                <p className='distribution__finish'>{t('distribution-page.soderjanie-rebenka')}</p>

                                <RecomendList />

                                </PageContent>
                </section>
            </div>

            
        </>
    )   
}

export default DistributionPage;