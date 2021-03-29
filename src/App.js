// import logo from './logo.svg';
import Homepage from './Mainbody';
import About from './About';
import Service from './Service';
// import './App.css';
import Navbar from './Navbar';
import Specialties from './Specialties';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
         <main>
            <Navbar />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route  path="/specialties" component={Specialties} />
                    <Route path="/about" component={About} />
                    <Route path="/service" component={Service} />
                  
            </Switch>
           
        </main>
        </BrowserRouter>
  );
}

export default App;
