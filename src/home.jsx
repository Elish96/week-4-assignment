import './home.css'
import HeroImage from './images/hero-img.svg';

const Home = () => {
    return (
        <div className="main-container">
            <div className="content-container" >
                <div className="content">
                     <h1 className="tent">Trade and invest in cryto using our platform</h1>
                <p className="tent">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, similique eveniet. Error, accusamus animi omnis tempore quis fugit tempora? Quod expedita beatae itaque reiciendis architecto accusamus doloribus explicabo illo vero?
                    </p>
                    <a href="#" className="btn-btc">Register Now</a>
                </div>
              
            </div>
             {/* btc image  */}
            <div className="btc-container">
                <div className="hero">
                    <img src={HeroImage} alt="hero-image"/>
                </div>
            </div>
        </div>
        
    );
};

export default Home;