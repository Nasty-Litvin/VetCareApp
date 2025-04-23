import Button from '../Button/Button';
import Title from '../Title/Title';
import { CardPPProps } from './types';

import './style.scss';


const CardPP = ({subtitle, title, list, price}: CardPPProps) => {
    return (
        <div className="cardPP">
            <div className="cardPP__wrapper">
                <div className="cardPP__text">{subtitle}</div>
                <div className="cardPP__title">
                    <Title text={title} />
                </div>
                <div className="cardPP__list">
                    {list.map((item) => (
                        <div className="cardPP__item">{item}</div>
                    ))}
                </div>
                <div className="cardPP__price">
                    ${price} <span>Per Visit</span>
                </div>
                <div className="cardPP__btn">
                    <Button text="Purchase Pack"/>
                </div>
            </div>
        </div>
    );
}
 
export default CardPP;