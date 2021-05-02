import React from 'react';
import Testimonials from '../Testimonials';

const Home = () => {
    return (
        <React.Fragment>
            <div className="home-content">
                <h4>The Most Affordable {'&'} Reliable Garage Door Service in Columbus</h4>
                <p>
                    Garage doors have been used by homeowners all over the world for centuries. They serve multipurpose and are vital to home’s safety and security. Not only do they help enhance your property’s curb appeal, but also provide you with full protection against potential burglars. If your garage door isn’t fully operational and needs servicing in central ohio, we at Jess Garage Doors are always here to offer all-inclusive services to meet all your garage door needs. Whether you want to hire us for garage door opener repair, garage door replacement or garage door springs repair, we do it all at reasonable rates and with quick turnaround. Our accredited, personable technicians adopt the latest approach to fix your garage doors with greatest efficiency. Whatever the reason behind the poor performance of your overhead garage door, we can fix it fast without causing damage to anything surrounding your garage door.
                </p>
                <p>
                    We pride ourselves on being the most reliable and economical garage door service provider in central Ohio. Unlike our competitors, we charge comparatively low rates to our clients, as we think everyone deserves the top-rated garage door service. Sometimes the issue isn’t with your garage door, but with the opener. Our technicians will carefully assess your garage door to reach the exact root cause of the problem. All of our garage door staff is experienced and certified, and you can fully count on our service. The vast majority of our old customers are saying amazing and satisfying things about our services and feel no hesitation in suggesting our garage door service to anyone looking for a fully licensed garage door contractor.
                </p>
                <img src="/img/jess-garage-truck.png" alt="" className="home-image"/>
                <h4>
                    All-Inclusive Service with Fast Turnaround and Affordable Rates!
                </h4>
                <p>
                At Jess Garage Doors, we’re a very dedicated, highly talented team of installers and repairers who handles all our repair, replacement and installation jobs. We have been offering first-class garage door repair {'&'} replacement services for decades. So, we know exactly how it’s done without creating any mess.
                </p>
                <p>
                    Call us today for more information!
                </p>
                <div className="image-bullet-home">
                    <img src="/img/brown-door.png" className="home-image"/>
                    <div>
                        <h4>Why Choose Us?</h4>
                        <ul>
                            <li>Lowest Rates in Town</li>
                            <li>Garage Door Repair {'&'} Replacement</li>
                            <li>Honest {'&'} well experienced staff</li>
                            <li>Bonded, Insured, {'&'} Licensed</li>
                            <li>Accept All Payment Methods</li>
                            <li>Discount Coupon For Installation</li>
                            <li>Same Day Repair {'&'} Installation Services</li>
                            <li>24 Hour Services</li>
                            <li>Professional Technicians</li>
                            <li>20 Years of Experience</li>
                        </ul>
                    </div>
                </div>
                <h4>What Our Customers Are Saying About Us</h4>
                <div className="testimonial-component">
                    <Testimonials />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;