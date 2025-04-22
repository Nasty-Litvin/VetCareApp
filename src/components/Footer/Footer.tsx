import About from '../About/About';
import Address from '../Address/Address';
import Links from '../Links/Links';
import OpeningHours from '../OpeningHours/OpeningHours';

import './style.scss'



const Footer = () => {
    return (
        <div className="container">
            <footer className="footer">
                <div className="footer__about">
                    <About />
                    <Address />
                    <Links />
                    <OpeningHours />
                </div>
            </footer>
        </div>
    );
}
 
export default Footer;