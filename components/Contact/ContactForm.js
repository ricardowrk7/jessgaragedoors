import React from 'react';
import Contact from '../Sections/Presentation/ContactCard';

const ContactForm = () => {
    return (
        <div className="outer-contact-box">
            <h4 className="contact-title">Request A service</h4>
            <form>
            <div className="form-row-1">
                <div className="input-top">
                    <input type="name" placeholder="Name" className="input-class"/>
                </div>
                <div className="input-top">
                    <input type="phone" placeholder="Phone" className="input-class" />
                </div>
            </div>
            <div className="input-email-contact">
                <input type="email" placeholder="Email" className="input-class" />
            </div>
            <div className="input-email-contact-3">
                <textarea placeholder="Message" className="input-class" />
            </div>
            <button type="submit" className="contact-info-2">send</button>
            </form>
        </div>
    )
}

export default ContactForm;