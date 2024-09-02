import { Suspense, useState } from 'react';
import { Container } from 'react-bootstrap';
import {Routes, Route} from 'react-router-dom'
import Modal from './components/modal/Modal';
import ScrollToAim from './components/scrollToAim/ScrollToAim';

import Layout from './components/layout/Layout';
import HomePage from './pages/Homepage';
import BuildingPage from './pages/Buildingpage';
import FamilyPage from './pages/FamilyPage';
import MilitaryPage from './pages/MilitaryPage';
import LawyerPage from './pages/LawyerPage';
import DutyPage from './pages/DutyPage';
import ProtectionPage from './pages/ProtectionPage';
import WorkerPage from './pages/WorkerPage';
import AdministrativeLawPage from './pages/AdministrativeLawPage';
import AdministrativeViolationPage from './pages/AdministrativeViolationPage';
import CasesPage from './pages/casesPage/CasesPage';



function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onToggleModal= () => {
    setIsModalOpen(prevState => !prevState)
  }
  
  return (
    <div className="App">
      <Container>
          <ScrollToAim />
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<HomePage onToggleModal={onToggleModal}/>}/>
              <Route path='cases' element={<CasesPage onToggleModal={onToggleModal}/>}/>
              <Route path='building' element={<BuildingPage onToggleModal={onToggleModal}/>}/>
              <Route path='family' element={<FamilyPage onToggleModal={onToggleModal}/>} />
              <Route path='military' element={<MilitaryPage />} />
              <Route path='lawyer' element={<LawyerPage />} />
              <Route path='duty' element={<DutyPage onToggleModal={onToggleModal}/>} />
              <Route path='protection' element={<ProtectionPage />} />
              <Route path='worker' element={<WorkerPage/>} />
              <Route path='administrative-law' element={<AdministrativeLawPage onToggleModal={onToggleModal}/>} />
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
