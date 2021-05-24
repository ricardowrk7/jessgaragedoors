import React from 'react';
import ContactForm from './ContactForm';

const ContactCard = () => {
    return (
        <div className="card-container-contact">
            <h2 className="mobile-contact-box">Contact Us Today!</h2>
            <p className="card-p-contact">Contact us for all your garage door needs</p>
            <div className="card-contact-text">
                <div className="icon-info">
                    <i className="fa fa-phone-square" id="not-italic" style={{color: 'red', fontSize: '18px'}} />
                    <p className="edit-text-contact">(614) 778-0235</p>
                </div>
                <div className="icon-info">
                    <i className="fa fa-home" id="not-italic" style={{color: 'red', fontSize: '20px'}} />
                    <p className="edit-text-contact">Columbus OH, USA</p>
                </div>
                <div className="icon-info">
                    <i className="fa fa-envelope" id="not-italic" style={{color: 'red', fontSize: '18px'}} />
                    <p className="edit-text-contact">contact@jessgaragedoors.com</p>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;