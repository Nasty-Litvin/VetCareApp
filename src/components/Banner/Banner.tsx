import Description from '../Description/Description';
import Title from '../Title/Title'
import './style.scss'

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
        </div>
    );
}
 
export default Banner;