import { LogoProps } from './types';
import './style.scss'


const Logo = ({url}: LogoProps) => {
    return (
        <div className="logo__wrapper">
            <a className="logo__link">
                <img className="logo__img" src={url}/>
            </a>
        </div>
    );
}
 
export default Logo;