import '../styles/layout/Projects.scss';
import SectionWrapper from './SectionWrapper';

const Projects = (props) => {
    return (
        <SectionWrapper id="projects" classname="projects" section_name="Proyectos">
            <form className="projects_filter">
                <label htmlFor="html">
                    <input type="checkbox" name="tags" id="html" value="html" />
                    HTML
                </label>
                <label htmlFor="css">
                    <input type="checkbox" name="tags" id="css" value="css" />
                    CSS/SASS
                </label>

                <label htmlFor="javascript">
                    <input type="checkbox" name="tags" id="javascript" value="javascript" />
                    Javascript
                </label>
                <label htmlFor="react">
                    <input type="checkbox" name="tags" id="react" value="react" />
                    React
                </label>

                <label htmlFor="nodejs">
                    <input type="checkbox" name="tags" id="nodejs" value="nodejs" />
                    Node.js
                </label>
                <label htmlFor="sqlite">
                    <input type="checkbox" name="tags" id="sqlite" value="sqlite" />
                    SQLite
                </label>

            </form>
            <ul className="projects_list">
                {props.renderProjects()}
            </ul>
        </SectionWrapper>
    )
}
export default Projects;