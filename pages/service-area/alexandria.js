import React from 'react';
import ServiceAreaComponent from '../../components/Sections/ServiceAreaComponent';
import Head from 'next/head';

const Alexandria = () => {
    const city = "Alexandria"
    const data = {
        city: "Alexandria",
        paragraphOne: `Get your garage door repaired in ${city}, Ohio! Jess Overhead Garage Doors is a trusted, family-owned garage door repair business that has provided superior repair services for ${city}, Ohio and the surrounding areas for many decades. Whether you want to upgrade your home and install an automatic garage door or just need to repair a broken spring or track, our team will provide you with the services you need for your home or business. `,
        paragraphTwo: <>We offer a wide range of high-quality residential and commercial garage doors in ${city}, Ohio that will fit your needs and your budget. Our team will provide fast, friendly service and always get the job done right the first time. We offer a fast response time our specialized garage door services include in both <a href='/residential'>Residential Garage Door Repair</a> and <a href='/commercial'>Commercial Garage Door Repair</a>.</>,
        paragraphThree: `As industry experts, we are equipped to provide service, repair and installation for all brands of garage doors. Our garage door technicians are experienced service providers for brands such as Linear, Liftmaster, Raynor, Amarr, Clopay and more. Jess Overhead Garage Doors will be there, when you need us! Contact us today, and we will be happy to visit you and offer an estimate for your ${city}, OH garage door repair. It’s that simple!`,
        paragraphFour: <><a href='schedule-service'>Contact Us Now</a> to schedule your garage door service in {city}, Ohio.</>,
        paragraphFive: `For many decades, we have been proudly serving ${city}, Ohio with the best in garage door repair services. Call us today to get a quote!`,
        paragraphSix: `If you need a new garage door in ${city}, Ohio, then contact us today! Highly trusted as experts in the community, Jess Overhead Garage Doors has been providing high quality garage door installation in ${city}, Ohio for over 40 years! Contact us today and let’s talk about your new garage door!`,
        paragraphSeven: `We provide affordable same day garage door repair service in ${city}, Ohio.  We specialize in both residential and commercial garage door repair. Our technicians are highly trained to provide service and repair of many different garage door brands and styles.`,
        zip: '43004',
        paragraphEight: `Jess Overhead Garage Doors has been providing ${city}, OH with the best garage door repair services for over 40 years! ${city} is a small unincorporated community in southern Jefferson Township, Franklin County, Ohio, United States. ${city} is also included in the Columbus Metropolitan area. The community was established by William A. Smith in 1852. Call us now and get the best garage door repair services in ${city}, Ohio!`
       }

       const locations = [
        {
            id: 1,
            name: "Alexandria",
            latitude: "40.088871",
            longitude: "-82.612244",
            circle: {
              radius: 3000,
              options: {
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35,
              }
            }
        }
    ]
    return (
        <React.Fragment>
            <Head>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <title>Jess Garage Doors - {city} | Services</title>
            <meta name="description" content={`We provide affordable same day garage door repair service in ${city}, Ohio.`}></meta>
            </Head>
            <ServiceAreaComponent data={data} locations={locations}/>
        </React.Fragment>
    )
}

export default Alexandria;