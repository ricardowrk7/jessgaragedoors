import React from 'react';
import { NextSeo } from 'next-seo';

const SEO = ({title, description}) => {
    return (
        <NextSeo
        title={title}
        description={description}
        canonical="https://jessoverheadgaragedoors.com/"
        openGraph={{
          url: 'https://jessoverheadgaragedoors.com/',
          title: `${title}`,
          description: `${description}`,
        }}
      />
    )
}

export default SEO;