import '../styles/layout/Main.scss';
import AboutMe from './AboutMe';
import ProjectCard from './ProjectCard';
// import { Document, Page } from 'react-pdf';
// import { useState } from 'react';
// import PDF from "../data/AndreaAguadoCVEspañol.pdf";
const Main = (props) => {
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);
    const renderProjects = () => {
        return props.data.map((project, index) => {
            return (
                <li className="list_item" id={index} key={index}>
                    <ProjectCard project={project}></ProjectCard>
                </li>
            )
        })
    }
    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    // }
    return (
        <main className="main">
            <AboutMe></AboutMe>
            <section id="projects" className="projects">
                <h2 className="projects_title">Proyectos</h2>
                <ul className="projects_list">
                    {renderProjects()}
                </ul>
            </section>
            <section id="tools" className="tools">
                <h2 className="tools_title">Tecnologías</h2>
                <ul className="tools_list">
                    <li title="html"><i className="fab fa-html5 tools_icon"></i></li>
                    <li title="css"><i className="fab fa-css3-alt tools_icon"></i></li>
                    <li title="sass"><i className="fab fa-sass tools_icon"></i></li>
                    <li title="bootstrap"><i className="fab fa-bootstrap tools_icon"></i></li>
                    <li title="javascript"><i className="fab fa-js-square tools_icon"></i></li>
                    <li title="react"><i className="fab fa-react tools_icon"></i></li>
                    <li title="git"><i className="fab fa-git-alt tools_icon"></i></li>
                    <li title="terminal"><i className='bx bxs-terminal tools_icon' ></i></li>
                    <li title="visual studio"><i class='bx bxl-visual-studio tools_icon'></i></li>
                    <li title="slack"><i className="fab fa-slack tools_icon"></i></li>
                    <li title="gulp"><i className="fab fa-gulp tools_icon"></i></li>
                    <li title="node.js"><i className="fab fa-node tools_icon"></i></li>
                    <li title="github"><i className="fab fa-github tools_icon"></i></li>
                    <li title="base de datos"><i className="fas fa-database tools_icon"></i></li>
                    <li title="npm"><i className="fab fa-npm tools_icon"></i></li>


                </ul>
            </section>
            <section id="contact" className="contact">
                <h2 className="contact_title">Contacto</h2>
                <form className="contact_form" action="https://formspree.io/f/mgerjbwv" method="post">
                    <span>
                        <span>
                            <label className="contact_label" for="name">Nombre *</label>
                            <input className="contact_input" name="name" id="name" type="text" placeholder="Nombre Apellidos" required></input>
                        </span>
                        <span>
                            <label className="contact_label" for="email">Email *</label>
                            <input className="contact_input" name="_replyto" id="email" type="email" placeholder="email@ejemplo.com" required></input>
                        </span>
                    </span>
                    <label className="contact_label" htmlFor="comments">Mensaje * </label>
                    <textarea className="contact_input" id="comments" name="comments" rows="8" cols="80" placeholder="Escribe aquí tu mensaje..." required></textarea>
                    <button className="contact_submit" type="submit">Enviar</button>
                </form>
            </section>
            <section id="cv_pdf" className="cv_pdf">
                <h2 className="cv_pdf_title">CV en PDF</h2>
                <a href="https://drive.google.com/drive/folders/1sfdDxitw0VP0ki2lvhRHEt5J0osik0eQ?usp=sharing" target="_blank" rel='noreferrer' title="CV">
                    <i class='bx bxs-file-pdf'></i>
                </a>
                {/* <Document file={PDF} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p> */}
            </section>
        </main>
    )
}

export default Main;