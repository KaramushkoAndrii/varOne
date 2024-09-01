import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToAim = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if(hash) {
            const el = document.querySelector(hash);

            if(el) {
                el.scrollIntoView({behavior: 'smooth'})
            }
        } else {
            window.scrollTo(0,0);
        }
    }, [hash, pathname])

    return null
}

export default ScrollToAim;