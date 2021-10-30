import { Link } from 'react-router-dom';
import '../styles/layout/Landing.scss';
import Sparkle from 'react-sparkle';

const Landing = () => {
    return (
        <section className="landing_page">
            <h1>Hola, soy Andrea Aguado Moleón!</h1>
            {/* <p>Te doy la bienvenida a mi porfolio</p> */}

            <div className="button_sparkles">
                <Link to="/home#about_me" className="landing_page_button" >Conóceme</Link>
                <Sparkle color={'random'}></Sparkle>
            </div>
        </section>
    )
}
export default Landing;