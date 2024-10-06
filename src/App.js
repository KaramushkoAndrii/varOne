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
import NotPage from './pages/notPage/NotPage';



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

              <Route path='building/*' element={<BuildingPage onToggleModal={onToggleModal}/>}/>
                  <Route path='building/suprovid-spravy-pro-vitrebuvanna-neruhomogo-maina' element={<NotPage onToggleModal={onToggleModal} /> } />
                  <Route path='building/rozarvannya-dogovory-orendy-zemli' element={<NotPage onToggleModal={onToggleModal} /> } />
                  <Route path='building/spory-pro-vyznanya-prava-vlasnosti-na-neruhome-maino' element={<NotPage onToggleModal={onToggleModal} /> } />
                  <Route path='building/spravy-pro-vyselennya-z-primishennya' element={<NotPage onToggleModal={onToggleModal} /> } />
                  <Route path='building/scasuvannya-dogovoriv-z-neruhomym-mainom' element={<NotPage onToggleModal={onToggleModal} /> } />
                  <Route path='building/oformlennya-samovilno-zbudovanyh-objectiv' element={<NotPage onToggleModal={onToggleModal} /> } />
                  <Route path='building/vydil-na-podil-maina-v-narure' element={<NotPage onToggleModal={onToggleModal} /> } />
                  <Route path='building/suprovid-pryvatyzacii-kvartyry' element={<NotPage onToggleModal={onToggleModal} /> } />


              <Route path='family/*' element={<FamilyPage onToggleModal={onToggleModal}/>} />
                  <Route path='family/brak' element={<BrakPage onToggleModal={onToggleModal}/>}/>
                  <Route path='family/distribution' element={<DistributionPage onToggleModal={onToggleModal}/>} />
                  <Route path='family/podil-maina' element={<PodilMainaPage onToggleModal={onToggleModal} />} />
                  <Route path='family/alimenti' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='family/osparivanie' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='family/priznanie-nedeesposobnym' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='family/projivanie-odnoy-semiey' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='family/drygie-factory' element={<NotPage onToggleModal={onToggleModal} />} />


              <Route path='military/*' element={<MilitaryPage  onToggleModal={onToggleModal}/>} />
                  <Route path='military/zvilnenya-z-viyskovoi-sluzhby' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='military/otrymanya-vidsrochki' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='military/oskarzhenya-vlk' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='military/oscarzhenya-rishen-tck' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='military/zahust-vid-nezakonnogo-utrymanya-tck' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='military/skladanya-raporty-ta-inshih-documentiv' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='military/suprovid-simeynih-ta-inshih-sprav' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='military/dopomoga-v-otrymanii-15-millions' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='military/styagnenya-ne-splachenogo-zabezpechenya' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='military/oskarzhenya-ne-provomirnyh-rishen' element={<NotPage onToggleModal={onToggleModal} />} />


              <Route path='duty/*' element={<DutyPage onToggleModal={onToggleModal}/>} />
                  <Route path='duty/borg' element={<PovernenyaBorguPage onToggleModal={onToggleModal} />} />


              <Route path='protection/*' element={<ProtectionPage onToggleModal={onToggleModal}/>} />
                  <Route path='protection/security' element={<CreditPage onToggleModal={onToggleModal}/>}/>
                  <Route path='protection/cancel' element={<CancelArestPage onToggleModal={onToggleModal}/>} />
                  <Route path='protection/notarius' element={<NotariusCancelPage onToggleModal={onToggleModal}/>} />
                  <Route path='protection/escort' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='protection/less-damage' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='protection/inaction' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='protection/assessment' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='protection/credit' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='protection/debt' element={<NotPage onToggleModal={onToggleModal}/>}/>


              <Route path='worker/*' element={<WorkerPage onToggleModal={onToggleModal}/>} />
                  <Route path='worker/styagnenya-zaborgovonosti' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='worker/suprovid-trudovogo-spory' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='worker/styagnenya-dopomogy-pry-zvilnenni' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='worker/ponovlenya-na-roboti' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='worker/tyagnenya-materialnoy-shkody' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='worker/yuredichniy-analiz' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='worker/skasyvanya-shtrafiv-derjpaci' element={<NotPage onToggleModal={onToggleModal}/>}/>


              <Route path='administrative-law/*' element={<AdministrativeLawPage onToggleModal={onToggleModal}/>} />
                  <Route path='administrative-law/oscarjennya-postanovy-pdr' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='administrative-law/suprovid-spravy-z-pererahunku-pensii' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='administrative-law/oskarzhenya-rishennya-organy-miscevogo-samovryaduvannya' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='administrative-law/oskarzhenya-nakazu-pro-prytagnenya-do-disceplynarnoy-vidpovidalnosti' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='administrative-law/oskarzhenya-priynattya-gromadyan-na-publichnu-slujbu' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='administrative-law/oskarzhenya-rishenya-podatkovogo-organu' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='administrative-law/oskarzhenya-diy-inshih-controluuchih-organiv' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='administrative-law/oskarzhenya-diy-tck' element={<NotPage onToggleModal={onToggleModal}/>}/>
              

              <Route path='administrative-violation/*' element={<AdministrativeViolationPage onToggleModal={onToggleModal}/>} />
                  <Route path='administrative-violation/zahist-klienta-po-130-stati' element={<Admin130Page onToggleModal={onToggleModal} />} />
                  <Route path='administrative-violation/zahist-klienta-po-124-stati' element={<Admin124Page onToggleModal={onToggleModal}/>} />
                  <Route path='administrative-violation/vidshkodyvannya-moralnoi-ta-materialnoi-shkody' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='administrative-violation/oskarjenya-postanov-policeyskih' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='administrative-violation/zahist-klienta-po-164-stati' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='administrative-violation/vidshokyvanya-vyplat-pisly-dtp' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='administrative-violation/vikradenya-avto' element={<NotPage onToggleModal={onToggleModal}/>}/>

              <Route path='lawyer/*' element={<LawyerPage onToggleModal={onToggleModal}/>} />
                  <Route path='lawyer/brak' element={<BrakPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/distribution' element={<DistributionPage onToggleModal={onToggleModal}/>} />
                  <Route path='lawyer/podil-maina' element={<PodilMainaPage onToggleModal={onToggleModal} />} />
                  <Route path='lawyer/alimenti' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='lawyer/osparivanie' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='lawyer/priznanie-nedeesposobnym' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='lawyer/projivanie-odnoy-semiey' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='lawyer/drygie-factory' element={<NotPage onToggleModal={onToggleModal} />} />

                  <Route path='lawyer/suprovid-spravy-pro-vitrebuvanna-neruhomogo-maina' element={<NotPage onToggleModal={onToggleModal} /> } />
                  <Route path='lawyer/rozarvannya-dogovory-orendy-zemli' element={<NotPage onToggleModal={onToggleModal} /> } />
                  <Route path='lawyer/spory-pro-vyznanya-prava-vlasnosti-na-neruhome-maino' element={<NotPage onToggleModal={onToggleModal} /> } />
                  <Route path='lawyer/spravy-pro-vyselennya-z-primishennya' element={<NotPage onToggleModal={onToggleModal} /> } />
                  <Route path='lawyer/scasuvannya-dogovoriv-z-neruhomym-mainom' element={<NotPage onToggleModal={onToggleModal} /> } />
                  <Route path='lawyer/oformlennya-samovilno-zbudovanyh-objectiv' element={<NotPage onToggleModal={onToggleModal} /> } />
                  <Route path='lawyer/vydil-na-podil-maina-v-narure' element={<NotPage onToggleModal={onToggleModal} /> } />
                  <Route path='lawyer/suprovid-pryvatyzacii-kvartyry' element={<NotPage onToggleModal={onToggleModal} /> } />

                  <Route path='lawyer/zvilnenya-z-viyskovoi-sluzhby' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='lawyer/otrymanya-vidsrochki' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='lawyer/oskarzhenya-vlk' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='lawyer/oscarzhenya-rishen-tck' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='lawyer/zahust-vid-nezakonnogo-utrymanya-tck' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='lawyer/skladanya-raporty-ta-inshih-documentiv' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='lawyer/suprovid-simeynih-ta-inshih-sprav' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='lawyer/dopomoga-v-otrymanii-15-millions' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='lawyer/styagnenya-ne-splachenogo-zabezpechenya' element={<NotPage onToggleModal={onToggleModal} />} />
                  <Route path='lawyer/oskarzhenya-ne-provomirnyh-rishen' element={<NotPage onToggleModal={onToggleModal} />} />

                  <Route path='lawyer/security' element={<CreditPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/cancel' element={<CancelArestPage onToggleModal={onToggleModal}/>} />
                  <Route path='lawyer/notarius' element={<NotariusCancelPage onToggleModal={onToggleModal}/>} />
                  <Route path='lawyer/escort' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/less-damage' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/inaction' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/assessment' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/credit' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/debt' element={<NotPage onToggleModal={onToggleModal}/>}/>

                  <Route path='lawyer/styagnenya-zaborgovonosti' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/suprovid-trudovogo-spory' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/styagnenya-dopomogy-pry-zvilnenni' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/ponovlenya-na-roboti' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/tyagnenya-materialnoy-shkody' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/yuredichniy-analiz' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/skasyvanya-shtrafiv-derjpaci' element={<NotPage onToggleModal={onToggleModal}/>}/>

                  <Route path='lawyer/oscarjennya-postanovy-pdr' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/suprovid-spravy-z-pererahunku-pensii' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/oskarzhenya-rishennya-organy-miscevogo-samovryaduvannya' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/oskarzhenya-nakazu-pro-prytagnenya-do-disceplynarnoy-vidpovidalnosti' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/oskarzhenya-priynattya-gromadyan-na-publichnu-slujbu' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/oskarzhenya-rishenya-podatkovogo-organu' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/oskarzhenya-diy-inshih-controluuchih-organiv' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/oskarzhenya-diy-tck' element={<NotPage onToggleModal={onToggleModal}/>}/>

                  <Route path='lawyer/zahist-klienta-po-130-stati' element={<Admin130Page onToggleModal={onToggleModal} />} />
                  <Route path='lawyer/zahist-klienta-po-124-stati' element={<Admin124Page onToggleModal={onToggleModal}/>} />
                  <Route path='lawyer/vidshkodyvannya-moralnoi-ta-materialnoi-shkody' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/oskarjenya-postanov-policeyskih' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/zahist-klienta-po-164-stati' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/vidshokyvanya-vyplat-pisly-dtp' element={<NotPage onToggleModal={onToggleModal}/>}/>
                  <Route path='lawyer/vikradenya-avto' element={<NotPage onToggleModal={onToggleModal}/>}/>
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
