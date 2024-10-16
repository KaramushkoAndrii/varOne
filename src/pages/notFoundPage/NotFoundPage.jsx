


import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import PageHeader from '../../components/pageHeader/PageHeader';
import InfoCard from '../../components/infoCard/InfoCard';

import './notFoundPage.scss';

const NotFoundPage = ({isOpen}) => {

    const { t } =useTranslation();
    const pageTitle = '404';


    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>

            <PageHeader text={'services.not-found'}
                        bgClass={'not-found'} />

            <div className="page-container">
                <InfoCard isOpen={isOpen}/>


                <section className="page-info">
                    <h2 className='not-found__title'>{t('not-found.description')}</h2>

                    <Link className='not-found__link' to={"/"}>{t('buttons.back')}</Link>
                </section>
            </div>
        </>
    )
}

export default NotFoundPage;