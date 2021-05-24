import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ColorNav from '../components/navbars/ColorNav';
import Header from '../components/headers/HeaderMain';
import CardSection from '../components/Sections/Presentation/PresentationCards';
import ContentSection from '../components/Sections/Presentation/PresentationContent';
import Footer from '../components/Footers/index';


export default function About() {

    const cardContent = 
    <>
        <h2>Who We Are – Jess Garage Doors</h2>
        <div className="img-side-by-side">
            <img src="/img/brown-door.png" className="side-img"/>
            <p>Established in 2008, Jess Garage Doors is a fully licensed, Columbus based garage door provider. We have been offering elite garage door services to the residents of Columbus for over 4 decades. We pay special focus on completing all our garage door repair jobs in less than no time and at reasonable rates. We specialize in garage door repair, garage door installation, garage door replacement, gate repair and replacement, garage door opener repair, garage door opener replacement, garage door spring repair, and other garage door services.</p>
        </div>
        <div className="truckpic-container">
            {/* <img className="home-image" src="/img/garage-doors.jpg" /> */}
            <img className="home-image truck-pic" src="/img/jess-garage-truck.png" />
        </div>
        <h3>We’re Affordable and Offer Same-Day Service!</h3>
        <p>Our team of certified experts can help you with any issue you may have with your gate or garage door. Not only do we repair garage doors, we also help our clients choose the right garage door that best suits their requirements. Whether you’re looking to buy a new garage door for your new building or want to replace the existing door, our credible, certified technicians can help you. The vast majority of people who’ve hired our technicians are saying cool and fantastic things about them and our services. </p>
        <p>Whether you’re ready to give your home a new look through a new garage door or you’ve a garage door emergency, we’re at your disposal. All you need is to give us a phone call at (614) 778-0235 to let our experts read and handle your situation. Our accredited, personable technicians adopt the latest approach to fix your garage doors with greatest efficiency. Whatever the reason behind the poor performance of your overhead garage door, we can fix it fast without causing damage to anything surrounding your garage door.</p>
        <div>
            <img className="home-image" src="/img/garage-doors.jpg" />
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
        <div id="about-section">
        <ContentSection  cardContent={cardContent}/>
        </div>
        <Footer />
      </div>
    </div>
  )
}
