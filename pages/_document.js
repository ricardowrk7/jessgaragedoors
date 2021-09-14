import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Garage Doors, Jess Garage Doors, Garage Doors Near Me, Commercial Garage Doors, Residential Garage Doors, Springs, Garage Door Repair" />
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
                  {/* <!-- link manifest.json --> */}
                  <link rel="manifest" href="/manifest.json" />
          {/* <!-- this sets the color of url bar  --> */}
          <meta name="theme-color" content="#90cdf4" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <link rel="apple-touch-icon" href="/logo-96x96.png" />
          {/* <!-- this sets the color of url bar in Apple smatphones --> */}
          <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              <!-- Global site tag (gtag.js) - Google Analytics -->
              <script async src="https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', '${process.env.GA_TRACKING_ID}');
              </script> 
          `,
            }}
          />
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}