import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ColorNav from '../components/navbars/ColorNav';
import Header from '../components/headers/HeaderMain';
import ContactCard from '../components/Contact/ContactCard';
import ContactForm from '../components/Contact/ContactForm';
import Maps from '../components/Maps';
import Footer from '../components/Footers/index';


export default function Home() {
  
    const locations = [
        {
            id: 1,
            name: "Columbus",
            latitude: "39.961178",
            longitude: "-82.998795",
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
        },
        {
            id: 2,
            name: "Pataskala",
            latitude: "39.994621",
            longitude: "-82.675247",
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
        },
        {
            id: 3,
            name: "Reynoldsburg",
            latitude: "39.954632",
            longitude: "-82.801697",
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
        },
        {
            id: 4,
            name: "Blacklick",
            latitude: "39.905281",
            longitude: "-82.865128",
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
        },
        {
            id: 5,
            name: "Newark",
            latitude: "40.0581205",
            longitude: "-82.4012643",
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
        },
        {
            id: 6,
            name: "Granville",
            latitude: "40.0681192",
            longitude: "-82.5196037",
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
        },
        {
            id: 7,
            name: "Gahanna",
            latitude: "40.0195625",
            longitude: "-82.8791363",
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
        },
        {
            id: 8,
            name: "Gahanna",
            latitude: "40.0811745",
            longitude: "-82.8087864",
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
        },
        {
            id: 8,
            name: "Bexly",
            latitude: "39.9692378",
            longitude: "-82.936864",
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
        },
    ]
    
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
        <div className="contact-trio">
            <ContactCard />
            <ContactForm /> 
            <Link href="https://www.yelp.com/biz/jesss-overhead-garage-doors-pataskala-3">
                <img className="yelp-img" src="/img/yelp.png" />
            </Link>
        </div>
        <div style={{width: '100vw', display: 'grid', justifyItems:'center'}}>
            <Maps locations={locations}/>
        </div>
        <div className="locations-cards">
            {locations.map((item, index) => {
                return (
                    <div key={index}>
                        {/* <LocationCards location={item}/> */}
                    </div>
                )
            })}
        </div>
        <Footer />
      </div>
    </div>
  )
}
