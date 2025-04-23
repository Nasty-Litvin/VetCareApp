import Button from '../Button/Button';
import Description from '../Description/Description';
import Title from '../Title/Title';
import './style.scss'

const callToActionTitle = 'Professional Pet Care'
const callToActionDescription = 'Pet owners trust us to look after the needs of their beloved companions. We are specialists committed to delivering the very highest of veterinary care and affection.'

const images = [
    { url: '/callToAction/1-callToAction.png', className: 'call-to-action__img--1' },
    { url: '/callToAction/2-callToAction.svg', className: 'call-to-action__img--2' },
    { url: '/callToAction/3-callToAction.svg', className: 'call-to-action__img--3' },
    { url: '/callToAction/4-callToAction.svg', className: 'call-to-action__img--4' },

]

const CallToAction = () => {
    return (
        <div className="call-to-action">
            <div className="call-to-action__wrapper">
                <div className="call-to-action__title">
                    <Title text={callToActionTitle} />
                </div>
                <div className="call-to-action__description">
                    <Description textDescr={callToActionDescription} />
                </div>
                <div className="call-to-action__btn">
                    <Button text='Contact Us Now' />
                </div>
                <div className="call-to-action__imgs">
                    {
                        images.map((image, index) => (
                            <div
                                key={index}
                                className={`call-to-action__img ${image.className}`}
                                style={{backgroundImage: `url(${image.url})`}}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
 
export default CallToAction;