
import './Specialties.css'
import Feature1 from './images/feature-1.svg';
import Feature2 from './images/feature-2.svg';
import Feature3 from './images/feature-3.svg';


const Specialties = () => {
    return (
        <div className="special">
            <section className="specialty">
                <h1 className="spec cad">Our Specialities</h1>
                <p className="spec s-cad">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore .
                </p>
            </section>
            <section className="transact-main-card">
               
            <div className="sibling-card">
                 <div className="blue-card">
                <div className="card">
                            <div className="img-cd">
                                <img src={Feature1} alt="feature1" />
                            </div> 
                    <h1 className="card-1">
                        Buy Your Crypto
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam similique fugit deleniti sint 
                    </p>
                </div>
                     <div className="card">
                            <div className="img-cd">
                                 <img src={Feature2} alt="feature-2" />
                            </div> 
                    <h1 className="card-1 sell">
                        Sell Instantly
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nisi fuga! Eum reiciendis quisquam possimus  
                    </p>
                </div>
                <div className="card">
                   
                            <div className="img-cd">
                              <img src={Feature3} alt="feature-3" />
                            </div>       
                    <h1 className="card-1">
                        Invest for Longterm
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, minus beatae nobis quia neque deserunt ratione. 
                    </p>
                </div>
              </div>
             </div>
                
               
            </section>
        </div>
    );
};

export default Specialties;