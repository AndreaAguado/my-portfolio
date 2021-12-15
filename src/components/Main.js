import '../styles/layout/Main.scss';
import AboutMe from './AboutMe';
import Contact from './Contact';
import CvPdf from './CvPdf';
import Projects from './Projects';
import Tools from './Tools';
const Main = (props) => {

    return (
        <main className="main">
            <AboutMe></AboutMe>
            <Projects renderProjects={props.renderProjects}></Projects>
            <Tools></Tools>
            <Contact></Contact>
            <CvPdf></CvPdf>
        </main>
    )
}

export default Main;