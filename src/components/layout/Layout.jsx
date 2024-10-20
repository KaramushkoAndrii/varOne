import { Outlet, useLocation } from 'react-router-dom';
import { motion,  AnimatePresence} from 'framer-motion';
import Form from '../form/Form';
import Footer from '../footer/Footer';

const Layout = () => {

    const location = useLocation();


    return (
        <>
            
            <AnimatePresence mode="wait">
                <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                >
                    <main>
                        <Outlet /> {/* Здесь будут рендериться ваши страницы */}
                    </main>
                </motion.div>
            </AnimatePresence>
            
            <Form />
            <Footer />
        </>
    )
}

export default Layout