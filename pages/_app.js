
import React, { useEffect } from 'react';
import '../styles/globals.css';
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
    return <MyApp />
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
