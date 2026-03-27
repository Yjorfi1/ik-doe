import instagram from './images/instagram.png';
import linkedin from './images/linkedin.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-left">
                    <h1>IKDOE+</h1>
                </div>
                <br />
                <div className="footer-columns">
                    <div className="footer-col">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh</p>
                    </div>
                    <div className="footer-col">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh</p>
                    </div>
                    <div className="footer-col">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh</p>
                    </div>
                </div>

                <div className="footer-right">
                    <p className="follow">Volg ons</p>
                    <div className="socials">        
                        <img src={instagram} alt="Instagram" />
                        <img src={linkedin} alt="LinkedIn" />

                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;