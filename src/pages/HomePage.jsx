

import HeroPage from "../components/heroPage/HeroPage";
import Welcome from "../components/welcome/Welcome";
import MainServices from "../components/mainServices/MainServices";

const HomePage = ({isOpen}) => {
    return (
        <>
            <HeroPage isOpen={isOpen}/>
            <Welcome isOpen={isOpen}/>
            <MainServices isOpen={isOpen}/>
        </>
    )
}

export default HomePage;