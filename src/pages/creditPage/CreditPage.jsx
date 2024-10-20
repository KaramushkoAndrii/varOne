

import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import PageHeader from '../../components/pageHeader/PageHeader';
import InfoCard from '../../components/infoCard/InfoCard';
import PageContent from '../../components/pageContent/PageContent';
import RecomendList from '../../components/recomendList/RecomendList';
import ImgContainer from '../../components/imgContainer/ImgContainer';


import zahist from '../../resources/securityPage/zahist-prav-ta-interesiv.webp';
import './creditPage.scss';

const CreditPage = ({isOpen}) => {

    const { t } = useTranslation();
    const pageTitle = t('services.credit')

    const creditContent = [
        'credits',
        'banks',
        'with-lawyer',
        'without-lawyer',
        'hard'
    ];

    const helpList = [
        'analiz',
        'mediator',
        'protection',
        'create',
        'new'
    ]

    const creditContentBottom = [
        'our-way',
        'entirely',
        'free'
    ]


    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <PageHeader text={pageTitle}
                        bgClass={'credit'}/>

            <div className='page-container'>
                <InfoCard isOpen={isOpen} />

                <section className='page-info'>
                    <PageContent title={'credit-page.title'}
                                 buttonText={null}>


                        
                        {creditContent.map((item, key) => {

                            if (key === 2) {
                                return (
                                    <>
                                        <ImgContainer src={zahist} alt={'zahist-prav'} />
                                        <p key={key}>{t(`credit-page.${item}`)}</p>
                                    </>
                                )
                            } else {
                                return (
                                    <p key={key}>{t(`credit-page.${item}`)}</p>
                                )
                            }
                        })}

                        <h3 className='credits__subtitle'>{t('credit-page.sub-title')}</h3>

                        <ul className='credit__help-list'>
                            {helpList.map((item, key) => (
                                <li key={key}>
                                    {t(`credit-page-list.${item}`)}
                                </li>
                            ))}
                        </ul>

                        {creditContentBottom.map((item, key) => (
                            <p key={key}>{t(`credit-page.${item}`)}</p>
                        ))}

                        <RecomendList />
                    </PageContent>
                </section>
            </div>
        </>
    )
}

export default CreditPage;