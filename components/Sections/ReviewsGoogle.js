import React, {useState, useEffect} from 'react';

const Google = () => {
    const [shuffleReviews, setShuffleReviews] = useState([]);
    const reviews = [
        {
            name: "John Fridinger",
            stars: 5,
            content: `
            I called on a Sunday evening and was Surprised They Picked Up. They Came Out First Thing Monday Morning and Repaired All My Garage Door Issues. Super Friendly, Very Professional,  Arrived When They Said They Would and Wasted No Time Getting Right to Work. I am Very Satisfied in the Quality of Work and the Price I Was Quoted. I Will Always Call Jess Garage Doors Inc. and I Highly Recommend Their Services.
            Thank You!!!   Sincerely,  John F.
            `
        },
        {
            name: "Charlie Hearn",
            stars: 5,
            content: `
            Jess and Mike are the most friendly guys installing garage doors in the city. Very efficient and leave no mess behind.  Best in the business.
            `
        },
        {
            name: "Jessica Shook",
            stars: 5,
            content: `
            I can’t say enough about the quick friendly knowledgeable service I received.  Not only was the price much more affordable but I was given the rational and reasoning for the repairs/replacement.  Same day assessment and full replacement.  I will call Jess Garage Door for every overhead door need I have in the future! Thank you!
            `
        },
        {
            name: "Susan DiCocco",
            stars: 5,
            content: `
            We could not be happier with Jess Overhead Garage Doors. Jessie & Mike are wonderful - we're very pleased with their workmanship and customer service. Also their costs were very reasonable and less than we anticipated. Thank you and we look forward to seeing you for our 3rd door, the first two look amazing!
            `
        },
        {
            name: "Kevin W",
            stars: 5,
            content: `
            Highly recommend!  Super friendly and great quality work!  They came out same day too.  A friend referred me to Jess Garage Doors and they quoted me a great price.  This was a job for a broken spring on a Wayne Dalton style spring setup so it was a conversion to the normal spring on the outside of the bar instead of internal.  I initially had Precision Door out for a quote over the weekend (because they "don't charge extra for weekends") and had quote shock and that's why I was looking elsewhere.  Precision door was about 3x (this is why PD doesn't charge extra, they don't need to!) as much as Jess.  I could not be happier with Jess Garage Doors!
            `
        },
        {
            name: "Kendra Carruthers",
            stars: 5,
            content: `
            I called because my garage door wasn't closing. Jess and mike came right out and figured out the problem in no time. They were very professional about it. I would recommend them to anyone. Great job!!
            `
        },
        {
            name: "Jordan R",
            stars: 5,
            content: `
            Outstanding, same day service
            `
        },
        {
            name: "Joe Camp",
            stars: 5,
            content: `
            Great response time, excellent job, friendly service, looks great and was reasonably priced.  I was told by other companies that it couldn't be done.  Guess they haven't met Jess and his crew.
            `
        },
        {
            name: "Katrina Lear",
            stars: 5,
            content: `
            Great Company, friendly people. Quick, reliable and get the job done right. Thank you Jess & Andy!
            `
        },
        {
            name: "Melissa Devault",
            stars: 5,
            content: `
            Showed up the same day and the garage door was fixed in about an hour. Fast, friendly, and affordable.
            `
        },
        {
            name: "Perk",
            stars: 5,
            content: `
            I called about a broken garage door spring. Jess's  service man came to my place within a couple hours of my call and in another 2 hours had my garage door up and running. Very friendly and proficient to say the least..
            `
        },
        {
            name: "Ashley Schulte",
            stars: 5,
            content: `
            Jesse is awesome to work with!
            `
        },
        {
            name: "Jason Maynard",
            stars: 5,
            content: `
            Great customer service! My garage door was broken and wouldn't close, they came out in the snow and repaired the door so I could close the door and keep the cold air from getting into the house.
            `
        },
    ]

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

      useEffect(() => {
        setShuffleReviews(shuffle(reviews));
      }, [])


    return (
        <React.Fragment>
            <div className="google-reviews">
            {shuffleReviews.map((item, index) => {
                return (
                    <div key={index}>
                        {index < 4 &&

                        <div className="review-boxes">
                        <img src="/img/google-icon.png" alt="google" title="google reviews" className="google-box"/>
                        <p>
                            {item.content}
                        </p>
                        <p>{item.name}</p>
                        <div className=" card-stars">
                        <i aria-hidden={true} className=" fa fa-star mr-1" style={{color: '#fec42d', fontStyle: 'normal'}}></i>
                        <i aria-hidden={true} className=" fa fa-star mr-1" style={{color: '#fec42d', fontStyle: 'normal'}}></i>
                        <i aria-hidden={true} className=" fa fa-star mr-1" style={{color: '#fec42d', fontStyle: 'normal'}}></i>
                        <i aria-hidden={true} className=" fa fa-star mr-1" style={{color: '#fec42d', fontStyle: 'normal'}}></i>
                        <i aria-hidden={true} className=" fa fa-star" style={{color: '#fec42d', fontStyle: 'normal'}}></i>
                        </div>
                        </div>
                        }
                    </div>
                )
            })}
            </div>
        </React.Fragment>
    )
}

export default Google;