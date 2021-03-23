import PropTypes from 'prop-types';
import Sidebar from '../../sidebar/Sidebar';
import Reloj from './reloj/Reloj';

const PrivadoContainer = ({ pageComponent, servicesData }) => {
  const { component: Component } = pageComponent;

  return (
    <div className="contedor-fixed-privado">
      <Reloj />
      <Sidebar />
      <div className="contedor-privado">
        <div className="contedor-interno-privado">
          <Component {...servicesData} />
        </div>
      </div>
    </div>
  );
};

PrivadoContainer.propTypes = {
  pageComponent: PropTypes.object.isRequired,
  servicesData: PropTypes.object.isRequired,
};

export default PrivadoContainer;
