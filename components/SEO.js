import React from 'react';
import { NextSeo } from 'next-seo';

export default SEO = ({title, description}) => {
    return (
        <NextSeo
        title={title}
        description={description}
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://jessoverheadgaragedoors.com/',
          title: `${title}`,
          description: `${description}`,
        }}
      />
    )
}