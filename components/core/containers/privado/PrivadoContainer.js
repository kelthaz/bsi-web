import PropTypes from 'prop-types';
import Sidebar from '../../sidebar/Sidebar';

const PrivadoContainer = ({ pageComponent, servicesData }) => {
  const { component: Component } = pageComponent;

  return (
    <div className="contedor-fixed-privado">
      <Sidebar />
      <div className="contedor-privado">
        <Component {...servicesData} />
      </div>
    </div>
  );
};

PrivadoContainer.propTypes = {
  pageComponent: PropTypes.object.isRequired,
  servicesData: PropTypes.object.isRequired,
};

export default PrivadoContainer;
