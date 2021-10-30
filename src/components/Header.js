import '../styles/layout/Header.scss';
import { HashLink } from 'react-router-hash-link';
const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul className="header_links_list">
                    <li>
                        <HashLink className="header_link" to="/home#about_me">Sobre mi</HashLink>

                    </li>
                    <li>
                        <HashLink className="header_link" to="/home#projects">Proyectos</HashLink>
                    </li>
                    <li>
                        <HashLink className="header_link" to="/home#projects">Contacto</HashLink>
                    </li>
                    <li>
                        <HashLink className="header_link" to="/home#projects">CV PDF</HashLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;