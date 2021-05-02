import React from 'react';
import Cards from './Cards';

const CardContainer = () => {

    const data = [
        {
            image: 'broken-door-2.png',
            title: 'Garage Repairs',
            content: 'Our technicians are able to handle any repair for your commercial or residential garage door',
        },
        {
            image: 'spring.jpg',
            title: 'Spring Repair',
            content: 'Bad Springs can cause problems to your garage door if not properly serviced. Luckily we are experts!',
        },
        {
            image: 'New-garage-door.png',
            title: 'Garage Installation',
            content: 'Whether you have an older home or a new home, we can help in installing a new door for you!',
        },
        {
            image: 'senior-discount.png',
            title: 'Senior Citizen Discount',
            content: 'Call our specialist today to hear about our senior citizen discounts that are available to save more!',
        },
    ]

    return (
        <React.Fragment>
            <div className="card-outer-container">
            <div className="card-container">
                {data.map((item, index) => {
                    return (
                        <div key={index}>
                        <Cards data={item}/>
                        </div>
                    )
                })}
            </div>
            </div>
        </React.Fragment>
    )
}

export default CardContainer;