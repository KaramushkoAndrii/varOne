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
import NotFoundPage from './pages/notFoundPage/NotFoundPage';



function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const isOpen = () => {
    setIsModalOpen(true)
  }

  const isClose = () => {
    setIsModalOpen(false)
  }
  
  return (
    <div className="App">
      <Container>
          <ScrollToAim />
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<HomePage isOpen={isOpen}/>}/>
              <Route path='cases' element={<CasesPage isOpen={isOpen}/>}/>

              <Route path='building/' element={<BuildingPage isOpen={isOpen}/>}/>
                  <Route path='building/suprovid-spravy-pro-vitrebuvanna-neruhomogo-maina' element={<NotPage isOpen={isOpen}/> } />
                  <Route path='building/rozarvannya-dogovory-orendy-zemli' element={<NotPage isOpen={isOpen}/> } />
                  <Route path='building/spory-pro-vyznanya-prava-vlasnosti-na-neruhome-maino' element={<NotPage isOpen={isOpen} /> } />
                  <Route path='building/spravy-pro-vyselennya-z-primishennya' element={<NotPage isOpen={isOpen} /> } />
                  <Route path='building/scasuvannya-dogovoriv-z-neruhomym-mainom' element={<NotPage isOpen={isOpen} /> } />
                  <Route path='building/oformlennya-samovilno-zbudovanyh-objectiv' element={<NotPage isOpen={isOpen} /> } />
                  <Route path='building/vydil-na-podil-maina-v-narure' element={<NotPage isOpen={isOpen} /> } />
                  <Route path='building/suprovid-pryvatyzacii-kvartyry' element={<NotPage isOpen={isOpen} /> } />
                  <Route path='building/*' element={<NotFoundPage isOpen={isOpen}/>} />


              <Route path='family/' element={<FamilyPage isOpen={isOpen}/>} />
                  <Route path='family/brak' element={<BrakPage isOpen={isOpen}/>}/>
                  <Route path='family/distribution' element={<DistributionPage isOpen={isOpen}/>} />
                  <Route path='family/podil-maina' element={<PodilMainaPage isOpen={isOpen} />} />
                  <Route path='family/alimenti' element={<NotPage isOpen={isOpen} />} />
                  <Route path='family/osparivanie' element={<NotPage isOpen={isOpen} />} />
                  <Route path='family/priznanie-nedeesposobnym' element={<NotPage isOpen={isOpen} />} />
                  <Route path='family/projivanie-odnoy-semiey' element={<NotPage isOpen={isOpen} />} />
                  <Route path='family/drygie-factory' element={<NotPage isOpen={isOpen} />} />
                  <Route path='family/*' element={<NotFoundPage isOpen={isOpen}/>} />


              <Route path='military/' element={<MilitaryPage  isOpen={isOpen}/>} />
                  <Route path='military/zvilnenya-z-viyskovoi-sluzhby' element={<NotPage isOpen={isOpen} />} />
                  <Route path='military/otrymanya-vidsrochki' element={<NotPage isOpen={isOpen} />} />
                  <Route path='military/oskarzhenya-vlk' element={<NotPage isOpen={isOpen} />} />
                  <Route path='military/oscarzhenya-rishen-tck' element={<NotPage isOpen={isOpen} />} />
                  <Route path='military/zahust-vid-nezakonnogo-utrymanya-tck' element={<NotPage isOpen={isOpen} />} />
                  <Route path='military/skladanya-raporty-ta-inshih-documentiv' element={<NotPage isOpen={isOpen} />} />
                  <Route path='military/suprovid-simeynih-ta-inshih-sprav' element={<NotPage isOpen={isOpen} />} />
                  <Route path='military/dopomoga-v-otrymanii-15-millions' element={<NotPage isOpen={isOpen} />} />
                  <Route path='military/styagnenya-ne-splachenogo-zabezpechenya' element={<NotPage isOpen={isOpen} />} />
                  <Route path='military/oskarzhenya-ne-provomirnyh-rishen' element={<NotPage isOpen={isOpen} />} />
                  <Route path='military/*' element={<NotFoundPage isOpen={isOpen}/>} />


              <Route path='duty/' element={<DutyPage isOpen={isOpen}/>} />
                  <Route path='duty/borg' element={<PovernenyaBorguPage isOpen={isOpen} />} />
                  <Route path='duty/*' element={<NotFoundPage isOpen={isOpen}/>} />


              <Route path='protection/' element={<ProtectionPage isOpen={isOpen}/>} />
                  <Route path='protection/security' element={<CreditPage isOpen={isOpen}/>}/>
                  <Route path='protection/cancel' element={<CancelArestPage isOpen={isOpen}/>} />
                  <Route path='protection/notarius' element={<NotariusCancelPage isOpen={isOpen}/>} />
                  <Route path='protection/escort' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='protection/less-damage' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='protection/inaction' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='protection/assessment' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='protection/credit' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='protection/debt' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='protection/*' element={<NotFoundPage isOpen={isOpen}/>} />


              <Route path='worker/' element={<WorkerPage isOpen={isOpen}/>} />
                  <Route path='worker/styagnenya-zaborgovonosti' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='worker/suprovid-trudovogo-spory' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='worker/styagnenya-dopomogy-pry-zvilnenni' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='worker/ponovlenya-na-roboti' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='worker/tyagnenya-materialnoy-shkody' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='worker/yuredichniy-analiz' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='worker/skasyvanya-shtrafiv-derjpaci' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='worker/*' element={<NotFoundPage isOpen={isOpen}/>} />


              <Route path='administrative-law/' element={<AdministrativeLawPage isOpen={isOpen}/>} />
                  <Route path='administrative-law/oscarjennya-postanovy-pdr' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='administrative-law/suprovid-spravy-z-pererahunku-pensii' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='administrative-law/oskarzhenya-rishennya-organy-miscevogo-samovryaduvannya' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='administrative-law/oskarzhenya-nakazu-pro-prytagnenya-do-disceplynarnoy-vidpovidalnosti' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='administrative-law/oskarzhenya-priynattya-gromadyan-na-publichnu-slujbu' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='administrative-law/oskarzhenya-rishenya-podatkovogo-organu' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='administrative-law/oskarzhenya-diy-inshih-controluuchih-organiv' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='administrative-law/oskarzhenya-diy-tck' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='administrative-law/*' element={<NotFoundPage isOpen={isOpen}/>} />
              

              <Route path='administrative-violation/' element={<AdministrativeViolationPage isOpen={isOpen}/>} />
                  <Route path='administrative-violation/zahist-klienta-po-130-stati' element={<Admin130Page isOpen={isOpen} />} />
                  <Route path='administrative-violation/zahist-klienta-po-124-stati' element={<Admin124Page isOpen={isOpen}/>} />
                  <Route path='administrative-violation/vidshkodyvannya-moralnoi-ta-materialnoi-shkody' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='administrative-violation/oskarjenya-postanov-policeyskih' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='administrative-violation/zahist-klienta-po-164-stati' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='administrative-violation/vidshokyvanya-vyplat-pisly-dtp' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='administrative-violation/vikradenya-avto' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='administrative-violation/*' element={<NotFoundPage isOpen={isOpen}/>} />

              <Route path='lawyer/' element={<LawyerPage isOpen={isOpen}/>} />
                  <Route path='lawyer/brak' element={<BrakPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/distribution' element={<DistributionPage isOpen={isOpen}/>} />
                  <Route path='lawyer/podil-maina' element={<PodilMainaPage isOpen={isOpen} />} />
                  <Route path='lawyer/alimenti' element={<NotPage isOpen={isOpen} />} />
                  <Route path='lawyer/osparivanie' element={<NotPage isOpen={isOpen} />} />
                  <Route path='lawyer/priznanie-nedeesposobnym' element={<NotPage isOpen={isOpen} />} />
                  <Route path='lawyer/projivanie-odnoy-semiey' element={<NotPage isOpen={isOpen} />} />
                  <Route path='lawyer/drygie-factory' element={<NotPage isOpen={isOpen} />} />

                  <Route path='lawyer/suprovid-spravy-pro-vitrebuvanna-neruhomogo-maina' element={<NotPage isOpen={isOpen} /> } />
                  <Route path='lawyer/rozarvannya-dogovory-orendy-zemli' element={<NotPage isOpen={isOpen} /> } />
                  <Route path='lawyer/spory-pro-vyznanya-prava-vlasnosti-na-neruhome-maino' element={<NotPage isOpen={isOpen} /> } />
                  <Route path='lawyer/spravy-pro-vyselennya-z-primishennya' element={<NotPage isOpen={isOpen} /> } />
                  <Route path='lawyer/scasuvannya-dogovoriv-z-neruhomym-mainom' element={<NotPage isOpen={isOpen} /> } />
                  <Route path='lawyer/oformlennya-samovilno-zbudovanyh-objectiv' element={<NotPage isOpen={isOpen} /> } />
                  <Route path='lawyer/vydil-na-podil-maina-v-narure' element={<NotPage isOpen={isOpen} /> } />
                  <Route path='lawyer/suprovid-pryvatyzacii-kvartyry' element={<NotPage isOpen={isOpen} /> } />

                  <Route path='lawyer/zvilnenya-z-viyskovoi-sluzhby' element={<NotPage isOpen={isOpen} />} />
                  <Route path='lawyer/otrymanya-vidsrochki' element={<NotPage isOpen={isOpen} />} />
                  <Route path='lawyer/oskarzhenya-vlk' element={<NotPage isOpen={isOpen} />} />
                  <Route path='lawyer/oscarzhenya-rishen-tck' element={<NotPage isOpen={isOpen} />} />
                  <Route path='lawyer/zahust-vid-nezakonnogo-utrymanya-tck' element={<NotPage isOpen={isOpen} />} />
                  <Route path='lawyer/skladanya-raporty-ta-inshih-documentiv' element={<NotPage isOpen={isOpen} />} />
                  <Route path='lawyer/suprovid-simeynih-ta-inshih-sprav' element={<NotPage isOpen={isOpen} />} />
                  <Route path='lawyer/dopomoga-v-otrymanii-15-millions' element={<NotPage isOpen={isOpen} />} />
                  <Route path='lawyer/styagnenya-ne-splachenogo-zabezpechenya' element={<NotPage isOpen={isOpen} />} />
                  <Route path='lawyer/oskarzhenya-ne-provomirnyh-rishen' element={<NotPage isOpen={isOpen} />} />

                  <Route path='lawyer/security' element={<CreditPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/cancel' element={<CancelArestPage isOpen={isOpen}/>} />
                  <Route path='lawyer/notarius' element={<NotariusCancelPage isOpen={isOpen}/>} />
                  <Route path='lawyer/escort' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/less-damage' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/inaction' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/assessment' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/credit' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/debt' element={<NotPage isOpen={isOpen}/>}/>

                  <Route path='lawyer/styagnenya-zaborgovonosti' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/suprovid-trudovogo-spory' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/styagnenya-dopomogy-pry-zvilnenni' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/ponovlenya-na-roboti' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/tyagnenya-materialnoy-shkody' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/yuredichniy-analiz' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/skasyvanya-shtrafiv-derjpaci' element={<NotPage isOpen={isOpen}/>}/>

                  <Route path='lawyer/oscarjennya-postanovy-pdr' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/suprovid-spravy-z-pererahunku-pensii' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/oskarzhenya-rishennya-organy-miscevogo-samovryaduvannya' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/oskarzhenya-nakazu-pro-prytagnenya-do-disceplynarnoy-vidpovidalnosti' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/oskarzhenya-priynattya-gromadyan-na-publichnu-slujbu' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/oskarzhenya-rishenya-podatkovogo-organu' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/oskarzhenya-diy-inshih-controluuchih-organiv' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/oskarzhenya-diy-tck' element={<NotPage isOpen={isOpen}/>}/>

                  <Route path='lawyer/zahist-klienta-po-130-stati' element={<Admin130Page isOpen={isOpen} />} />
                  <Route path='lawyer/zahist-klienta-po-124-stati' element={<Admin124Page isOpen={isOpen}/>} />
                  <Route path='lawyer/vidshkodyvannya-moralnoi-ta-materialnoi-shkody' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/oskarjenya-postanov-policeyskih' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/zahist-klienta-po-164-stati' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/vidshokyvanya-vyplat-pisly-dtp' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/vikradenya-avto' element={<NotPage isOpen={isOpen}/>}/>
                  <Route path='lawyer/*' element={<NotFoundPage isOpen={isOpen}/>} />

              <Route path='*' element={<NotFoundPage isOpen={isOpen}/>} />
            </Route>
          </Routes>
        <Modal isOpen={isOpen} isClose={isClose} isModalOpen={isModalOpen}/>
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
