import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPixel from 'react-facebook-pixel';



const PixelRouteTracker = () => {
    const location = useLocation();

    useEffect(() => {
        ReactPixel.pageView();
        console.log(`We findeng on: ${location.pathname}`)
    }, [location])


    return null
}

export default PixelRouteTracker;