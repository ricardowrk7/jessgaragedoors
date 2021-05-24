import React from 'react';
import Nav from '../navbars/ColorNav';
import Footer from '../Footers/index';
import Header from '../headers/HeaderTemplate';
import ContactForm from '../Contact/ContactForm';
import ContactCard from './Presentation/ContactCard';
import GoogleReviews from './GoogleReviews';
import Maps from '../SmallMaps';

const ServiceAreaComponent = ({data, locations}) => {
    const images = ["service-columbus-1.jpg", "service-columbus-2.jpg", "service-columbus-3.jpg"]
    return (
        <React.Fragment>
            <div id="page-container-hide">
            <Nav />
            <Header city={data.city}/>
            <div className="service-section-one">
                <div className="service-left">
                    <div className="service-title-2">
                    <h2>Jess Garage Door</h2>
                    </div>
                    <div className="image-box-1">
                    {images.map((item, index) => {
                        return (
                            <div key={index}>
                                <img src={`/img/${item}`} alt="columbus-image" className="image-services"/>
                            </div>
                        )
                    })}
                    </div>
                    <div className="below-service-header">
                        Garage Doors | Contact Us
                    </div>
                    <div className="service-title-2">
                    <h1 className="sa-title-2">Garage Door Repair in {data.city}, OH</h1>
                    </div>
                    <p className="paragraph-text-2">
                        {data.paragraphOne}
                    </p>
                    <p className="paragraph-text-2">
                        {data.paragraphTwo}
                    </p>
                    <p className="paragraph-text-2">
                        {data.paragraphThree}
                    </p>
                    <p className="paragraph-text-2">
                        {data.paragraphFour}
                    </p>
                    <h2 className="small-title-sa">Our Garage Door Services</h2>                    
                    <p className="paragraph-text-2">
                        {data.paragraphFive}
                    </p>
                    <h2 className="small-title-sa">Garage Door Installation</h2>
                    <p className="paragraph-text-2">
                        {data.paragraphSix}
                    </p>
                    <h2 className="small-title-sa">Garage Door Repair</h2>
                    <p className="paragraph-text-2">
                        {data.paragraphSeven}
                    </p>
                    <div id='residential'>
                    <h3>Residential Garage Door Repair Services</h3>
                    <div className="image-service-center">
                        <div className="service-img-box">
                        <img src="/img/service-3.jpg" alt="service-image" className="img-in-box"/>
                        </div>
                        <ul className="list-one-sa">
                            <li>Broken overhead garage door springs</li>
                            <li>Torsion springs</li>
                            <li>Broken cables</li>
                            <li>Broken or bent rollers</li>
                            <li>Bent, misaligned, or rusted track</li>
                            <li>Replacement of sections or panels</li>
                            <li>Hardware overhauls</li>
                            <li>Noisy door silencing</li>
                        </ul>
                    </div>
                    </div>
                    <div id='commercial'>
                    <h3 className="small-title-sa">Commercial Garage Door Service</h3>
                    <p className="paragraph-text-2">Jess Overhead Garage Doors provides experienced sales and service of commercial garage doors for local businesses in {data.city}, OH. We have decades of experience, and our expert garage door technicians will be able to get your company the exact type of doors that will work best with your facility.</p>
                    </div>
                    <h4>Emergency Commercial Garage Door Repair</h4>
                    <p className="paragraph-text-2">Does your business need emergency garage door service? For over 40 years, Jess Overhead Garage Doors has provided experienced commercial garage door service for many types of businesses in {data.city}, Ohio. Contact us now and schedule emergency garage door repair! We have worked with many different types of businesses in {data.city}, Ohio!</p>
                    <div className="image-service-center" id="container-commercial">
                        <div className="service-img-box">
                            <img src="/img/commercial-1.jpg" alt="commercial" className="img-in-box-1"/>
                        </div>
                    <ul className="list-one-sa" id="correct-this-ul">
                        <li>Warehouses</li>
                        <li>Car Wash</li>
                        <li>Fire Stations</li>
                        <li>Storage Facilities</li>
                        <li>Automotive Sales</li>
                        <li>Retail Centers</li>
                    </ul>
                    </div>
                    <h4 className="small-title-sa">Expert Commercial Garage Door Repair</h4>
                    <p className="paragraph-text-2">Our highly trained technicians can repair any type of garage door with expert precision. Our company has been providing overhead garage door repair services in {data.city}, Ohio for over 40 years! Contact us now for garage door repair in {data.city}, OH!</p>
                    <div className="two-li-list">
                        <ul className="ul-1">
                            <li>Rolling Steel Doors</li>
                            <li>Sectional Doors</li>
                            <li>Entry Doors/ Man Doors</li>
                            <li>High-speed Doors</li>
                            <li>Full-view aluminum doors</li>
                            <li>Hallow Metal Doors</li>
                            <li>Fire Doors</li>
                            <li>Security Doors</li>
                            <li>Wind-load rated doors</li>
                            <li>Counter Doors {'&'} Gates</li>
                        </ul>
                        <ul className="ul-1">
                            <li>Hangar Doors</li>
                            <li>Metal Roll-up Doors</li>
                            <li>Folding {'&'} Sliding Gates</li>
                            <li>Security Gates</li>
                            <li>Motorized/ Automatic Gates</li>
                            <li>Rolling Grilles</li>
                            <li>Barrier Arms</li>
                            <li>Rolling Truck Doors</li>
                            <li>Dock Accessories</li>
                            <li>Strip Curtain Doors</li>
                        </ul>
                    </div>
                    <h3 className="small-title-sa">Garage Door Spring Repair</h3>
                    <p className="paragraph-text-2">Garage door springs are one of the most delicate repairs. If not calibrated correctly, you can risk life threatening injuries or even more costly repairs. The repair technicians at Jess Overhead Garage Doors will be here to educate you about the best spring or conversion options for your garage door. If you need your garage door springs repaired in {data.city}, Ohio, then you have come to the right place!</p>
                    <h2 className="small-title-sa">Affordable Same-Day Garage Door Repair!</h2>
                    <p className="paragraph-text-2">Our team of certified experts can help you with any issue you may have with your gate or garage door. Not only do we repair faulty gates and garage doors, we also help our clients in {data.city}, Ohio choose the right garage door that best suits their requirements. Whether you’re looking to buy a new garage door for your new building or want to replace the existing door, our credible, certified technicians can help you.Our residential and commercial customers in {data.city}, Ohio have nothing but good things to say about our garage door repair services!</p>
                    <h3 className="small-title-sa">Call Us and We Will Fix Your Garage Door!</h3>
                    <p className="paragraph-text-2">Whether you’re ready to give your home a new look through a new garage door or you’ve a garage door emergency, we’re at your disposal. If you need superior and affordable garage door repair in {data.city}, Ohio, then all you need is to give us a call at (614) 778-0235! Our staff will make sure you get the best service possible! Our accredited, personable technicians adopt the latest approach to fix your garage doors with greatest efficiency. Whatever the reason behind the poor performance of your overhead garage door, we can fix it fast without causing damage to anything surrounding your garage door.</p>
                    <h2 className="small-title-sa">Satisfaction Guaranteed!</h2>
                    <p className="paragraph-text-2">From the initial estimate to final installation and cleanup, our team at Jess Overhead Garage Doors will always go the extra mile to get the job done right. We value clear communication and work closely with our customers to ensure they get a garage door installation that works for them and fits their needs. No matter the size of the job, our team will handle everything quickly and efficiently to ensure you have a safe, functional garage door that perfectly works!</p>
                    <div id='schedule-service'>
                    <div className="center-mobile-a">
                    <h2>Contact Us Now</h2>
                    <span >(614) 778-0235</span>
                    </div>
                    <ContactForm />
                    </div>
                    <h2 className="small-title-sa">Garage Door Repair Reviews</h2>
                    <p className="paragraph-text-2">Find out what our customers in {data.city}, Ohio are saying about Jess Overhead Garage Doors! Read our reviews and discover why we are the best overhead garage door repair company in {data.city}, Ohio! Contact us now and get same day service!</p>
                    <GoogleReviews />
                    <h3 className="small-title-sa" id="title-about-city">About {data.city}, Ohio</h3>
                    <p className="paragraph-text-2">{data.paragraphEight}</p>
                    <p className="paragraph-text-2" style={{textAlign: 'center'}}>Zip Code: {data.zip}</p>
                    <div>
                    <div >
                    <Maps locations={locations} />
                    </div>
                    </div>
                </div>
                <div className="service-right">
                    <div className="right-card-backdrop">
                    <ContactCard />
                    </div>
                </div>
            </div>
            <div id="move-down-2">
            <Footer />
            </div>
            </div>
        </React.Fragment>
    )
}

export default ServiceAreaComponent;