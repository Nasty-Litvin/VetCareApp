import { ExperienceItemProps } from './types'

const ExperienceItem = ({content, urlPicture}: ExperienceItemProps) => {
    return (
        <div className="experience-item">
            <a href="#">
                <img src={urlPicture} />
                <span>{content}</span>
            </a>
        </div>
    );
}
 
export default ExperienceItem;