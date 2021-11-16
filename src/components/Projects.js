import '../styles/layout/Projects.scss';

const Projects = (props) => {
    return (
        <section id="projects" className="projects">
            <h2 className="projects_title">Proyectos</h2>
            <ul className="projects_list">
                {props.renderProjects()}
            </ul>
        </section>
    )
}
export default Projects;