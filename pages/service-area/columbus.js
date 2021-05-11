import React from 'react';
import ServiceAreaComponent from '../../components/Sections/ServiceAreaComponent';

const Columbus = () => {
    const data = {
        city: "Columbus",
        paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis ultricies auctor. Quisque velit quam, sagittis ut eros pellentesque, feugiat luctus neque. Maecenas in consequat elit, nec porta lectus. Aliquam vel ullamcorper lorem. Aenean eget ultrices nibh. Praesent iaculis enim a congue gravida. Donec mi felis, pellentesque vel eros eu, ultricies bibendum nisi. Sed convallis eleifend metus, sit amet dapibus arcu dictum vitae. Aliquam aliquet, augue quis laoreet lobortis, risus neque placerat augue, ac bibendum massa lacus nec turpis. Phasellus at arcu lorem.",
        paragraphTwo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis ultricies auctor. Quisque velit quam, sagittis ut eros pellentesque, feugiat luctus neque. Maecenas in consequat elit, nec porta lectus. Aliquam vel ullamcorper lorem. Aenean eget ultrices nibh. Praesent iaculis enim a congue gravida. Donec mi felis, pellentesque vel eros eu, ultricies bibendum nisi. Sed convallis eleifend metus, sit amet dapibus arcu dictum vitae. Aliquam aliquet, augue quis laoreet lobortis, risus neque placerat augue, ac bibendum massa lacus nec turpis. Phasellus at arcu lorem.",
        paragraphThree: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis ultricies auctor. Quisque velit quam, sagittis ut eros pellentesque, feugiat luctus neque. Maecenas in consequat elit, nec porta lectus. Aliquam vel ullamcorper lorem. Aenean eget ultrices nibh. Praesent iaculis enim a congue gravida. Donec mi felis, pellentesque vel eros eu, ultricies bibendum nisi. Sed convallis eleifend metus, sit amet dapibus arcu dictum vitae. Aliquam aliquet, augue quis laoreet lobortis, risus neque placerat augue, ac bibendum massa lacus nec turpis. Phasellus at arcu lorem.",
    }
    return (
        <React.Fragment>
            <ServiceAreaComponent data={data}/>
        </React.Fragment>
    )
}

export default Columbus;