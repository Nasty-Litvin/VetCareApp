import Title from '../Title/Title';
import Card from '../Card/Card';
import teamData from '../../data/team.json'

import './style.scss';

const teamTitle = 'Meet Our Groomers'

const Team = () => {
    return (
        <div className="team">
            <div className="team__wrapper">
                <div className="team__text">Our Team</div>
                <div className="team__title">
                    <Title text={teamTitle} />
                </div>
                <div className="team__cards">
                    {teamData.map((item) => (
                        <Card 
                            key={item.id}
                            url={item.img}
                            name={item.name}
                            description={item.designation}
                            bgColor={item.color}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Team;