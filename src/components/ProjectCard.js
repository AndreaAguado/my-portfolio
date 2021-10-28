import '../styles/layout/ProjectCard.scss';
const ProjectCard = (props) => {
    return (
        <div className="project_card">
            <a href={props.project.pageLink} target="_blank" rel="noreferrer" title="Ir a la página">
                <img src={props.project.preview} alt={props.project.title_alt} />
            </a>
            <h3>{props.project.title_alt}</h3>
            <a href={props.project.githubRepo} target="_blank" rel="noreferrer" title="Repositorio en Github"><i className="fab fa-github"></i>
            </a>
        </div>
    )
}
export default ProjectCard;