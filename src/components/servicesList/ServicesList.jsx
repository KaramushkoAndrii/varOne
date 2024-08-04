import { useTranslation } from 'react-i18next';
//import 'bootstrap-icons/font/bootstrap-icons.css';
//import houseLogo from '../../resources/listIcons/house.svg';
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
            href: '#'
        },
        {
            title: 'family',
            icon: <MdFamilyRestroom />,
            href: '#'
        },
        {
            title: 'military',
            icon: <TbMilitaryRank />,
            href: '#'
        },
        {
            title: 'lawyer',
            icon: <VscLaw />,
            href: '#'
        },
        {
            title: 'duty',
            icon: <TbMoneybag />,
            href: '#'
        },
        {
            title: 'protection',
            icon: <AiOutlineFileProtect  />,
            href: '#'
        },
        {
            title: 'worker',
            icon: <MdOutlineWorkOutline />,
            href: '#'
        },
        {
            title: 'administrative law',
            icon: <MdOutlineAdminPanelSettings />,
            href: '#'
        },
        {
            title: 'administrative violation',
            icon: <RiAdminLine />,
            href: '#'
        }
    ]


    return (
        <ul className='services-list'>
            {
                services.map((item, index) => (
                    <li key={index}>
                        <a className='services-link' href={item.href}>
                            {item.icon}
                            {/* <img src={item.icon} alt={item.title} /> */}
                            <h3>{t(`services.${item.title}`)}</h3>
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

export default ServicesList;