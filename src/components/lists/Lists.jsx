import podilMaina from '../../resources/podil-maina.webp';
import borg from '../../resources/borg.webp';
import shlub from '../../resources/shlub.webp';
import alimenty from '../../resources/alimony3kids.webp';
import cancelProblem from '../../resources/misce-prozivannya.webp';
import st124 from '../../resources/zakrily124.webp';
import st130 from '../../resources/zakrily130.webp';

export const familyList = [
    {link:'brak', name: 'family-services.brak'},
    {link:'podil-maina', name:'family-services.imushestvo'},
    {link:'distribution', name:'family-services.mesto-zhitelsva-rebenka'},
    {link:'alimenti', name:'family-services.alimenti'},
    {link:'osparivanie', name:'family-services.osparivanie'},
    {link:'priznanie-nedeesposobnym', name:'family-services.priznanie-nedeesposobnym'},
    {link:'projivanie-odnoy-semiey', name:'family-services.projivanie-odnoy-semiey'},
    {link:'drygie-factory', name:'family-services.drygie-factory'}  
]

export const buildingList = [
{link:'suprovid-spravy-pro-vitrebuvanna-neruhomogo-maina', name:'building-page.services-istrebovanie'},
{link:'rozarvannya-dogovory-orendy-zemli', name:'building-page.services-rastorjenie'},
{link:'spory-pro-vyznanya-prava-vlasnosti-na-neruhome-maino', name:'building-page.services-spory'},
{link:'spravy-pro-vyselennya-z-primishennya', name:'building-page.servives-vyselenie'},
{link:'scasuvannya-dogovoriv-z-neruhomym-mainom', name:'building-page.services-rastorjenie-nedvijemost'},
{link:'oformlennya-samovilno-zbudovanyh-objectiv', name:'building-page.services-oformlenie-postroek'},
{link:'vydil-na-podil-maina-v-narure', name:'building-page.services-vydel'},
{link:'suprovid-pryvatyzacii-kvartyry', name:'building-page.services-privatizaciya'},
]


export const AdministrativeViolationList = [
    {link: 'zahist-klienta-po-130-stati', name:'admin-violation-page.zashita-klienta-130'},
        //При использовании синтаксиса /admin-violation-page.zashita-klienta-130 страница будет отображаться по адресу
        //главаная страница/admin-violation-page.zashita-klienta-130
        //в синтаксисе который испоьзуется - страница будет отображаться
        //главная страница/страница категории/admin-violation-page.zashita-klienta-130},
    {link: 'zahist-klienta-po-124-stati', name:'admin-violation-page.zashita-klienta-124'},
    {link: 'vidshkodyvannya-moralnoi-ta-materialnoi-shkody', name:'admin-violation-page.vozmeshenie'},
    {link: 'oskarjenya-postanov-policeyskih', name:'admin-violation-page.ojalovanie-postanovleniy'},
    {link: 'zahist-klienta-po-164-stati', name:'admin-violation-page.zashita-klienta-164'},
    {link: 'vidshokyvanya-vyplat-pisly-dtp', name:'admin-violation-page.advokat-po-strahovym-vyplatam'},
    {link: 'vikradenya-avto', name:'admin-violation-page.advokat-po-ugonu-avto'}
]

export const militaryServices = [
    {link:'zvilnenya-z-viyskovoi-sluzhby', name: 'military-page.services-help'},
    {link:'otrymanya-vidsrochki', name: 'military-page.services.otsrochka'},
    {link:'oskarzhenya-vlk', name: 'military-page.services.vlk'},
    {link:'oscarzhenya-rishen-tck', name: 'military-page.services.tck'},
    {link: 'zahust-vid-nezakonnogo-utrymanya-tck', name: 'military-page.services.uderszhanie'},
    {link: 'skladanya-raporty-ta-inshih-documentiv', name: 'military-page.services.raport'},
    {link: 'suprovid-simeynih-ta-inshih-sprav', name: 'military-page.services.soprovoszhdenie'},
    {link: 'dopomoga-v-otrymanii-15-millions', name: 'military-page.services.millions'},
    {link: 'styagnenya-ne-splachenogo-zabezpechenya', name: 'military-page.services.vziskanie'},
    {link: 'oskarzhenya-ne-provomirnyh-rishen', name: 'military-page.services.nepravomernie'}
]


export const administrativeList = [
    {link:'oscarjennya-postanovy-pdr', name: 'administrativeLaw-services.pdd'},
    {link:'suprovid-spravy-z-pererahunku-pensii', name: 'administrativeLaw-services.pensiya'},
    {link:'oskarzhenya-rishennya-organy-miscevogo-samovryaduvannya', name: 'administrativeLaw-services.objalovanie'},
    {link:'oskarzhenya-nakazu-pro-prytagnenya-do-disceplynarnoy-vidpovidalnosti', name: 'administrativeLaw-services.gossluzhashiy'},
    {link: 'oskarzhenya-priynattya-gromadyan-na-publichnu-slujbu', name: 'administrativeLaw-services.publichnaya-slujba'},
    {link: 'oskarzhenya-rishenya-podatkovogo-organu', name: 'administrativeLaw-services.nalog'},
    {link: 'oskarzhenya-diy-inshih-controluuchih-organiv', name: 'administrativeLaw-services.control'},
    {link: 'oskarzhenya-diy-tck', name: 'administrativeLaw-services.tck'},
]

