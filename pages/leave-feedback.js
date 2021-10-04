import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ColorNav from '../components/navbars/ColorNav';
import FeedbackCard from '../components/Contact/FeedbackCard';
import ContactForm from '../components/Contact/ContactForm';
import Header from '../components/headers/HeaderTemplate';
import Footer from '../components/Footers/index';


export default function Home() {
    const [feedback, setFeedback] = useState(false);

    const changeFeedback = (bool) => {
        console.log(bool)
        setFeedback(bool)
    }
    
  return (
    <div >
      {/* className={styles.container} */}
      <Head>
        <title>Jess Garage Doors | Contact</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <meta name="description" content="Get a quote for your new garage doors today. Fill out the contact form below" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="Page-container">
        <ColorNav />
        <Header city={'Leave Feedback'} hide={true}/>
        <h1 style={{visibility: 'hidden', height: '0px', position: 'absolute'}}>Leave Feedback</h1>
        <div className="contact-stack">
            <div className="add-top-padding">
            {!feedback && <FeedbackCard setFeedback={changeFeedback}/>}
            {feedback && <ContactForm type={true}/>}
            </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
