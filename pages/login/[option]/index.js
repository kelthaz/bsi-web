import React from 'react';
import PropTypes from 'prop-types';
import loginRoutes from '../../../components/features/login/login.routes';
import SvgLogoBanCoppelInverted from '../../../components/svgs/logos/SvgLogoBanCoppelInverted';
import SvgPrimeraTexturaLogin from '../../../components/svgs/texturas/SvgPrimeraTexturaLogin';
import SvgSegundaTexturaLogin from '../../../components/svgs/texturas/SvgSegundaTexturaLogin';
import SvgTerceraTexturaLogin from '../../../components/svgs/texturas/SvgTerceraTexturaLogin';

const Option = ({ index, data }) => {
  const { component: Component, path } = loginRoutes[index];

  return (
    <div className="contedor-fixed-login">
      <div className="contedor-login">
        <div className="container z-indez-1">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-sm-12 col-xs-12 d-flex flex-md-column flex-xs-row justify-content-center py-3">
              <SvgLogoBanCoppelInverted />
            </div>
            <div className="col-lg-6 col-md-7 col-sm-12 col-xs-12">
              <div className={path.includes('iniciar-sesion') ? 'card-login-1' : 'card-login'}>
                <Component data={data} />
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

export async function getServerSideProps(context) {
  const data = {};
  const { option } = context.params;
  const index = loginRoutes.findIndex((route) => route.option === option);
  const { services } = loginRoutes[index];
  const respData = await Promise.all(services.map(({ service }) => service())).then((respArr) =>
    respArr.map((resp) => resp.data)
  );
  services.forEach(({ name }, indexService) => {
    data[name] = respData[indexService];
  });
  return {
    props: { index, data },
  };
}

Option.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
};

export default Option;
