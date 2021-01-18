// TODO: Eliminar esta vista
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AprobacionContacto from '../aprobacion-contacto/AprobacionContacto';
import AprobacionCuentaPersona from '../aprobacion-cuenta-personal/AprobacionCuentaPersonal';
import RechazoCuentaPersona from '../rechazo-cuenta-personal/RechazoCuentaPersonal';
import RechazoSinCuentaPersona from '../rechazo-sin-cuenta-personal/RechazoSinCuentaPersonal';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';

const SelectView = () => {

  const dispatch = useDispatch();
  const [view, setView] = useState();

  return (
    <>
      { !view && <div className="contedor-fixed">
        <div className="contedor-solicitud">
          <div className="container p-0 text-center">
            <div className="row">
              <div className="col-12">
                <h2 className="color-blue-storm">Selector de casos de respuesta</h2>
                <h1 className="color-blue-storm">PROVISIONAL</h1>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-12">
                <ul style={{listStyle: 'none'}}>
                  <li className="link" onClick={() => { setView(<AprobacionContacto />); }}>Aprobacion contacto</li>
                  <li className="link" onClick={() => {
                    dispatch(
                      nextStepDatosPersonales({
                        currentStep: { tab: 'oferta', step: 'resultado' },
                        oferta: {
                          conCuenta: true
                        }
                      })
                    );
                    setView(<AprobacionCuentaPersona />);
                  }}>Aprobacion con cuenta personal</li>
                  <li className="link" onClick={() => {
                    dispatch(
                      nextStepDatosPersonales({
                        currentStep: { tab: 'oferta', step: 'resultado' },
                        oferta: {
                          conCuenta: false
                        }
                      })
                    );
                    setView(<AprobacionCuentaPersona />);
                  }}>Aprobacion sin cuenta personal</li>
                  <li className="link" onClick={() => { setView(<RechazoCuentaPersona />); } }>Rechazo con cuenta personal</li>
                  <li className="link" onClick={() => { setView(<RechazoSinCuentaPersona />); } }>Rechazo sin cuenta personal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>}
      { view }
    </>
  );
};

export default SelectView;
