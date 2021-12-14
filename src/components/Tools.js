import '../styles/layout/Tools.scss';
import SectionWrapper from './SectionWrapper';
const Tools = () => {
    return (
        <SectionWrapper id="tools" classname="tools" section_name="Tecnologías">
            <ul className="tools_list">
                <li title="html"><i className="fab fa-html5 tools_icon"></i></li>
                <li title="css"><i className="fab fa-css3-alt tools_icon"></i></li>
                <li title="sass"><i className="fab fa-sass tools_icon"></i></li>
                <li title="bootstrap"><i className="fab fa-bootstrap tools_icon"></i></li>
                <li title="javascript"><i className="fab fa-js-square tools_icon"></i></li>
                <li title="react"><i className="fab fa-react tools_icon"></i></li>
                <li title="git"><i className="fab fa-git-alt tools_icon"></i></li>
                <li title="terminal"><i className='bx bxs-terminal tools_icon' ></i></li>
                <li title="visual studio"><i className='bx bxl-visual-studio tools_icon'></i></li>
                <li title="slack"><i className="fab fa-slack tools_icon"></i></li>
                <li title="gulp"><i className="fab fa-gulp tools_icon"></i></li>
                <li title="node.js"><i className="fab fa-node tools_icon"></i></li>
                <li title="github"><i className="fab fa-github tools_icon"></i></li>
                <li title="base de datos"><i className="fas fa-database tools_icon"></i></li>
                <li title="npm"><i className="fab fa-npm tools_icon"></i></li>
            </ul>
        </SectionWrapper>
    )
}
export default Tools;