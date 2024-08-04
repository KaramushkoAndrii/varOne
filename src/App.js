import { Suspense, useState } from 'react';
import { Container } from 'react-bootstrap';
//import logo from '../src/resources/logo.jpg'
//import { useTranslation } from 'react-i18next';
import Header from './components/header/Header';
import Modal from './components/modal/Modal';
//import Nav from './components/nav/nav'
import HeroPage from './components/heroPage/HeroPage';
import Welcome from './components/welcome/welcome';
//import ChangeLng from './components/changeLng/ChangeLng';
//import Nav from './components/nav/nav';
import MainServices from './components/mainServices/MainServices';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';



function App() {
  //const { t } = useTranslation();

  //const [modal, setModal] = useState(false);
  
  return (
    <div className="App">
      <Container>
        <Header />
        <main>
          <HeroPage />
          <Welcome />
          <MainServices />
          <Form />
        </main>
        <Footer />
        <Modal />
      </Container>
    </div>
  );
}

export default function WrappedApp() {
  return(
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  )
}
