import Title from '../Title/Title'
import Card from '../Card/Card';
import cardsData from '../../data/work.json'

import './styles.scss'

const workTitle = 'What We Do'

const Work = () => {
    return (
        <div className="work">
            <div className="work__wrapper">
                <div className="work__text">Care For Your Pet</div>
                <div className="work__title">
                    <Title text={workTitle}/>
                </div>
                <div className="work__cards">
                    {cardsData.map((item) => (
                        <Card 
                            key={item.id}
                            url={item.img}
                            name={item.name}
                            description={item.description}
                            bgColor={item.color}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Work;