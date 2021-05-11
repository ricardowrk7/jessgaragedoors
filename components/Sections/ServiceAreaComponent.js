import React from 'react';
import Nav from '../navbars/ColorNav';
import Footer from '../Footers/index';
import Header from '../headers/HeaderTemplate';
import ContactCard from './Presentation/ContactCard';

const ServiceAreaComponent = ({data}) => {
    const images = ["service-columbus-1.jpg", "service-columbus-2.jpg", "service-columbus-3.jpg"]
    return (
        <React.Fragment>
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
                    <p className="paragraph-text-2">
                        {data.paragraphOne}
                    </p>
                    <div className="service-title-2">
                    <h1>{data.city} Garage Door Repair</h1>
                    </div>
                    <p className="paragraph-text-2">
                        {data.paragraphTwo}
                    </p>
                    <div className="service-title-2">
                    <h3>{data.city} Garage Door Company</h3>
                    </div>
                    <p className="paragraph-text-2">
                        {data.paragraphThree}
                    </p>
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
        </React.Fragment>
    )
}

export default ServiceAreaComponent;