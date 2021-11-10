import '../styles/layout/Header.scss';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react/cjs/react.development';

const Header = () => {

    const [collapsed, setCollapsed] = useState(true);
    const toggleMenu = () => {
        if (collapsed) {
            setCollapsed(false)
        }
        else {
            setCollapsed(true)
        }
    }
    return (
        <header className="header">
            <nav className="header_nav_big">
                <ul className="header_links_list">
                    <li>
                        <HashLink className="header_link" to="/home#about_me">Sobre mi</HashLink>

                    </li>
                    <li>
                        <HashLink className="header_link" to="/home#projects">Proyectos</HashLink>
                    </li>
                    <li>
                        <HashLink className="header_link" to="/home#tools">Tecnologías</HashLink>
                    </li>
                    <li>
                        <HashLink className="header_link" to="/home#contact">Contacto</HashLink>
                    </li>
                    <li>
                        <HashLink className="header_link" to="/home#cv_pdf">CV PDF</HashLink>
                    </li>
                </ul>
            </nav>
            <nav className={collapsed ? "header_nav_small hidden" : "header_nav_small"}>
                <ul className="header_links_list">
                    <li>
                        <HashLink className="header_link" to="/home#about_me">Sobre mi</HashLink>

                    </li>
                    <li>
                        <HashLink className="header_link" to="/home#projects">Proyectos</HashLink>
                    </li>
                    <li>
                        <HashLink className="header_link" to="/home#tools">Tecnologías</HashLink>
                    </li>
                    <li>
                        <HashLink className="header_link" to="/home#contact">Contacto</HashLink>
                    </li>
                    <li>
                        <HashLink className="header_link" to="/home#cv_pdf">CV PDF</HashLink>
                    </li>
                </ul>
            </nav>
            <i onClick={toggleMenu} className="fas fa-bars burger_menu"></i>

        </header>
    )
}
export default Header;