import PropTypes from 'prop-types';
import Head from 'next/head';
import Footer from '../components/core/footer/Footer';
import Header from '../components/core/header/Header';

import '../styles/styles.scss';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>BanCoppel | Pymes</title>
      <meta name="format-detection" content="telephone=no" />
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
