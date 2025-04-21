import CallToAction from '../CallToAction/CallToAction';
import Experience from '../Experience/Experience';
import PricingPlan from '../PricingPlan/PricingPlan';
import Team from '../Team/Team';
import Work from '../Work/Work';

import './style.scss'

const Main = () => {
    return (
        <div className="container">
            <main className="main">
                <Work />
                <Experience />
                <Team />
                <PricingPlan />
                <CallToAction />
            </main>
        </div>  
    );
}
 
export default Main;