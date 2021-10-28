import '../styles/layout/ProjectCard.scss';
const ProjectCard = (props) => {
    return (
        <article className="project_card">
            <a href={props.project.pageLink} target="_blank" rel="noreferrer" title="Visitar la página">
                <img className="project_card_img" src={props.project.preview} alt={props.project.title_alt} />
            </a>
            <div className="project_card_info">
                <h3>{props.project.title_alt}</h3>

                <a href={props.project.githubRepo} target="_blank" rel="noreferrer" title="Repositorio en Github">
                    <i className="fab fa-github github_repo_icon"></i>
                </a>
            </div>
        </article>
    )
}
export default ProjectCard;