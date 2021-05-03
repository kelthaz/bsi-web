import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetDatosPersonales } from '../../../../../redux/actions/solicitud';
import Agradecimiento from '../../shared/agradecimiento/Agradecimiento';

const AgradecimientoDatosEmpresa = () => {
  const { datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  useEffect(
    () => () => {
      dispatch(resetDatosPersonales());
    },
    []
  );

  return (
    <Agradecimiento title={`¡Gracias, ${datosPersonales.primerNombre}!`} iconOk={false}>
      <p className="body2 text-xs-center text-md-left color-dark-gray sub">
        ¡Estamos analizando tu solicitud y en breve nos comunicaremos contigo por correo electrónico para que puedas
        regresar y conocer tu oferta!
      </p>
    </Agradecimiento>
  );
};
export default AgradecimientoDatosEmpresa;
