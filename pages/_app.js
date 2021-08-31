
import React, { useEffect } from 'react';
import {Container} from 'next/app';
import { NextSeo } from 'next-seo';
import '../styles/globals.css';
import SEO, {Local} from '../config/seo.config';
///styles
import '../styles/App.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/service-worker.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
    return (
      <Container>
        <NextSeo {...SEO} />
        <Local />
        <MyApp />
      </Container>
    )
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
