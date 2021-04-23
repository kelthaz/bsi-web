import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SIMULADOR_ROUTE } from '../../../../../constants/routes/publico/publico';
import { resetDatosPersonales } from '../../../../../redux/actions/solicitud';
import Agradecimiento from '../../shared/agradecimiento/Agradecimiento';

const AgradecimientoIncompletoDocumentacion = () => {
  const { datosPersonales } = useSelector((state) => state.solicitud);
  const { replace } = useRouter();
  const dispatch = useDispatch();

  useEffect(
    () => () => {
      dispatch(resetDatosPersonales());
    },
    []
  );

  return (
    <Agradecimiento
      title={`¡Gracias por tu tiempo ${datosPersonales.primerNombre}!`}
      button="Terminar"
      handleClick={() => replace(SIMULADOR_ROUTE)}
    >
      <p className="body2 text-xs-center text-md-left color-dark-gray sub">
        La información que nos has compartido hasta ahora nos ha ayudado a conocerte mejor y a determinar que tipo de
        crédito necesitas.
      </p>
      <p className="body2 text-xs-center text-md-left color-dark-gray sub">
        Un asesor BanCoppel se pondrá en contacto contigo en muy poco tiempo para ayudarte con los siguientes pasos y
        darte la atención que necesitas.
      </p>
    </Agradecimiento>
  );
};

export default AgradecimientoIncompletoDocumentacion;
