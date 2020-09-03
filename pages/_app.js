import '../styles/styles.scss';
import PropTypes from 'prop-types';

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
};

export default App;
