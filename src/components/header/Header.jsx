import ChangeLng from '../changeLng/ChangeLng';
import Nav from '../nav/nav';
import "./Header.scss";
import Contacts from '../contacts/contacts';

const Header = () => {

    return (
        <header className='header'>
            <Nav />
            <div className='header__contacts'>
                <Contacts />
                <ChangeLng />
            </div>
        </header>
    )
}

export default Header;