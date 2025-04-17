import menuData from '../../data/menu.json';
import MenuItem from '../MenuItem/MenuItem';
import './style.scss';

const Menu = () => {
    return (
        <div>
            <nav className="menu">
                <ul className="menu__list">
                    {menuData.map((item) => (
                        <MenuItem 
                            key={item.id}
                            text={item.text}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    );
}
 
export default Menu;