import Description from '../Description/Description';
import Image from '../Image/Image'
import Title from '../Title/Title';
import { CardProps } from './types';

import './style.scss'


const Card = ({url, name, description, bgColor}: CardProps) => {
    return (
        <div className="card">
            <div className="card__wrapper">
                <div className="card__img" style={{background: `${bgColor}`}}>
                    <Image url={url}/>
                </div>
                <div className="card__title">
                    <Title text={name}/>
                </div>
                <div className="card__description">
                    <Description textDescr={description}/>
                </div>
            </div>
        </div>
    );
}
 
export default Card;