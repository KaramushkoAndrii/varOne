
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import PageHeader from "../../components/pageHeader/PageHeader";
import InfoCard from "../../components/infoCard/InfoCard";
import PageContent from "../../components/pageContent/PageContent";
import Services from "../../components/services/Services";
import ImgContainer from "../../components/imgContainer/ImgContainer";
import { workerList } from "../../components/lists/Lists";

import trydoviSpory from '../../resources/workerPage/trudovi-spory.webp';

import './workerPage.scss';

const WorkerPage = ({isOpen}) => {

    const { t } = useTranslation();

    const pageTitle = t('services.worker')
    const lawyerServices = [
        'consultation',
        'razrabotka',
        'podgotovka',
        'predstavitelstvo',
        'v-slychae-neobhodimosti'
    ]

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <PageHeader text={pageTitle} bgClass={'worker'} />

            <div className='page-container'>

                <InfoCard isOpen={isOpen} />

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

                        <Services list={workerList} />
                        <h3 className="worker__lower">{t('protection-page.more')}</h3>
                </section>

            </div>
        </>
    )
}

export default WorkerPage