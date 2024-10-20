
import { useTranslation } from "react-i18next";

import HeroPage from "../components/heroPage/HeroPage";
import Welcome from "../components/welcome/Welcome";
import MainServices from "../components/mainServices/MainServices";
import { Helmet } from "react-helmet";


const HomePage = ({isOpen}) => {

    const { t } = useTranslation();

    const pageTitle = t('pages.main');
    const pageDescription = t('pages.description');

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="website" />
            </Helmet>
            <HeroPage isOpen={isOpen}/>
            <Welcome isOpen={isOpen}/>
            <MainServices isOpen={isOpen}/>
        </>
    )
}

export default HomePage;