import './style.scss'

const Logo = () => {
    return (
        <div className="logo__wrapper">
            <a className="logo__link">
                <img className="logo__img" src="/logo.svg"/>
            </a>
        </div>
    );
}
 
export default Logo;