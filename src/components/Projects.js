import '../styles/layout/Projects.scss';
import SectionWrapper from './SectionWrapper';

const Projects = (props) => {
    return (
        <SectionWrapper id="projects" classname="projects" section_name="Proyectos">
            <ul className="projects_list">
                {props.renderProjects()}
            </ul>
        </SectionWrapper>
    )
}
export default Projects;