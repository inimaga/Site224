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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.2/leaflet.css" integrity="sha512-UkezATkM8unVC0R/Z9Kmq4gorjNoFwLMAWR/1yZpINW08I79jEKx/c8NlLSvvimcu7SL8pgeOnynxfRpe+5QpA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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
