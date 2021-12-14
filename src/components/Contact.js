import '../styles/layout/Contact.scss';
import SectionWrapper from './SectionWrapper';
const Contact = () => {
    return (
        <SectionWrapper id="contact" classname="contact" section_name="Contacto">
            <form className="contact_form" action="https://formspree.io/f/mgerjbwv" method="post">
                <span className="contact_inputs_section">
                    <span>
                        <label className="contact_label" htmlFor="name">Nombre <span className="contact_asterisk">*</span></label>
                        <input className="contact_input" name="name" id="name" type="text" placeholder="Nombre Apellidos" required></input>
                    </span>
                    <span>
                        <label className="contact_label" htmlFor="email">Email <span className="contact_asterisk">*</span></label>
                        <input className="contact_input" name="_replyto" id="email" type="email" placeholder="email@ejemplo.com" required></input>
                    </span>
                </span>
                <span className="contact_textarea_section">
                    <label className="contact_label" htmlFor="comments">Mensaje <span className="contact_asterisk">*</span></label>
                    <textarea className="contact_input" id="comments" name="comments" rows="8" cols="80" placeholder="Escribe aquí tu mensaje..." required></textarea>
                </span>
                <button className="contact_submit" type="submit">Enviar</button>
            </form>
        </SectionWrapper>
    )
}
export default Contact;