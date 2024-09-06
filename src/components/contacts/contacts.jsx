import MyContacts from '../myContacts/MyContacts'

import './contacts.scss'


const Contacts = () => {
    return (
        <ul className='contacts_list'>
            <li>
                <a href={`tel:${MyContacts[1]}`}> {MyContacts[1]} </a>
            </li>
            <li>
                <a href={`mailto:${MyContacts[0]}`}>{MyContacts[0]}</a>
            </li>
        </ul>
    )
}

export default Contacts