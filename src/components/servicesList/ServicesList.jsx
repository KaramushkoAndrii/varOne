import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
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
            title: 'building',
            icon: <FaBuilding />,
            href: '/building',
        },
        {
            title: 'family',
            icon: <MdFamilyRestroom />,
            href: '/family',
        },
        {
            title: 'military',
            icon: <TbMilitaryRank />,
            href: '/military',
        },
        {
            title: 'lawyer',
            icon: <VscLaw />,
            href: '/lawyer',
        },
        {
            title: 'duty',
            icon: <TbMoneybag />,
            href: '/duty',
        },
        {
            title: 'protection',
            icon: <AiOutlineFileProtect  />,
            href: '/protection',
        },
        {
            title: 'worker',
            icon: <MdOutlineWorkOutline />,
            href: '/worker',
        },
        {
            title: 'administrative-law',
            icon: <MdOutlineAdminPanelSettings />,
            href: '/administrative-law',
        },
        {
            title: 'administrative-violation',
            icon: <RiAdminLine />,
            href: '/administrative-violation',
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
        </>
    )
}

export default ServicesList;