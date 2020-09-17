import PropTypes from 'prop-types';
import Head from 'next/head';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';

import '../styles/styles.scss';
const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>BanCoppel | Pymes</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
);

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
};

export default App;
