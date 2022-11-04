import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

function MyApp({ Component, pageProps }) {
    return (
      <>
        <Head>
            <title>
              Site224 - Locations directory for Guinea
            </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <Header />
        </header>
        <Component {...pageProps} />
        <Footer />
      </>
  );
}

export default MyApp
