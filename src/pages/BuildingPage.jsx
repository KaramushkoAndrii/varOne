

import PageHeader from "../components/pageHeader/PageHeader";
import InfoCard from "../components/infoCard/InfoCard";


const BuildingPage = () => {
    return (
        <>
            <PageHeader text={'building'} 
                        bgClass={'build'}/>

            <div className="page-container">

                <InfoCard />

                <div className="page-info">

                </div>
            </div>
        </>
    )
}

export default BuildingPage;