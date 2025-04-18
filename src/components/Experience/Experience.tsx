import Button from '../Button/Button';
import Description from '../Description/Description';
import Title from '../Title/Title';
import ExperienceItem from '../ExperienceItem/ExperienceItem';

import experienceData from '../../data/experience.json'
import './style.scss'

const experienceTitle = 'Experience Vet Clinic And Services'
const experienceDescription = 'Aliquam erat volutpat In id fermentum augue, ut pellentesque  Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hakso hendrerit id. In aliquet magna nec lobortis maximus.'
const experienceButton = 'Know More About Us'

const images = [
    {url: '/experience/1-experience.png', className: 'experience__img--1'},
    {url: '/experience/2-experience.png', className: 'experience__img--2'},
    {url: '/experience/3-experience.png', className: 'experience__img--3'},
    {url: '/experience/4-experience.png', className: 'experience__img--4'},
    {url: '/experience/5-experience.png', className: 'experience__img--5'}
]

const Experience = () => {
    return (
        <div className="experience">
            <div className="experience__wrapper">
                <div className="experience__text">Our Success Story</div>
                <div className="experience__title">
                    <Title text={experienceTitle}/>
                </div>
                <div>
                    <Description textDescr={experienceDescription}/>
                </div>
                <div className="experience__list">
                    {experienceData.map((item) => (
                        <ExperienceItem 
                            content={item.content}
                            urlPicture={item.url}
                        />
                    ))}
                </div>
                <div className="experience__button">
                    <Button text={experienceButton}/>
                </div>
                <div className="experience__imgs">
                    {images.map((image, index) => (
                        <div 
                            key={index}
                            className={`experience__img ${image.className}`}
                            style={{background: `url${image.url}`}}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Experience;