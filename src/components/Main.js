import '../styles/layout/Main.scss';
import AboutMe from './AboutMe';
import ProjectCard from './ProjectCard';
import Tools from './Tools';
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
            <Tools></Tools>
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