import CardPP from '../CardPP/CardPP';
import pricingPlanData from '../../data/pricingPlan.json'
import './style.scss';

const PricingPlan = () => {
    return (
        <div className="pricing-plan">
            <div className="pricing-plan__wrapper">
                <div className="pricing-plan__cards">
                    {pricingPlanData.map((item) => (
                        <CardPP 
                            subtitle={item.pack}
                            title={item.title}
                            list={item.list}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default PricingPlan;