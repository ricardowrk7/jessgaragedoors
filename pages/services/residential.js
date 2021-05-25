import React from 'react';
import ColorNav from '../../components/navbars/ColorNav';
import Header from '../../components/headers/HeaderServices';
import Head from 'next/head';
import ContactForm from '../../components/Contact/ContactForm';
import GoogleReviews from '../../components/Sections/ReviewsGoogle';
import Footer from '../../components/Footers/index'

const Residential = () => {
    return (
        <React.Fragment>
            <div >
                {/* className={styles.container} */}
                <Head>
                    <title>Jess Garage Doors - Residential | Home</title>
                    <meta name="Jess Garage Doors - Residential " content={`Residential Garage Door Repair - Same Day Service Guaranteed!`} />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className="Page-container-1">
                    <ColorNav />
                    <Header />
                    <div className="service-section-two">
                    <h2 className="small-title-sa">Our Garage Door Services</h2>                    
                    <p className="paragraph-text-2">
                        For many decades, we have been proudly serving Columbus, Ohio with the best in residential garage door repair services. Call us today to get a quote!
                    </p>
                    <h2 className="small-title-sa">Garage Door Installation</h2>
                    <p className="paragraph-text-2">
                        If you need a new garage door in Columbus, Ohio, then contact us today! Highly trusted as experts in the community, Jess Overhead Garage Doors has been providing high quality garage door installation in Columbus, Ohio for over 40 years! Contact us today and let’s talk about your new garage door!
                    </p>
                    <h2 className="small-title-sa">Garage Door Repair</h2>
                    <p className="paragraph-text-2">
                        We provide affordable same day garage door repair service in Columbus, Ohio. We specialize in both residential and commercial garage door repair. Our technicians are highly trained to provide service and repair of many different garage door brands and styles.
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
                    <h3 className="small-title-sa">Garage Door Spring Repair</h3>
                    <p className="paragraph-text-2">Garage door springs are one of the most delicate repairs. If not calibrated correctly, you can risk life threatening injuries or even more costly repairs. The repair technicians at Jess Overhead Garage Doors will be here to educate you about the best spring or conversion options for your garage door. If you need your garage door springs repaired in columbus, Ohio, then you have come to the right place!</p>
                    <h2 className="small-title-sa">Affordable Same-Day Garage Door Repair!</h2>
                    <p className="paragraph-text-2">Our team of certified experts can help you with any issue you may have with your gate or garage door. Not only do we repair faulty gates and garage doors, we also help our commercial clients in columbus, Ohio choose the right garage door that best suits their requirements. Whether you’re looking to buy a new garage door for your new building or want to replace the existing door, our credible, certified technicians can help you.Our residential and commercial customers in columbus, Ohio have nothing but good things to say about our garage door repair services!</p>
                    <h3 className="small-title-sa">Call Us and We Will Fix Your Garage Door!</h3>
                    <p className="paragraph-text-2">Whether you’re ready to give your home a new look through a new garage door or you’ve a garage door emergency, we’re at your disposal. If you need superior and affordable commercial garage door repair, then all you need is to give us a call at (614) 778-0235! Our staff will make sure you get the best service possible! Our accredited, personable technicians adopt the latest approach to fix your garage doors with greatest efficiency. Whatever the reason behind the poor performance of your overhead garage door, we can fix it fast without causing damage to anything surrounding your garage door.</p>
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
                    <p className="paragraph-text-2">Find out what our Commercial customers are saying about Jess Overhead Garage Doors! Read our reviews and discover why we are the best overhead garage door repair company in columbus, Ohio! Contact us now and get same day service!</p>
                    <GoogleReviews />

                    </div>
                    <div id="move-down-2">
                    <Footer />
                    </div>
                </div>
                </div>
        </React.Fragment>
    )
}

export default Residential;