import React from 'react';
import Icon from "@material-ui/core/Icon";

const ServiceInfo = () => {

    const data = [
        {
            title: "New Garage Door Installation",
            text: "We specialize in new garage door installation. whether you need one door, or several our technichians will provide you with fast service and a high quality experience. "
        },
        {
            title: "Garage Door Openers",
            text: "We offer affordable garage door openers and accessories. If you need a repair, our technicians are highly trained and often able to repair them same day."
        },
        {
            title: "Garage Door Springs",
            text: "Our skilled technichians can diagnose why your garage door is not working and repair it often on the same visit. Don't spend more than you have to on garage door repair."
        },
    ]

    const data2 = [
        {
            title: "Commercial & Industrial Door Installation",
            text: "We install commercial garage doors in columbus ohio. We have developed strong relationships with all the leading garage door manufacturers and we bring our combined knowlege onto each job."
        },
        {
            title: "Commercial Accessories",
            text: "We will tailor a solution of custom garage door openers and controllers to meet your business needs. Portable and durable openers are something we work with alot and can ensure that your employees will have 0 issues using them."
        },
        {
            title: "Loading Dock Installation",
            text: "Safety is our top priority and we know you are a busy company. We can complete loading dock installation with minimal downtime and can work safely and effectively around your processes."
        },
    ]

    return (
        <React.Fragment>
            <div className="Service-section">
                <div className="residential-section">
                    <img src="/img/house-garage.png" alt="Residential Garage" title="Residential Garage" className="service-pic"/>
                    <div className="service-right-section">
                        <h1 className="residential-title">Residential Garage Door Services</h1>
                        <p className="description-service-text">For over 4 decades - The Professionals at Jess Overhead Garage Doors have been providing Columbus and the surrounding comunity with best in class garage door repair and installation services.</p>
                        <p className="description-service-text">We offer a large selection of affordable and durable garage doors, openers and accessories. As a result, we are the best choice in central ohio for top quality garage doors and openers.</p>
                        <div className="products-btn-container">
                            <button className="products-btn">
                                Our Services <i className="fa fa-arrow-right  arrow-btn" id="not-italic" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="sub-res-section">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="mobile-paragraph-service">
                                <h2 className="item-title-service">{item.title}</h2>
                                <p className="paragraph-text">{item.text}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="residential-section">
                    <img src="/img/comercial-garage.png" alt="Residential Garage 2" title="Residential Garage 2" className="service-pic"/>
                    <div className="service-right-section">
                        <h1 className="residential-title">Commercial Garage Door Services</h1>
                        <p className="description-service-text">At Jess garage doors we pride ourselves on being able to provide our clients with garage door solutions that meet their need. We offer the largest variety of custom garage doors in central columbus in a wide tange of sizes and varieties.</p>
                        <p className="description-service-text">Ask our sales staff to help you find a solution to any of your specialized garage door needs. We Offer Insulated, high performance, fire-rated, loading dock doors and so much more.</p>
                        <div className="products-btn-container">
                            <button className="products-btn">
                                Our Services <i className="fa fa-arrow-right arrow-btn" id="not-italic" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="sub-res-section">
                    {data2.map((item, index) => {
                        return (
                            <div key={index} className="mobile-paragraph-service">
                                <h2 className="item-title-service">{item.title}</h2>
                                <p className="paragraph-text">{item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ServiceInfo;