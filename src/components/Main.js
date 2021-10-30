import '../styles/layout/Main.scss';
import ProjectCard from './ProjectCard';
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
            <section id="about_me" className="about_me">
                <h2>Sobre mi</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perferendis ullam officiis dolorum quas, reprehenderit distinctio explicabo labore itaque qui, saepe sequi aperiam. Reiciendis eos repellendus ad dolore vitae omnis.</p>
            </section>
            <section id="projects" className="projects">
                <h2>Proyectos</h2>
                <ul className="projects_list">
                    {renderProjects()}
                </ul>
            </section>
        </main>
    )
}

export default Main;