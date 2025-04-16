import { ButtonProps } from './types';
import './style.scss'

const Button = ({text, color}: ButtonProps)  => {
    return (
        <button className={ color === 'green' ? 'btn btn--green' : 'btn' }>{text}</button>
    );
}
 
export default Button;