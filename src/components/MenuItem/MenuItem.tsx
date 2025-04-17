import { MenuItemProps } from './types';
import './style.scss';

const MenuItem = ({text}: MenuItemProps) => {
    return (
        <li className="menu-item">
            <a className="menu-item__link">{text}</a>
        </li>
    );
}
 
export default MenuItem;

