import PropTypes from 'prop-types';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const PublicoContainer = ({ pageComponent, servicesData }) => {
  const { component: Component } = pageComponent;

  return (
    <>
      <Header />
      <Component {...servicesData} />
      <Footer />
    </>
  );
};

PublicoContainer.propTypes = {
  pageComponent: PropTypes.object.isRequired,
  servicesData: PropTypes.object.isRequired,
};

export default PublicoContainer;
