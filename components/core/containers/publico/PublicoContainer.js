import Footer from '../../footer/Footer';
import Header from '../../header/Header';

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

export default PublicoContainer;
