import { Suspense, useState } from 'react';
import { Container } from 'react-bootstrap';
import {Routes, Route} from 'react-router-dom'
import Modal from './components/modal/Modal';

import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import BuildingPage from './pages/BuildingPage';
import FamilyPage from './pages/FamilyPage';
import MilitaryPage from './pages/MilitaryPage';
import LawyerPage from './pages/LawyerPage';
import DutyPage from './pages/DutyPage';
import ProtectionPage from './pages/ProtectionPage';
import WorkerPage from './pages/WorkerPage';
import AdministrativeLawPage from './pages/AdministrativeLawPage';
import AdministrativeViolationPage from './pages/AdministrativeViolationPage';



function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onToggleModal= () => {
    setIsModalOpen(prevState => !prevState)
  }
  
  return (
    <div className="App">
      <Container>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<HomePage onToggleModal={onToggleModal}/>}/>
              <Route path='building' element={<BuildingPage />}/>
              <Route path='family' element={<FamilyPage />} />
              <Route path='military' element={<MilitaryPage />} />
              <Route path='lawyer' element={<LawyerPage />} />
              <Route path='duty' element={<DutyPage />} />
              <Route path='protection' element={<ProtectionPage />} />
              <Route path='worker' element={<WorkerPage/>} />
              <Route path='administrative-law' element={<AdministrativeLawPage/>} />
              <Route path='administrative-violation' element={<AdministrativeViolationPage/>} />
            </Route>
          </Routes>
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
