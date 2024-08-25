import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Form from '../form/Form';
import Footer from '../footer/Footer';

const Layout = () => {
    return (
        <>
            <Header />
            
            <main>
                <Outlet />
            </main>
            
            <Form />
            <Footer />
        </>
    )
}

export default Layout