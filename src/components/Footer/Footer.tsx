import About from '../About/About';


import footerData from '../../data/footer.json'
import './style.scss'
import ChapterSection from '../ChapterSection/ChapterSection';



const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__block-1">
                    <About />
                    <div className="chapter">
                        {footerData.map((item) => (
                            <ChapterSection
                                title={item.title}
                                dataChapter={item.content}
                            />
                        ))}
                    </div>
                </div>
                <div className="footer__link">
                    <a href="#">© Copyright 2021 - 2024 | Pet Theme by Md Shamim Hossain | All Rights Reserved</a>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;