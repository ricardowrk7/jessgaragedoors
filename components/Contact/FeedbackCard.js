import React from 'react';

const FeedbackCard = ({setFeedback}) => {
    
    return (
        <div className="feedback-container">
            <h2>How was your experience with Jess Garage Doors? Tell us below...</h2>
            <div style={{width: '100%', display: 'grid', justifyItems: 'center', gridTemplateColumns: '1fr 1fr', maxWidth: '400px'}}>
                <div className="grid-center" onClick={() => window.location = 'https://www.google.com/localservices/review/jessoverheadgaragedoors'}>
                    <i className="fa fa-thumbs-up" id="not-italic" style={{color: '#111', fontSize: '96px', padding: '20px'}} />
                    Satisfied
                </div>
                <div  className="grid-center" onClick={() => setFeedback(true)}>
                    <i className="fa fa-thumbs-down" id="not-italic" style={{color: '#111', fontSize: '96px', padding: '20px'}} />
                    Not Satisfied
                </div>
            </div>
        </div>
    )
}

export default FeedbackCard;