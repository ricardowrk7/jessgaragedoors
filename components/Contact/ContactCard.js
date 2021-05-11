import React from 'react';
import ContactForm from './ContactForm';

const ContactCard = () => {
    return (
        <div className="card-container-contact">
            <h2>Contact Us Today!</h2>
            <p>Contact us for all your garage door needs</p>
            <div className="card-contact-text">
                <div className="icon-info">
                    <i className="fa fa-phone-square" id="not-italic" style={{color: 'red', fontSize: '18px'}} />
                    <p>(614) 778-0235</p>
                </div>
                <div className="icon-info">
                    <i className="fa fa-home" id="not-italic" style={{color: 'red', fontSize: '20px'}} />
                    <p>Columbus OH, USA</p>
                </div>
                <div className="icon-info">
                    <i className="fa fa-envelope" id="not-italic" style={{color: 'red', fontSize: '18px'}} />
                    <p>contact@jessgaragedoors.com</p>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;