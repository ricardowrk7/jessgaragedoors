import React from 'react';

const Header = () => {
    return (
        <React.Fragment>
            <div className="home-header">
                <div className="header-left">
                    <div className="logo-box">
                    <img src="/img/logo.png" id="logo-home"/>
                    <p className="sublogo">Residential {'&'} Comercial Garage Doors</p>
                    </div>
                    <p className="subtitle-text">WITH A SIMPLE PHONE CALL, YOU'LL HAVE A TECHNICIAN AT YOUR HOME TO FIX ANY ISSUE WITH YOUR GARAGE DOOR.</p>
                    <div className="mobile-fix-header">
                    <h5 className="below-subtitle">Same Day Quick {'&'} Local Services!</h5>
                    <div>
                        <p className="small-text">Contractor's License #HIC02855</p>
                        <p className="small-text">Fully Licensed, Bonded {'&'} Insured</p>
                    </div>
                    <h6 className="garage-text">24/7 Garage Door Services</h6>
                    </div>
                </div>
                <div className="header-right">
                    <ul id="header-bullets">
                        <li>YOUR DOOR DOES NOT OPEN/CLOSE?</li>
                        <li>OPENER ISN'T WORKING?</li>
                        <li>BROKEN SPRING?</li>
                        <li>CABLE SNAPPED?</li>
                        <li>DOOR OFF TRACK?</li>
                        <li>OPENER LIGHT IS BLINKING?</li>
                        <li>NEED A NEW GARAGE DOOR?</li>
                    </ul>
                    <h1 id="header-subtitle">WE DO IT ALL!!!</h1>
                </div>
            </div>
            <div className="below-header">
                <p className="below-header-text">100% Satisfaction Guarantee. Same Day Services</p>
            </div>
        </React.Fragment>
    )
}

export default Header;