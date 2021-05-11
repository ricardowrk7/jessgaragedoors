import React from 'react';
import Form from './ContactForm';

const Contact = () => {
    const Images = ["wayne_dalton.png", "stanley.png", "marantec.png", "amarr.png", "craftsman.png", "clopay.png", "service-300x143.png", "Reliable-Garage-Door-Service-scaled.jpg", "discount-img.png"]

    return (
        <React.Fragment>
            <div className="contact-box">
                <h4>SCHEDULE AN APPOINTMENT</h4>
                <Form />            
            </div>
        </React.Fragment>
    )
}

export default Contact;