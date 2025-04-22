import Title from '../Title/Title'
import linksData from '../../data/links.json'

import './style.scss';

const linksTitle = "Links"

const Links = () => {
    return (
        <div className="links">
            <div className="links__wrapper">
                <div className="links__title">
                    <Title text={linksTitle}/>
                </div>
                {
                    linksData.map((item) => (
                        <div 
                            className="links__item"
                            key={item.id}
                        >{item.link}</div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default Links;