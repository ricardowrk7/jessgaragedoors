import React, { useState } from 'react';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';

const Carousels = () => {
    const [focus, setFocus] = useState(false);

    const items = [
        {
            image: "/img/testimonial_1.png",
            description: `“I called multiple companies but decided to go with these guys first. They were out in 3 hours and looked over the old door that hasn't been working in quite a while. They recommended a door that we would love, along with a wonderful garage door opener. They came back the next morning and installed everything with ease. It is a beautiful sight, seals perfectly, works perfectly and silently. I can't say enough good things. The installers were wonderful and professional. You won't regret it!"​`,
            name: 'Lara W.',
        },
        {
            image: "/img/testimonial_2.png",
            description: `"These guys are great! I know almost nothing about garage doors, and moved into an old house with two old rickety ones. This garage door repair service really helped me out with them after a spring snapped and saw parts of the garage door scattered all around and falling apart. 

            Thought we'd have to buy a new one but after having one of these guys come over, the technician said that they could take care of it and make repairs on it that very day. The price was completely reasonable too! He did really great work and left everything clean and working perfectly. I'm glad that I didn't need to buy a new garage door with the kind of expert garage door repair services these guys offer. Thank you so much!"`,
            name: 'Logan B.',
        },
        {
            image: "/img/testimonial_3.png",
            description: `"I am extremely thankful for this garage door repair, they came out to me in a importing time because my car was stuck and my garage door tension springs were broken. I definitely was happy with the service, if anybody is in the area of this garage door repair I recommend coming here in ASAP"`,
            name: 'Tami H.',
        },
      ]
    return (
        <div
            onMouseEnter={() => setFocus('button')}
            onMouseLeave={() => setFocus(false)}
        >
        <Carousel 
            className="carousel-C"
            // NavButton={({onClick, className, style, next, prev}) => {
            //     // Other logic
        
            //     return (
            //         <>
            //         {focus === 'button' &&
            //             // <button onClick={onClick} className="Carousel-button" style={style}>
            //             //     {/* {next && <span className="fa fa-angle-right" id="fix-b-right"/>}
            //             //     {prev && <span className="fa fa-angle-left" id="fix-b-left" />} */}
            //             // </button>
            //         }
            //         </>
            //     )
            // }}
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </div>
    )
}

function Item({item})
{
    return (
        <div className="card-container-C">
        <div className="card-item-c">
        <div className="description-background">
          <h5 className="card-description">
          {item.description}
          </h5>
        </div>
        <div className="below-description">
        <div className="avatar-name">
        <div className="name-C-footer">
            <div tag="h4">{item.name}</div>
          </div>
        <div className=" card-avatar">
          <img
            alt="..."
            className=" img-icon"
            src={item.image}
          ></img>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Carousels;