export const dutyList = [
    {link: 'security', name:'protection-page-list.security'},
    {link:'cancel', name:'protection-page-list.cancel'},
    {link:'escort', name:'protection-page-list.escort'},
    {link:'less-damage',name:'protection-page-list.less-damage'},
    {link:'notarius',name:'protection-page-list.notarius'},
    {link:'inaction',name:'protection-page-list.inaction'},
    {link:'assessment',name:'protection-page-list.assessment'},
    {link:'credit',name:'protection-page-list.credit'},
    {link:'debt',name:'protection-page-list.debt'},
]

export const caseList = [
    {title: 'cases-page.case-win-vidsutnist-skladu-130', bg: st130, link: 'https://reyestr.court.gov.ua/Review/115612649'},
    {title: 'cases-page.case-win-podil', bg: podilMaina, link: 'https://reyestr.court.gov.ua/Review/104454342'},
    {title: 'cases-page.case-win-podil-1/2', bg: podilMaina, link: 'https://reyestr.court.gov.ua/Review/106214322'},
    {title: 'cases-page.case-win-podil', bg: podilMaina, link: 'https://reyestr.court.gov.ua/Review/117779520'},
    {title: 'cases-page.case-win-dilyanka', bg: podilMaina, link: 'https://reyestr.court.gov.ua/Review/93609451'},
    {title: 'cases-page.case-win-borg-400', bg: borg, link: 'https://reyestr.court.gov.ua/Review/113909704'},
    {title: 'cases-page.case-win-borg-200', bg: borg, link: 'https://reyestr.court.gov.ua/Review/95816615'},
    {title: 'cases-page.case-win-borg-100', bg: borg, link: 'https://reyestr.court.gov.ua/Review/103342181'},
    {title: 'cases-page.case-win-3-rebenka', bg: shlub, link: 'https://reyestr.court.gov.ua/Review/110419172'},
    {title: 'cases-page.casse-win-shlub', bg: shlub, link: 'https://reyestr.court.gov.ua/Review/100898590'},
    {title: 'cases-page.case-win-alimenti', bg: alimenty, link: 'https://reyestr.court.gov.ua/Review/93891443'},
    {title: 'cases-page.case-win-zmenshennya-alimentiv', bg: alimenty, link: 'https://reyestr.court.gov.ua/Review/98285614'},
    {title: 'cases-page.case-win-pozbavlennya-batkivskih-prav', bg: alimenty, link: 'https://reyestr.court.gov.ua/Review/119350497'},
    {title: 'cases-page.case-win-misce-projivannya-dityny', bg: cancelProblem, link: 'https://reyestr.court.gov.ua/Review/105222656'},
    {title: 'cases-page.case-win-usunennya-pereshkod', bg: cancelProblem, link: 'https://reyestr.court.gov.ua/Review/104812131'},
    {title: 'cases-page.case-win-vidsutnist-skladu-124', bg: st124, link: 'https://reyestr.court.gov.ua/Review/83013158'},
    {title: 'cases-page.case-win-vidsutnist-skladu-124', bg: st124, link: 'https://reyestr.court.gov.ua/Review/76502281'},
    {title: 'cases-page.case-win-vidsutnist-skladu-124', bg: st124, link: 'https://reyestr.court.gov.ua/Review/80038689'},
    {title: 'cases-page.case-win-vidsutnist-skladu-124', bg: st124, link: 'https://reyestr.court.gov.ua/Review/75185739'},
    {title: 'cases-page.case-win-vidsutnist-skladu-130', bg: st130, link: 'https://reyestr.court.gov.ua/Review/113342322'},
    {title: 'cases-page.case-win-vidsutnist-skladu-130', bg: st130, link: 'https://reyestr.court.gov.ua/Review/114067550'},
    {title: 'cases-page.case-win-vidsutnist-skladu-130', bg: st130, link: 'https://reyestr.court.gov.ua/Review/114157104'},
    {title: 'cases-page.case-win-vidsutnist-skladu-130', bg: st130, link: 'https://reyestr.court.gov.ua/Review/110850737'},
    {title: 'cases-page.case-win-vidsutnist-skladu-130', bg: st130, link: 'https://reyestr.court.gov.ua/Review/113920755'},
    {title: 'cases-page.case-win-vidsutnist-skladu-130', bg: st130, link: 'https://reyestr.court.gov.ua/Review/116228477'},
]

export const workerList = [
    {link:'styagnenya-zaborgovonosti', name:'worker-page.vziskanie'},
    {link:'suprovid-trudovogo-spory', name:'worker-page.trudovoy-spor'},
    {link:'styagnenya-dopomogy-pry-zvilnenni', name:'worker-page.vyhodnoe-posobie'},
    {link:'ponovlenya-na-roboti', name:'worker-page.vozobnovlenie-na-rabote'},
    {link:'tyagnenya-materialnoy-shkody', name:'worker-page.vziskanie-materialnogo-usherba'},
    {link:'yuredichniy-analiz', name:'worker-page.juredicheskiy-analiz'},
    {link:'skasyvanya-shtrafiv-derjpaci', name:'worker-page.otmena-shtrafov'}
]