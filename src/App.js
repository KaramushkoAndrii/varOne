import { Suspense } from 'react';
import { Container } from 'react-bootstrap';
//import logo from '../src/resources/logo.jpg'
//import { useTranslation } from 'react-i18next';
import Header from './components/header/Header';
import HeroPage from './components/heroPage/HeroPage';
import Welcome from './components/welcome/welcome';
//import ChangeLng from './components/changeLng/ChangeLng';
//import Nav from './components/nav/nav';
import MainServices from './components/mainServices/MainServices';



function App() {
  //const { t } = useTranslation();
  
  return (
    <div className="App">
      <Container>
        <Header />
        <main>
          <HeroPage />
          <Welcome />
        </main>
        <MainServices />
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
