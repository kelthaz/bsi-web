import PropTypes from 'prop-types';
import Head from 'next/head';
import { Provider } from 'react-redux';
import ChatBot from '../components/core/chatbot/ChatBot';
import Footer from '../components/core/footer/Footer';
import Header from '../components/core/header/Header';
import { useStore } from '../redux/store';
import '../styles/styles.scss';
import '../styles/scss/chatbot.scss';
import Loader from '../components/shared/loader/Loader';
import useAxiosToken from '../hooks/useAxiosToken';

const App = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);
  useAxiosToken();

  return (
    <Provider store={store}>
      <Head>
        <title>BanCoppel | Pymes</title>
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://sdk.inbenta.io/chatbot/1.39.0/inbenta-chatbot-sdk.js" />
        <script src="/chatbot.js" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ChatBot />
      <Loader />
    </Provider>
  );
};

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
};

export default App;
