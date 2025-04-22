import Button from '../Button/Button';
import Description from '../Description/Description';
import Logo from '../Logo/Logo';

import './style.scss';

const logoUrl = "/logoFooter.svg"
const aboutDescription = "Quisque id leo non dolor tempor elementum quis ac urna. Nam pharetra, ligula eget finibus dignissim, turpis ipsum sollicitudin"

const About = () => {
    return (
        <div className="about">
            <div className="about__wrapper">
                <div className="about__logo">
                    <Logo url={logoUrl}/>
                </div>
                <div className="about__description">
                    <Description textDescr={aboutDescription} />
                 </div>
                 <form className="about__form" action="#">
                    <input className="about__input" type="text" placeholder="Email address"/>
                    <Button text="Subscribe" />
                 </form>
            </div>
        </div>
    );
}
 
export default About;