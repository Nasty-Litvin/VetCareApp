import Title from '../Title/Title';
import { ChapterSectionProps } from './types';

import './style.scss';


const ChapterSection = ({title, dataChapter}: ChapterSectionProps) => {
    return (
        <div className="chapter-section">
            <div className="chapter-section__wrapper">
                <div className="chapter-section__title">
                    <Title text={title} />
                </div>
                <div className="chapter-section__item">
                    {
                        dataChapter.map((item) => (
                            <div className="chapter-section__item-content">{item}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
 
export default ChapterSection;