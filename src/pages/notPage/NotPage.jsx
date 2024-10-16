

import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import PageHeader from '../../components/pageHeader/PageHeader';
import InfoCard from '../../components/infoCard/InfoCard';

import './notPage.scss';


const NotPage = ({isOpen}) => {

    const { t } =useTranslation();

    const pageTitle = t('services.not-page')

    return (
        <>

            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <PageHeader text={pageTitle}
                        bgClass={'dev'}/>

            <div className="page-container">

                <InfoCard  isOpen={isOpen}/>

                <section className="page-info">
                    <section className="main-section">
                        <p>{t('not-page.description')}</p>
                        <h3>{t('not-page.cta')}</h3>
                    </section>
                </section>
            </div>
        </>
    )
}

export default NotPage