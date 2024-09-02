

import HeroPage from "../components/heroPage/HeroPage";
import Welcome from "../components/welcome/Welcome";
import MainServices from "../components/mainServices/MainServices";

const HomePage = ({onToggleModal}) => {
    return (
        <>
            <HeroPage onToggleModal={onToggleModal}/>
            <Welcome onToggleModal={onToggleModal}/>
            <MainServices onToggleModal={onToggleModal}/>
        </>
    )
}

export default HomePage;