import Home from './home';
import './Mainbody.css';
// import Navbar from './Navbar';
import Specialties from './Specialties';
import About from './About';
import Service from './Service';

const MainBody = () => {
    
    return (
        <main>
            {/* <Navbar /> */}
            <Home />
            <Specialties />
            <About />
            <Service/>
         
        </main>
    );
};

export default MainBody;