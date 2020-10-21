import PropTypes from 'prop-types';
import Head from 'next/head';
import { Provider } from 'react-redux';
import Footer from '../components/core/footer/Footer';
import Header from '../components/core/header/Header';
import { useStore } from '../redux/store';
import '../styles/styles.scss';

const App = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Head>
        <title>BanCoppel | Pymes</title>
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
};

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
};

export default App;
