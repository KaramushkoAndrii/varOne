import { Suspense, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Modal from './components/modal/Modal';
import HeroPage from './components/heroPage/HeroPage';
import Welcome from './components/welcome/welcome';
import MainServices from './components/mainServices/MainServices';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';



function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onToggleModal= () => {
    setIsModalOpen(prevState => !prevState)
  }
  
  return (
    <div className="App">
      <Container>
        <Header />
        <main>
          <HeroPage onToggleModal={onToggleModal}/>
          <Welcome onToggleModal={onToggleModal}/>
          <MainServices onToggleModal={onToggleModal}/>
          <Form />
        </main>
        <Footer />
        <Modal onToggle={onToggleModal} isOpen={isModalOpen}/>
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
