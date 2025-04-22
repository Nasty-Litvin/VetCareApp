import Title from '../Title/Title';
import openingHoursData from '../../data/openingHours.json';
import './style.scss';

const openingHoursTitle = "Opening Hours";

const OpeningHours = () => {
    return (
        <div className="opening-hours">
            <div className="opening-hours__wrapper">
                <div className="opening-hours__title">
                    <Title text={openingHoursTitle}/>
                </div>
                {
                    openingHoursData.map((item) => (
                        <div 
                            className="opening-hours__item"
                            key={item.id}
                        >{item.hours}</div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default OpeningHours;