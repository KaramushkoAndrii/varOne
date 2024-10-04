import { Suspense, useState } from 'react';
import { Container } from 'react-bootstrap';
import {Routes, Route} from 'react-router-dom'
import Modal from './components/modal/Modal';
import ScrollToAim from './components/scrollToAim/ScrollToAim';

import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import BuildingPage from './pages/buildingPage/BuildingPage';
import FamilyPage from './pages/FamilyPage';
import MilitaryPage from './pages/MilitaryPage';
import LawyerPage from './pages/lawyerPage/LawyerPage';
import DutyPage from './pages/DutyPage';
import ProtectionPage from './pages/protectionPage/ProtectionPage';
import WorkerPage from './pages/workerPage/WorkerPage';
import AdministrativeLawPage from './pages/AdministrativeLawPage';
import AdministrativeViolationPage from './pages/administrativeViolationPage/AdministrativeViolationPage';
import CasesPage from './pages/casesPage/CasesPage';
import BrakPage from './pages/brakPage/BrakPage';
import DistributionPage from './pages/distributionPage/DistributionPage';
import CreditPage from './pages/creditPage/CreditPage';
import CancelArestPage from './pages/cancelArestPage/CancelArestPage';
import PodilMainaPage from './pages/podilMainaPage/PodilMaina';
import PovernenyaBorguPage from './pages/povernenyaBorguPage/PovernenyaBorguPage';
import NotariusCancelPage from './pages/notariusCancelPage/NotariusCancelPage';
import Admin130Page from './pages/admin130Page/Admin130Page';
import Admin124Page from './pages/admin124Page/Admin124Page';



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
              <Route path='family/*' element={<FamilyPage onToggleModal={onToggleModal}/>} />
                  <Route path='family/brak' element={<BrakPage onToggleModal={onToggleModal}/>}/>
                  <Route path='family/distribution' element={<DistributionPage onToggleModal={onToggleModal}/>} />
                  <Route path='family/podil-maina' element={<PodilMainaPage onToggleModal={onToggleModal} />} />


              <Route path='military' element={<MilitaryPage  onToggleModal={onToggleModal}/>} />
              <Route path='lawyer/*' element={<LawyerPage onToggleModal={onToggleModal}/>} />
                  <Route path='lawyer/brak' element={<BrakPage onToggleModal={onToggleModal}/>} />
                  <Route path='lawyer/distribution' element={<DistributionPage onToggleModal={onToggleModal}/>} />
                  <Route path='lawyer/podil-maina' element={<PodilMainaPage onToggleModal={onToggleModal} />} />


              <Route path='duty' element={<DutyPage onToggleModal={onToggleModal}/>} />
                  <Route path='duty/borg' element={<PovernenyaBorguPage onToggleModal={onToggleModal} />} />


              <Route path='protection' element={<ProtectionPage onToggleModal={onToggleModal}/>} />
                  <Route path='protection/security' element={<CreditPage onToggleModal={onToggleModal}/>}/>
                  <Route path='protection/cancel' element={<CancelArestPage onToggleModal={onToggleModal}/>} />
                  <Route path='protection/notarius' element={<NotariusCancelPage onToggleModal={onToggleModal}/>} />


              <Route path='worker' element={<WorkerPage onToggleModal={onToggleModal}/>} />
              <Route path='administrative-law' element={<AdministrativeLawPage onToggleModal={onToggleModal}/>} />

              
              <Route path='administrative-violation/*' element={<AdministrativeViolationPage onToggleModal={onToggleModal}/>} />
                <Route path='administrative-violation/zahist-klienta-po-130-stati' element={<Admin130Page onToggleModal={onToggleModal} />} />
                <Route path='administrative-violation/zahist-klienta-po-124-stati' element={<Admin124Page onToggleModal={onToggleModal}/>} />
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
