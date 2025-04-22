import addressData from '../../data/address.json';
import Title from '../Title/Title';

import './style.scss';

const addressTitle = "Address"

const Address = () => {
    return (
        <div className="address">
            <div className="address__wrapper">
                <div className="address__title">
                    <Title text={addressTitle}/>
                </div>
                {
                    addressData.map((item) => (
                        <div 
                            className="address__item" 
                            key={item.id}
                        >{item.addressLink}</div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default Address;