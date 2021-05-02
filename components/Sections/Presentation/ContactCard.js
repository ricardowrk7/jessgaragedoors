import React from 'react';
import Form from './ContactForm';

const Contact = () => {
    const Images = ["wayne_dalton.png", "stanley.png", "marantec.png", "amarr.png", "craftsman.png", "clopay.png", "service-300x143.png", "Reliable-Garage-Door-Service-scaled.jpg", "discount-img.png"]

    return (
        <React.Fragment>
            <div className="contact-box">
                <h4>SCHEDULE AN APPOINTMENT</h4>
                <Form />
                <img src="/img/5-star-customer-rating.png" alt="" className="right-map-img"/>
                <p className="info-text-right">
                    OUR COMPANY STOCKS AND ARE FAMILIAR WITH ALL THE MAJOR GARAGE DOOR BRANDS.
                </p>
                {Images.map((item, index) => {
                    return (
                        <img src={`img/${item}`} key={index} className="right-map-img"/>
                    )
                })}
                
            </div>
        </React.Fragment>
    )
}

export default Contact;