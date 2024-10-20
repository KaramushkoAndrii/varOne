

import { motion } from "framer-motion";

const PageTransition = ({children}) => {
    const variants = {
        intial: {opacity: 0, x: 100},
        animate: {opacity: 1, x: 0},
        exit: {opacity: 0, x: -100}
    }

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{duration: 0.5}}>
                {children}
        </motion.div>
    );
};



export default PageTransition;