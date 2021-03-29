import './Service.css'
import BlockChain from './images/blockchain.svg';
import ProjectMgt from './images/bitcoin.svg';
import CryptoOtc from './images/stock.svg'



const Service = () => {
    return (
        <div className="service-container">
           
            <h1 className="s-header">Our Services</h1>
      <section className="main-card">
                 <div className="v-services">
                <div className="images">
                <img src={BlockChain} rel="blockchain-educational-services" />
                </div> 
                <h1 className="block services">Blockchain Educational Services</h1>
                <p className="block">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem inventore cum ad laborum voluptatem aliquam porro odio hic non error voluptatibus esse, exercitationem eos a eligendi dolore reiciendis ipsum ducimus.
                </p>
            </div>
            <div className="v-services">
              
                <div className="images">
                    <img src={ProjectMgt} rel="" />
                </div>
                 <h1  className="block services" >Operations/Project Management Services</h1>
                <p  className="block">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem inventore cum ad laborum voluptatem aliquam porro odio hic non error voluptatibus esse, exercitationem eos a eligendi dolore reiciendis ipsum ducimus.
                </p>
            </div>
            <div className="v-services">
               
                <div className="images"> 
                     <img src={CryptoOtc} rel="crypto-otc-services" />
                </div> 
                 <h1  className="block services">Cryptocurrency OTC, Crypto/Fiat Services</h1>
                <p  className="block  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem inventore cum ad laborum voluptatem aliquam porro odio hic non error voluptatibus esse, exercitationem eos a eligendi dolore reiciendis ipsum ducimus.
                </p>
            </div>

           </section>
           
            <a className="purchase">Purchase Now</a>
        </div>
    );
};

export default Service;