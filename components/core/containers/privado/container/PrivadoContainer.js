import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import Sidebar from '../sidebar/Sidebar';

const Reloj = dynamic(() => import('../reloj/Reloj'), { ssr: false });

const PrivadoContainer = ({ pageComponent, servicesData }) => {
  const [Component] = pageComponent.component;

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
