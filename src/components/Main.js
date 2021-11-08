import '../styles/layout/Main.scss';
import AboutMe from './AboutMe';
import Contact from './Contact';
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
            <Contact></Contact>

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