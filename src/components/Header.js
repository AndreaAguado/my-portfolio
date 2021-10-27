import '../styles/layout/Header.scss';
const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul className="header_links_list">
                    <li><a className="header_link" href="#main">Sobre mi</a></li>
                    <li><a className="header_link" href="#about_me">Proyectos</a></li>
                    <li><a className="header_link" href=".">Contacto</a></li>
                    <li><a className="header_link" href=".">CV PDF</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;