import '../styles/layout/Footer.scss';
const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer_nav">
                <ul className="footer_links_list">
                    <li><a className="footer_link" href="https://twitter.com/andrea114am" target="_blank" rel="noreferrer" title="twitter.com/andrea114am"><i className="fab fa-twitter"></i></a></li>
                    <li><a className="footer_link" href="https://www.linkedin.com/in/andrea-aguado-mole%C3%B3n/" target="_blank" rel="noreferrer" title="linkedin.com/in/andrea-aguado-moleón/"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a className="footer_link" href="https://github.com/AndreaAguado" target="_blank" rel="noreferrer" title="github.com/AndreaAguado"><i className="fab fa-github"></i></a></li>
                </ul>
            </nav>
            <small className="footer_small">&copy; Andrea Aguado 2021</small>
        </footer>
    )
}

export default Footer;