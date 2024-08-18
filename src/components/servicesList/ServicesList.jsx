import { useTranslation } from 'react-i18next';
import { Routes, Route,Link } from 'react-router-dom';
import Build from '../../pages/Buildingpage';
import Family from '../../pages/Family';
import { FaBuilding } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { TbMilitaryRank } from "react-icons/tb";
import { VscLaw } from "react-icons/vsc";
import { TbMoneybag } from "react-icons/tb";
import { AiOutlineFileProtect } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";




import './servicesList.scss';


const ServicesList = () => {

    const { t } = useTranslation();
    const services = [
        {
            title: 'house',
            icon: <FaBuilding />,
            href: '/building',
            page: <Build />
        },
        {
            title: 'family',
            icon: <MdFamilyRestroom />,
            href: '/family',
            page: <Family />
        },
        {
            title: 'military',
            icon: <TbMilitaryRank />,
            href: '/military',
            page: <Family />
        },
        {
            title: 'lawyer',
            icon: <VscLaw />,
            href: '/lawyer',
            page: <Family />
        },
        {
            title: 'duty',
            icon: <TbMoneybag />,
            href: '/duty',
            page: <Family />
        },
        {
            title: 'protection',
            icon: <AiOutlineFileProtect  />,
            href: '/protection',
            page: <Family />
        },
        {
            title: 'worker',
            icon: <MdOutlineWorkOutline />,
            href: '/worker',
            page: <Family />
        },
        {
            title: 'administrative law',
            icon: <MdOutlineAdminPanelSettings />,
            href: '/administrative-law',
            page: <Family />
        },
        {
            title: 'administrative violation',
            icon: <RiAdminLine />,
            href: '/administrative-violation',
            page: <Family />
        }
    ]


    return (
        <>
            <ul className='services-list'>
                {
                    services.map((item, index) => (
                        <li key={index}>
                            <Link className='services-link' to={item.href}>
                                {item.icon}
                                <h3>{t(`services.${item.title}`)}</h3>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Routes>
                {services.map((item, index) => (
                        <Route path={`/${item.href}`} element={item.page}/>
                ))}
                {/* <Route path='/building' element={< Build />}/>
                <Route path='/family' element={< Family />}/> */}
            </Routes>
        </>
    )
}

export default ServicesList;