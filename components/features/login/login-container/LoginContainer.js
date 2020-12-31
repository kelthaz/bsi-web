import React from 'react';
import SvgLogoBanCoppelInverted from '../../../svgs/logos/SvgLogoBanCoppelInverted';
import SvgPrimeraTexturaLogin from '../../../svgs/texturas/SvgPrimeraTexturaLogin';
import SvgSegundaTexturaLogin from '../../../svgs/texturas/SvgSegundaTexturaLogin';
import SvgTerceraTexturaLogin from '../../../svgs/texturas/SvgTerceraTexturaLogin';

const LoginContainer = ({ children }) => (
  <>
    <div className="contedor-fixed-login">
      <div className="contedor-login">
        <div className="container z-indez-1">
          <div className="row">
            <div className="col-6 d-flex flex-column justify-content-center">
              <SvgLogoBanCoppelInverted />
            </div>
            <div className="col-6">{children}</div>
          </div>
        </div>
      </div>
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
  </>
);

export default LoginContainer;
