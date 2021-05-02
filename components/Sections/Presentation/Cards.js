import React from 'react';

const Cards = ({data}) => {
    return (
        <React.Fragment>
            <div className="card-box">
                <div className="img-box">
                <img src={`/img/${data.image}`} className="card-img" />
                </div>
                <div className="bottom-of-box">
                    <h4 id="press-title">{data.title}</h4>
                    <p id="press-text">{data.content}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Cards;