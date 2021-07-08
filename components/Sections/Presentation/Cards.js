import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Cards = ({data}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const router = useRouter();

    const handleEnter = (e) => {
        e.preventDefault();
        setIsFlipped(true);
      }
    const handleLeave = (e, index) => {
        e.preventDefault();
        setIsFlipped(false);
      }

    return (
        <React.Fragment>
            <div className="card-box" onMouseEnter={handleEnter}>
                <div className="img-box">
                <img src={`/img/${data.image}`}  alt="" className="card-img" />
                </div>
                <div className="bottom-of-box">
                    <h4 id="press-title">{data.title}</h4>
                    <p id="press-text">{data.content}</p>
                </div>
                {isFlipped &&
                    <div className="card-cover" onMouseLeave={handleLeave}>
                        <p id="text-on-card-hover">{data.hover}</p>
                        <button className="learn-more-btn-2" onClick={() => router.push('/about')}>
                            Learn More
                        </button>
                    </div>
                }
            </div>
        </React.Fragment>
    )
}

export default Cards;