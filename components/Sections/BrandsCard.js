import React from 'react';
import Link from 'next/link';

const BrandsCard = () => {
    const Images = ["wayne_dalton.png", "stanley.png", "marantec.png", "amarr.png", "craftsman.png", "clopay.png"]

    return (
        <div className="brands-container">
            <div className="title-brands">
                <h1>Only The Best Industry Standard Partners</h1>
                <div className="short-blue"> </div>
                <p className="tiny-brand-text">We use only the top rated brands with a history of providing our customers the best product possible. </p>
            </div>
            <div className="brands-inner">
                <div className="brand-contain">
                    {Images.map((item, index) => {
                        return (
                            <img src={`/img/${item}`} key={index} className={index > 4 ? "right-map-img-2 mobile-brands" : "right-map-img-2"}/>
                        )
                    })}
            </div>
            </div>
            <p className="tiny-brand-text">Jess Garage Doors | <Link href="/service-area/columbus" >Columbus, OH</Link> | <Link href="/service-area/pataskala" >Pataskala, OH</Link> | <Link href="/service-area/new-albany">New Albany, OH</Link> | <Link href="/service-area/reynoldsburg">Reynoldsburg, OH</Link> | <Link href="/service-area/granville">Granville, OH</Link> | <Link href="/service-area/blacklick">Blacklick, OH</Link> | <Link href="/service-area/gahanna">Gahanna, OH</Link> | <Link href="/service-area/newark">Newark, OH</Link></p>
        </div>
    )
}

export default BrandsCard;