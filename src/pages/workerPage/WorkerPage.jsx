
import { useTranslation } from "react-i18next";

import PageHeader from "../../components/pageHeader/PageHeader";
import InfoCard from "../../components/infoCard/InfoCard";
import PageContent from "../../components/pageContent/PageContent";
import Services from "../../components/services/Services";
import ImgContainer from "../../components/imgContainer/ImgContainer";

import trydoviSpory from '../../resources/workerPage/trudovi-spory.webp';

import './workerPage.scss';

const WorkerPage = ({onToggleModal}) => {

    const { t } = useTranslation();


    const lawyerServices = [
        'consultation',
        'razrabotka',
        'podgotovka',
        'predstavitelstvo',
        'v-slychae-neobhodimosti'
    ]

    const servicesList = [
        {
            link: 'styagnenya-zaborgovonosti',
            name: 'worker-page.vziskanie'
        },

        {
            link: 'suprovid-trudovogo-spory',
            name: 'worker-page.trudovoy-spor'
        },
        {
            link: 'styagnenya-dopomogy-pry-zvilnenni',
            name: 'worker-page.vyhodnoe-posobie'
        },
        {
            link: 'ponovlenya-na-roboti',
            name: 'worker-page.vozobnovlenie-na-rabote'
        },
        {
            link: 'tyagnenya-materialnoy-shkody',
            name: 'worker-page.vziskanie-materialnogo-usherba'
        },
        {
            link: 'yuredichniy-analiz',
            name: 'worker-page.juredicheskiy-analiz'
        },
        {
            link: 'skasyvanya-shtrafiv-derjpaci',
            name:'worker-page.otmena-shtrafov'
        }
    ]

    return (
        <>
            <PageHeader text={'worker'} bgClass={'worker'} />

            <div className='page-container'>

                <InfoCard onToggleModal={onToggleModal} />

                <section className='page-info'>
                    <PageContent title={'worker-page.title'}
                                 titleDescription={'worker-page.pravo-na-trud'}
                                 descriptionTop={'worker-page.gramotnaya-zashita'}
                                 descriptionBottom={'worker-page.advokat-zashitit'}
                                 buttonText={null}/>

                        <ImgContainer src={trydoviSpory} alt={'trudovi-spory'} />
                        <p className="worker__description">
                            {t('worker-page.obrativshis-k-advokatu')}
                        </p>

                        <h2 className="worker__more">
                            {t('worker-page.more-title')}
                        </h2>
                        <ul className="worker__more--list">
                            {lawyerServices.map((item, key) => (
                                <li key={key} className="worker__more--item">
                                    {t(`worker-page.${item}`)}
                                </li>
                            ))}
                        </ul>

                        <Services list={servicesList} />
                        <h3 className="worker__lower">{t('protection-page.more')}</h3>
                </section>

            </div>
        </>
    )
}

export default WorkerPage