import PropTypes from 'prop-types';
import SvgLogoBanCoppelInverted from '../../../svgs/logos/SvgLogoBanCoppelInverted';
import SvgPrimeraTexturaLogin from '../../../svgs/texturas/SvgPrimeraTexturaLogin';
import SvgSegundaTexturaLogin from '../../../svgs/texturas/SvgSegundaTexturaLogin';
import SvgTerceraTexturaLogin from '../../../svgs/texturas/SvgTerceraTexturaLogin';

const LoginContainer = ({ pageComponent, servicesData }) => {
  const {
    component: Component,
    data: { option },
  } = pageComponent;

  return (
    <div className="contedor-fixed-login">
      <div className="contedor-login">
        <div className="container z-indez-1">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-sm-12 col-xs-12 d-flex flex-md-column flex-xs-row justify-content-center py-3">
              <SvgLogoBanCoppelInverted />
            </div>
            <div className="col-lg-6 col-md-7 col-sm-12 col-xs-12">
              <div className={option === 'iniciar-sesion' ? 'card-login-1' : 'card-login'}>
                <Component {...servicesData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative">
        <div className="svg-textura-left-bottom-0 ">
          <SvgPrimeraTexturaLogin />
        </div>
        <div className="svg-textura-left-bottom-0 ">
          <SvgSegundaTexturaLogin />
        </div>
        <div className="svg-textura-right-bottom-0 ">
          <SvgTerceraTexturaLogin />
        </div>
      </div>
    </div>
  );
};

LoginContainer.propTypes = {
  pageComponent: PropTypes.object.isRequired,
  servicesData: PropTypes.object.isRequired,
};

export default LoginContainer;
