import React from 'react';
import HomeCard from './HomeCard';
import ContactCard from './ContactCard';

const Content = () => {
    return (
        <React.Fragment>
            <div className="Content-container">
                <div className="content-inner-container">
                    <div className="left-card-backdrop">
                    <HomeCard />
                    </div>
                    <div className="right-card-backdrop">
                    <ContactCard />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Content;