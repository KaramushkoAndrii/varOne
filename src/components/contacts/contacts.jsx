
import { useTranslation } from 'react-i18next';
import MyContacts from '../myContacts/MyContacts';
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

import './contacts.scss'


const Contacts = () => {

    const { t } = useTranslation();

    return (
        <ul className='contacts_list'>
            <li>
                <a href={`viber://chat?number=${MyContacts[0]}`}>
                    <CiMail />
                    <span className='contact-text'>{t('buttons.pageButton')}</span>
                </a>
            </li>
            <li>
                <a href={`tel:${MyContacts[1]}`}> 
                    <BsTelephone />
                    <span className='contact-text'>{MyContacts[1]}</span>
                </a>
            </li>
        </ul>
    )
}

export default Contacts