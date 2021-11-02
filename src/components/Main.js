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
                <h2 className="tools_title">Tecnologías</h2>
                <ul className="tools_list">
                    <i className="fab fa-github tools_icon"></i>
                    <i className="fas fa-database tools_icon"></i>
                    <i className="fab fa-npm tools_icon"></i>
                    <i className="fab fa-node tools_icon"></i>
                    <i className="fab fa-bootstrap tools_icon"></i>
                    <box-icon type='logo' name='visual-studio' className="tools_icon"></box-icon>
                    <box-icon type='solid' name='terminal' className="tools_icon"></box-icon>
                    <i className="fab fa-slack tools_icon"></i>
                    <i className="fab fa-css3-alt tools_icon"></i>
                    <i className="fab fa-html5 tools_icon"></i>
                    <i className="fab fa-sass tools_icon"></i>
                    <i className="fab fa-js-square tools_icon"></i>
                    <i className="fab fa-git-alt tools_icon"></i>
                    <i className="fab fa-react tools_icon"></i>
                    <i className="fab fa-gulp tools_icon"></i>


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