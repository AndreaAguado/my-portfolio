import '../styles/layout/ProjectCard.scss';
const ProjectCard = (props) => {
    const renderTags = () => {
        return props.project.tags.map((tag, index) => {
            return (
                <li className='project_card_tags' id={index} key={index}>{tag}</li>
            )
        })
    }
    return (
        <article className="project_card">
            <a href={props.project.pageLink} target="_blank" rel="noreferrer" title="Visitar la página">
                <img className="project_card_img" src={props.project.preview} alt={props.project.title_alt} />
            </a>
            <ul className="project_card_tags-list">
                {renderTags()}
            </ul>
            <div className="project_card_info">
                <h3 className="project_card_info-title">{props.project.title_alt}</h3>
                <div className="project_card_info_links_container">
                    <a href={props.project.pageLink} target="_blank" rel='noreferrer' title='Visitar la página'>
                        <i className="fas fa-external-link-alt page_link_icon"></i>
                    </a>
                    <a href={props.project.githubRepo} target="_blank" rel="noreferrer" title="Repositorio en Github">
                        <i className="fab fa-github github_repo_icon"></i>
                    </a>
                </div>
            </div>
        </article>
    )
}
export default ProjectCard;