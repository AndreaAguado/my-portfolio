import '../styles/layout/Main.scss';
import AboutMe from './AboutMe';
import Contact from './Contact';
import CvPdf from './CvPdf';
import ProjectCard from './ProjectCard';
import Projects from './Projects';
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
            <Projects renderProjects={renderProjects}></Projects>
            <Tools></Tools>
            <Contact></Contact>
            <CvPdf></CvPdf>
        </main>
    )
}

export default Main;