import  React from 'react';
import { Link } from 'react-router-dom';

const Footer = ()  => {

        return (
            <footer className="footer footer_theme">
                    <div className="footer__block g-container">
                            <div className="footer__copyright">
                                    <span className="footer__copyright--caption">© 2022 Charter. Design by Damian Barszcz</span>
                            </div>

                            <div className="footer__brand">
                                    <span  className="footer__brand--caption">Charter</span>
                            </div>
                    </div>
            </footer>
        );
}

export default Footer;