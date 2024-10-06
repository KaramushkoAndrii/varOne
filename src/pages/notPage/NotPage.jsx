
import { useTranslation } from 'react-i18next';
import PageHeader from '../../components/pageHeader/PageHeader';
import InfoCard from '../../components/infoCard/InfoCard';

import './notPage.scss';


const NotPage = ({onToggleModal}) => {

    const { t } =useTranslation();

    return (
        <>
            <PageHeader text={'not-page'}
                        bgClass={'dev'}/>

            <div className="page-container">

                <InfoCard  onToggleModal={onToggleModal}/>

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