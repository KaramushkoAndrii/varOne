
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import PageHeader from "../../components/pageHeader/PageHeader";
import InfoCard from "../../components/infoCard/InfoCard";
import PageContent from "../../components/pageContent/PageContent";
import Services from "../../components/services/Services";
import Button from "../../components/button/Button";
import { protectionList } from "../../components/lists/Lists";

import './protectionPage.scss'

const ProtectionPage = ({isOpen}) => {

    const { t } = useTranslation();

    const pageTitle = t('services.protection')

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <PageHeader text={pageTitle} bgClass={'protection'} />

            <div className="page-container">
                <InfoCard isOpen={isOpen} />

                <section className="page-info">
                    <PageContent title={'protection-page.title'}
                                 titleDescription={'protection-page.often'}
                                 descriptionTop={'protection-page.creditors'}
                                 buttonText={null}>

                        <Services title={'protection-page-list.title'} list={protectionList} />

                        <Button text={t('buttons.pageButton')} onClick={isOpen}/>

                        <h3 className="protection-page__lower">{t('protection-page.more')}</h3>

                    </PageContent>
                </section>

            </div>
        </>
    )
}

export default ProtectionPage