import React from 'react';
import Testimonials from '../Testimonials';

const Home = ({cardContent}) => {
    return (
        <React.Fragment>
            <div className="home-content">
                {cardContent}
                <h4>What Our Customers Are Saying About Us</h4>
                <div className="testimonial-component">
                    <Testimonials />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;