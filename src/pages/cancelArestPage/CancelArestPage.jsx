

import { useTranslation } from 'react-i18next';

import PageHeader from '../../components/pageHeader/PageHeader';
import InfoCard from '../../components/infoCard/InfoCard';
import PageContent from '../../components/pageContent/PageContent';
import RecomendList from '../../components/recomendList/RecomendList';
import ImgContainer from '../../components/imgContainer/ImgContainer';


import areshtMaina from '../../resources/cancelPage/areshtMaina.webp';
import arested from '../../resources/cancelPage/arested.webp'
import './cancelArestPage.scss';


const CancelArestPage = ({isOpen}) => {

    const { t } = useTranslation();

    const arestReasons =[
        'arest-imushestva',
        'pri-nalozhenii',
        'cel-nalozheniya'
    ]

    const canBeArrestedList = [
        'arrested-house',
        'arrested-car',
        'arrested-luxury',
        'arrested-money',
        'arrested-paper'
    ]

    const notArrester = [
        'not-products',
        'not-everyday',
        'not-prize',
        'not-another'
    ]

    const criminalArrestList = [
        "obespechenie-sohrannosti",
        "arest-i-confiskaciya",
        "mera-nakazaniya",
        "isk"
    ]

    const arrestedList = [
        "passivnost",
        "arrest",
        "chasto",
        "dolzhnik"
    ]

    return (
        <>
            <PageHeader text={'cancel'}
                        bgClass={'cancel'}/>

            <div className='page-container'>
                <InfoCard isOpen={isOpen} />

                <section className='page-info'>
                    <PageContent title={'cancel-page.title'} 
                                 titleDescription={'cancel-page.titleDescription'}
                                 buttonText={null}/>

                    {arestReasons.map((item, key) => (
                        <p key={key} className='arest__content'>{t(`cancel-page.${item}`)}</p>
                    ))}


                    <ImgContainer src={areshtMaina} alt={'arest-maina'} />
                    <h3 className='arest__subtitle'>{t('cancel-page.sluchai-aresta')}</h3>

                    <p className='arest__content'>{t('cancel-page.arrest-reasons')}</p>

                    <h3 className='arest__subtitle'>{t('cancel-page.poryadok-nalozheniya')}</h3>

                    <p className='arest__content'>{t('cancel-page.regulirovanie-poryadka')}</p>

                    <p className='arest__content'>{t('cancel-page.often-reasons')}</p>

                    <ImgContainer src={arested} alt={'na-sho-nakladaut-arest'} />
                    <h3 className='arest__subtitle'>{t('cancel-page.arrested-thinks')}</h3>

                    <ul className='arrested-thinks__list'>
                        {canBeArrestedList.map((item, key) => (
                            <li key={key} className='arrested-list__item'>
                                {t(`cancel-page.${item}`)}
                            </li>
                        ))}
                    </ul>

                    <h4 className='arest__subtitle'>{t('cancel-page.arrested-more')}</h4>

                    <h3 className='arest__subtitle'>{t('cancel-page.not-arrested')}</h3>

                    <ul className='arrested-thinks__list'>
                        {notArrester.map((item, key) => (
                            <li key={key} className='arrested-list__item'>
                                {t(`cancel-page.${item}`)}
                            </li>
                        ))}
                    </ul>

                    <p className='arest__content'>{t('cancel-page.arrest-moszet-nakladovatsya')}</p>

                    <h3 className='arest__subtitle'>{t('cancel-page.criminal-procesing-title')}</h3>

                    <ul className='arrested-thinks__list'>
                        {criminalArrestList.map((item, key) => (
                            <li key={key} className='arrested-list__item'>
                                {t(`cancel-page.${item}`)}
                            </li>
                        ))}
                    </ul>

                    <h3 className='arest__subtitle'>{t('cancel-page.obespechenie-iska')}</h3>

                    <p className='arest__content'>{t('cancel-page.obespechenie-iska-description')}</p>

                    <h3 className='arest__subtitle'>{t('cancel-page.kak-snyat')}</h3>

                    <p className='arest__content'>{t('cancel-page.kak-snyat-description')}</p>

                    <ul className='arrested-thinks__list how-cancel__list'>
                        {arrestedList.map((item, key) => (
                            <li key={key} className='arrested-list__item'>
                                {t(`cancel-page.${item}`)}
                            </li>
                        ))}
                    </ul>

                    <h4 className='arest__conclusion'>{t('cancel-page.pravilniy-podhod')}</h4>

                    <RecomendList />
                </section>
            </div>
        </>
    )
}

export default CancelArestPage;