import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetDatosPersonales } from '../../../../../redux/actions/solicitud';
import Agradecimiento from '../../shared/agradecimiento/Agradecimiento';

const AgradecimientoDatosPersonales = () => {
  const { datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  useEffect(
    () => () => {
      dispatch(resetDatosPersonales());
    },
    []
  );

  return (
    <Agradecimiento
      title={
        datosPersonales.enListaNegra
          ? `¡Gracias por tu tiempo ${datosPersonales.primerNombre}!`
          : `¡Gracias, ${datosPersonales.primerNombre}!`
      }
    >
      <p className="body2 text-xs-center text-md-left color-dark-gray sub">
        {datosPersonales.enListaNegra
          ? 'Luego de revisar muy detalladamente los datos que subiste a nuestra plataforma, hemos llegado a la conclusión de que en este momento, no podemos otorgarte el crédito que solicitaste.'
          : 'Por favor revisa tu correo electrónico, te hemos enviado un enlace para verificar y activar tu cuenta.'}
      </p>
    </Agradecimiento>
  );
};
export default AgradecimientoDatosPersonales;
