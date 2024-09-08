import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => (
  <Html>
    <Head>
      
      <meta name="description" content="Default site description" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
      {/* Add other meta tags or links here */}
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;