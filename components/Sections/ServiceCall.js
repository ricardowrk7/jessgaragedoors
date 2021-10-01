import React from 'react';

const ServiceCall = () => {
    return (
        <div className="order-container">
            <h2 className="garage-door-title">FOR IMMEDIATE GARAGE DOOR SERVICE CALL NOW!</h2>
            <div className="button-save-container">
                <img src="/img/twentyfour.png" alt="24hours" title="24 hour service" className="garage-24" />
                <a href="tel:614-778-0235" ><div href="tel:614-778-0235" className="button-telephone">(614) 778-0235</div></a>
            </div>
            <p className="bottom-text-call">Be Sure to take advantage of our Valuable "Internet Only" specials. We Service and repair all brands of garage door openers.</p>
            <img src="/img/coupon.png" alt="coupon-garage" title="coupon" className="coupon-garage"/>
        </div>
    )
}

export default ServiceCall;