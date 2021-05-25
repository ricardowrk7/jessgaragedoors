import Head from 'next/head';
import ColorNav from '../components/navbars/ColorNav';
import Header from '../components/headers/HeaderMain';
import CardSection from '../components/Sections/Presentation/PresentationCards';
import ServiceCall from '../components/Sections/ServiceCall';
import BrandsCard from '../components/Sections/BrandsCard';
import ContactForm from '../components/Contact/ContactForm';
import GoogleReviews from '../components/Sections/ReviewsGoogle';
import ServiceInfo from '../components/Sections/ServiceInfo';
import Footer from '../components/Footers/index';


export default function Home() {

  const cardContent = 
        <>
            <div className="title-box-home">
            <h4 className="title-left">The Most Affordable {'&'} Reliable Garage Door Service in Columbus</h4>
            </div>
            <p>
                Garage doors have been a necessity on homes for nearly a century. They are vital to both home safety and security. Not only do they help enhance your property’s curb appeal and provide you with full protection against potential burglars, a functioning garage door can also making parking easier while sheilding your car from the elements. If your garage door isn’t fully operational and needs servicing in central ohio, we at Jess Garage Doors are always here to offer exceptional services to meet all your garage door needs. Want to hire us for garage door opener repair, garage door replacement or garage door springs repair, we do it all at affordable pricing and with quick turnaround time (sometimes even same day). Our accredited, personable technicians will use only the latest approach to fix your garage doors with the greatest efficiency. Whatever the reason behind the poor performance of your overhead garage door, we will fix it fast and without causing damage to anything surrounding your garage door.
            </p>
            <p>
                We pride ourselves on being the most reliable and cheapest garage door service provider in central Ohio. Unlike our competitors, we charge comparatively affordable rates to our clients, owning a home is expensive, and unexpected garage door repair is something that shouldn't have to break the bank. If you don't know whats wrong, Our technicians will carefully assess your garage door to reach the exact root cause of the problem whether it is an issue with the opener, the springs, or anything else it may be. All of our garage door staff is experienced and certified, and you can fully count on our service. The vast majority of our old customers are saying amazing and satisfying things about our services and feel no hesitation in suggesting our garage door service to anyone looking for a fully licensed garage door contractor.
            </p>
            <div className="truck-img-container">
            <img src="/img/jess-garage-truck.png" alt="" className="home-image" id="truck-pic"/>
            </div>
            <h4>
                Exceptional Service with Quick Turnaround and Affordable Pricing!
            </h4>
            <p>
            At Jess Garage Doors, we’re a very dedicated, highly talented team of installers and repairers who handles all our repair, replacement and installation jobs. We have been offering best in class garage door repair {'&'} replacement services for over 4 decades. So, we know how it’s done without creating any mess.
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
        </>

  return (
    <div >
      {/* className={styles.container} */}
      <Head>
        <title>Jess Garage Doors | Home</title>
        <meta name="Get garage doors in columbus ohio" content="Get a quote" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="Page-container">
        <ColorNav />
        <Header />
        <CardSection />
        <ServiceCall />
        <BrandsCard />
        {/* <ContentSection cardContent={cardContent}/> */}
        <ServiceInfo /> 
        <div className="service-section-two" id="secondary-section">
        <div id='schedule-service'>
        <div className="center-mobile-a">
        <h2>Contact Us Now</h2>
        <span >(614) 778-0235</span>
        </div>
        <ContactForm />
        </div>
        <div>
        <h2 className="small-title-sa">Garage Door Repair Reviews</h2>
        <p className="paragraph-text-2">Find out what our Commercial customers are saying about Jess Overhead Garage Doors! Read our reviews and discover why we are the best overhead garage door repair company in columbus, Ohio! Contact us now and get same day service!</p>
        <GoogleReviews />
        </div>
        </div>
        <div id="move-down-3">
        <Footer />
        </div>
      </div>
    </div>
  )
}
