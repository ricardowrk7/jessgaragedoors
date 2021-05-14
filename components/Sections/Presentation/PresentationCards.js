import React, { useState } from 'react';
import Cards from './Cards';



const CardContainer = () => {


    const data = [
        {
            image: 'broken-door-2.png',
            title: 'Garage Repairs',
            content: 'Our technicians are able to handle any repair for your commercial or residential garage door',
            hover: 'Garage door not opening, or opening crooked? See what we can do today.',
        },
        {
            image: 'spring.jpg',
            title: 'Spring Repair',
            content: 'Bad Springs can cause problems to your garage door if not properly serviced. Luckily we are experts!',
            hover: 'Our technichians will diagnose and repair any spring or remote issue you might have.',
        },
        {
            image: 'New-garage-door.png',
            title: 'Garage Installation',
            content: 'Whether you have an older home or a new home, we can help in installing a new door for you!',
            hover: 'Need a new look for your home, contact us today and find out how we can be of service',
        },
        {
            image: 'senior-discount.png',
            title: 'Senior Citizen Discount',
            content: 'Call our specialist today to hear about our senior citizen discounts that are available to save more!',
            hover: 'We respect our elders, Ask about our senior citizens discount!',
        },
    ]

    return (
        <React.Fragment>
            {/* <Parallax blur={0} bgImage="/img/garage-large-zoom.png" bgImageAlt="the cat" strength={-600}> */}
            <div className="card-outer-container">
                <div className="card-container">
                    {data.map((item, index) => {
                        return (
                            <div key={index} >
                            <Cards data={item}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* </Parallax> */}
        </React.Fragment>
    )
}

export default CardContainer;