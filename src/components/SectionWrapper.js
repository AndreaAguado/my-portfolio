import '../styles/layout/SectionWrapper.scss';
const SectionWrapper = (props) => {
    return (
        <section id={props.id} className={`${props.classname} section`}>
            <h2 className="section_title">{props.section_name}</h2>
            {props.children}
        </section>
    )
}
export default SectionWrapper;