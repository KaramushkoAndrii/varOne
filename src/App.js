import { Suspense } from 'react';
//import logo from '../src/resources/logo.jpg'
//import { useTranslation } from 'react-i18next';
import Header from './components/header/Header';
//import ChangeLng from './components/changeLng/ChangeLng';
//import Nav from './components/nav/nav';
import Main from './components/Main/Main';
import MainServices from './components/mainServices/MainServices';



function App() {
  //const { t } = useTranslation();
  
  return (
    <div className="App">
      <Header />
      <Main />
      <MainServices />
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
