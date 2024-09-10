

import { useTranslation } from 'react-i18next';
import PageHeader from '../../components/pageHeader/PageHeader';
import InfoCard from '../../components/infoCard/InfoCard';
import PageContent from '../../components/pageContent/PageContent';
import RecomendList from '../../components/recomendList/RecomendList';


import './creditPage.scss';

const CreditPage = ({onToggleModal}) => {

    const { t } = useTranslation();

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
        'entirely',
        'free'
    ]


    return (
        <>
            <PageHeader text={'credit'}
                        bgClass={'credit'}/>

            <div className='page-container'>
                <InfoCard onToggleModal={onToggleModal} />

                <section className='page-info'>
                    <PageContent title={'credit-page.title'}
                                 buttonText={null}>
                        {creditContent.map((item, key) => (
                            <p key={key}>{t(`credit-page.${item}`)}</p>
                        ))}

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