
import { useTranslation } from "react-i18next";

import PageHeader from "../../components/pageHeader/PageHeader";
import InfoCard from "../../components/infoCard/InfoCard";
import PageContent from "../../components/pageContent/PageContent";
import Services from "../../components/services/Services";
import Button from "../../components/button/Button";

import './protectionPage.scss'

const ProtectionPage = ({onToggleModal}) => {

    const { t } = useTranslation();

    const servicesList = [

        {   
            link: 'security',
            name: 'protection-page-list.security'
        },
        {
            link:'cancel',
            name: 'protection-page-list.cancel'
        },
        {
            link: 'security',
            name: 'protection-page-list.escort'
        },
        {
            link: 'less-damage',
            name: 'protection-page-list.less-damage'
        },
        {
            link: 'notarius',
            name: 'protection-page-list.notarius'
        },
        {
            link: 'inaction',
            name: 'protection-page-list.inaction'
        },
        {
            link: 'assessment',
            name: 'protection-page-list.assessment'
        },
        {
            link: 'credit',
            name: 'protection-page-list.credit'
        },
        {
            link: 'debt',
            name: 'protection-page-list.debt'
        },
    ]

    return (
        <>
            <PageHeader text={'protection'} bgClass={'protection'} />

            <div className="page-container">
                <InfoCard onToggleModal={onToggleModal} />

                <section className="page-info">
                    <PageContent title={'protection-page.title'}
                                 titleDescription={'protection-page.often'}
                                 descriptionTop={'protection-page.creditors'}
                                 buttonText={null}>

                        <Services title={'protection-page-list.title'} list={servicesList} />

                        <Button text={t('buttons.pageButton')} />

                        <h3 className="protection-page__lower">{t('protection-page.more')}</h3>

                    </PageContent>
                </section>

            </div>
        </>
    )
}

export default ProtectionPage