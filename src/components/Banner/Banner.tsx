import Button from '../Button/Button';
import Description from '../Description/Description';
import Title from '../Title/Title'

import './style.scss'

const images = [
    { url: '/banner/1-banner.png', className: 'banner__img--1' },
    { url: '/banner/2-banner.svg', className: 'banner__img--2' },
    { url: '/banner/3-banner.svg', className: 'banner__img--3' },
    { url: '/banner/4-banner.svg', className: 'banner__img--4' },
    { url: '/banner/5-banner.svg', className: 'banner__img--5' },
]

const Banner = () => {
    let textTitle = "For Your Pet’s Natural Life & Care";
    let textDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"

    return (
        <div className="banner">
            <div className="banner__title">
                <Title text={textTitle}/>
            </div>
            <div className="banner__description">
                <Description textDescr={textDescription}/>
            </div>
            <div className="banner__btns">
                <Button text="Our Services"/>
                <Button text="Make Appointment" color="green"/>
            </div>
            <div className="banner__imgs">
                {
                    images.map((image, index) => (
                        <div 
                            key={index}
                            className={`banner__img ${image.className}`}
                            style={{backgroundImage: `url(${image.url})`}}
                        />
                    ))
                }
            </div>
        </div>
    );
}
 
export default Banner;