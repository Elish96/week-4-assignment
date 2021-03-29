import './About.css'
import AboutImage from './images/about-img.svg';



const About = () => {
    return (
        <div className="about-container">
            <div className="about one">
                <img src={AboutImage} alt="AboutImage"/>
            </div>
            <div className="about-2">
                <div className="aabout">
                    <h1 className="abt-cont head">About Us</h1>
                    <p className="abt-cont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, laboriosam exercitationem consequatur expedita libero minima possimus dicta ad eius dolorum pariatur iure illum nulla consequuntur aperiam fuga cupiditate! Esse, nemo.</p>
                    <p className="abt-cont cn">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore corporis assumenda adipisci, accusamus nulla magnam unde. Reiciendis debitis libero a nihil, neque omnis eveniet quis saepe vero cumque maxime tempore!</p>

                    <a href="#" alt="" className="lrn-more">Learn more</a>
                </div>
            </div>
        </div>
    );
};

export default About;