import React from 'react';
import Head from 'next/head';
import ServiceAreaComponent from '../../components/Sections/ServiceAreaComponent';

const Columbus = () => {
    const city = "Columbus"
    const data = {
        city: "Columbus",
        paragraphOne: `Get your garage door repaired in ${city}, Ohio! Jess Overhead Garage Doors is a trusted, family-owned garage door repair business that has provided superior repair services for ${city}, Ohio and the surrounding areas for many decades. Whether you want to upgrade your home and install an automatic garage door or just need to repair a broken spring or track, our team will provide you with the services you need for your home or business. `,
        paragraphTwo: <>We offer a wide range of high-quality residential and commercial garage doors in ${city}, Ohio that will fit your needs and your budget. Our team will provide fast, friendly service and always get the job done right the first time. We offer a fast response time our specialized garage door services include in both <a href='/residential'>Residential Garage Door Repair</a> and <a href='/commercial'>Commercial Garage Door Repair</a>.</>,
        paragraphThree: `As industry experts, we are equipped to provide service, repair and installation for all brands of garage doors. Our garage door technicians are experienced service providers for brands such as Linear, Liftmaster, Raynor, Amarr, Clopay and more. Jess Overhead Garage Doors will be there, when you need us! Contact us today, and we will be happy to visit you and offer an estimate for your ${city}, OH garage door repair. It’s that simple!`,
        paragraphFour: <><a href='schedule-service'>Contact Us Now</a> to schedule your garage door service in {city}, Ohio.</>,
        paragraphFive: `For many decades, we have been proudly serving ${city}, Ohio with the best in garage door repair services. Call us today to get a quote!`,
        paragraphSix: `If you need a new garage door in ${city}, Ohio, then contact us today! Highly trusted as experts in the community, Jess Overhead Garage Doors has been providing high quality garage door installation in ${city}, Ohio for over 40 years! Contact us today and let’s talk about your new garage door!`,
        paragraphSeven: `We provide affordable same day garage door repair service in ${city}, Ohio.  We specialize in both residential and commercial garage door repair. Our technicians are highly trained to provide service and repair of many different garage door brands and styles.`,
        zip: '43002, 43004, 43016, 43017, 43026, 43035, 43054, 43065, 43068, 43081, 43082, 43085, 43109, 43110, 43119, 43123, 43125, 43137, 43147, 43201, 43202, 43203, 43204, 43205, 43206, 43207, 43209, 43210, 43211, 43212, 43213, 43214, 43215, 43217, 43219, 43220, 43221, 43222, 43223, 43224, 43227, 43228, 43229, 43230, 43231, 43232, 43235, 43240',
        paragraphEight: `Jess Overhead Garage Doors has been providing Columbus, OH with the best garage door repair services for over 40 years! Columbus is Ohio’s state capital. The city’s Scioto Mile is a string of parks on both sides of the Scioto River, with a huge interactive fountain and trails. On the west bank, the COSI science center offers hands-on exhibits and a planetarium. Downtown, the Columbus Museum of Art includes American and European paintings and a sculpture garden. The German Village area has restored brick houses built by 1800s settlers. Call us now and get the best garage door repair services in Columbus, Ohio!`
       }

       const locations = [
        {
            id: 7,
            name: city,
            latitude: "39.9622601",
            longitude: "-83.0007065",
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
            <title>Jess Garage Doors - {city} | Services</title>
            <meta name="keywords" content={`${city} garage doors, garage doors near ${city}, commercial garage doors ${city}`} />
            <meta name="description" content={`Garage Door Repair in ${city}, Ohio - Same Day Service Guaranteed!`} />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <ServiceAreaComponent data={data} locations={locations}/>
        </React.Fragment>
    )
}

export default Columbus;