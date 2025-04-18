import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Banner from '../Banner/Banner';

import './style.scss'

const Header = () => {
    return (
        <div className="container">
            <header className="header">
                <div className="header__row">
                    <div className="header__logo">
                        <Logo />
                    </div>
                    <div className="header__menu">
                        <Menu />
                    </div>
                    <div className="header__phone">
                        <Button text="384-129-293-39" />
                    </div>
                </div>
                <div className="header__banner">
                    <Banner />
                </div>
            </header>
        </div>
    );
}
 
export default Header;