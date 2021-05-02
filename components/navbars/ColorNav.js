import React from 'react';

const ColorNav = () => {
    return (
        <React.Fragment>
            <div className="nav-container">
                <div className="inner-nav">
                <div className="nav-left">
                    <p className="roboto-text">Same Day Service</p>
                    <button className="sales-btn">
                        CALL NOW 614-778-0235
                    </button>
                </div>
                <div className="nav-right">
                    <ul className="sans-text">
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>SERVICES</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ColorNav;