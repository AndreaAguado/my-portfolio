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
                <h2 className="about_me_title">Sobre mi</h2>
                <p className="about_me_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perferendis ullam officiis dolorum quas, reprehenderit distinctio explicabo labore itaque qui, saepe sequi aperiam. Reiciendis eos repellendus ad dolore vitae omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perferendis ullam officiis dolorum quas, reprehenderit distinctio explicabo labore itaque qui, saepe sequi aperiam. Reiciendis eos repellendus ad dolore vitae omnis.</p>
            </section>
            <section id="projects" className="projects">
                <h2 className="projects_title">Proyectos</h2>
                <ul className="projects_list">
                    {renderProjects()}
                </ul>
            </section>
            <section id="tools" className="tools">
                <h2 className="tools">Tecnologías</h2>
                <ul className="tools_list">

                </ul>
            </section>
            <section id="contact" className="contact">
                <h2 className="contact_title">Contacto</h2>
            </section>
            <section id="cv_pdf" className="cv_pdf">
                <h2 className="cv_pdf_title">CV en PDF</h2>
            </section>
        </main>
    )
}

export default Main;