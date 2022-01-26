import  React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ()  => {

        return (
            <nav className="navigation navigation_theme">
                    <div className="navigation__block g-container">
                            <div className="navigation__brand">
                                    <Link to="/" className="navigation__brand--link navigation__brand--link_effect">Charter</Link>
                            </div>

                            <div className="navigation__box">
                                    <Link to="/nowy-kanal"  type="button" className="btn--normal app__button--tblue">Nowy kanał</Link>
                            </div>
                    </div>
            </nav>
        );
}

export default Navigation;
