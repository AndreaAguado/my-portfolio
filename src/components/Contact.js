import '../styles/layout/Contact.scss';
const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2 className="contact_title">Contacto</h2>
            <form className="contact_form" action="https://formspree.io/f/mgerjbwv" method="post">
                <span>
                    <span>
                        <label className="contact_label" for="name">Nombre *</label>
                        <input className="contact_input" name="name" id="name" type="text" placeholder="Nombre Apellidos" required></input>
                    </span>
                    <span>
                        <label className="contact_label" for="email">Email *</label>
                        <input className="contact_input" name="_replyto" id="email" type="email" placeholder="email@ejemplo.com" required></input>
                    </span>
                </span>
                <label className="contact_label" htmlFor="comments">Mensaje * </label>
                <textarea className="contact_input" id="comments" name="comments" rows="8" cols="80" placeholder="Escribe aquí tu mensaje..." required></textarea>
                <button className="contact_submit" type="submit">Enviar</button>
            </form>
        </section>
    )
}
export default Contact;