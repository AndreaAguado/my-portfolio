import '../styles/layout/Main.scss';
import AboutMe from './AboutMe';
import Contact from './Contact';
import ProjectCard from './ProjectCard';
import Tools from './Tools';
const Main = (props) => {
    const renderProjects = () => {
        return props.data.map((project, index) => {
            return (
                <li className="list_item" id={index} key={index}>
                    <ProjectCard project={project}></ProjectCard>
                </li>
            )
        })
    }
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
            </section>
        </main>
    )
}

export default Main;