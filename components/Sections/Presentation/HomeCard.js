import React from 'react';
import GoogleReviews from '../GoogleReviews';
import ContactForm from '../../Contact/ContactForm';

const Home = ({cardContent}) => {
    return (
        <React.Fragment>
            <div className="home-content">
                {cardContent}
                <div id='schedule-service-1'>
                    <div className="center-mobile-a">
                    <h2>Contact Us Now</h2>
                    <span >(614) 778-0235</span>
                    </div>
                    <ContactForm />
                </div>
                <h4>What Our Customers Are Saying About Us</h4>
                <div className="testimonial-component">
                    <GoogleReviews />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;