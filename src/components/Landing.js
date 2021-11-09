import { Link } from 'react-router-dom';
import '../styles/layout/Landing.scss';
import Sparkle from 'react-sparkle';
import { useState } from 'react';

const Landing = () => {

    const [hover, SetHover] = useState(false);

    return (
        <section className="landing_page">
            <h1 className="landing_page_title">Hola, soy Andrea Aguado Moleón</h1>
            <p className="landing_page_subtitle">Te doy la bienvenida a mi porfolio</p>
            <div onMouseEnter={() => SetHover(true)}
                onMouseLeave={() => SetHover(false)} className="button_sparkles">
                <Link to="/home" className="landing_page_button">
                    Conóceme
                </Link>
                <Sparkle
                    className="sparkles"
                    color={`${hover ? 'random' : 'transparent'}`}>
                </Sparkle>
            </div>
        </section >
    )
}
export default Landing;