import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { aceptarTerminos } from '../../../../../constants/errors';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import CheckTextBox from '../../../../shared/check-text-box/CheckTextBox';
import Tooltip from '../../../../shared/tooltip/Tooltip';
import SvgDocumentos from '../../../../svgs/SvgDocumentos';
import SvgOferta from '../../../../svgs/SvgOferta';
import SvgPersona from '../../../../svgs/SvgPersona';
import SvgPersonaMoral from '../../../../svgs/SvgPersonaMoral';

const CuentaActiva = () => {
  const { datosEmpresa, datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const formulario = useFormik({
    initialValues: {
      aceptoTerminosMultas: datosEmpresa.aceptoTerminosMultas,
    },
    validationSchema: Yup.object({
      aceptoTerminosMultas: Yup.boolean().oneOf([true], aceptarTerminos),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'datos-empresa', step: '1' },
          datosEmpresa: {
            ...datosEmpresa,
            ...values,
          },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/datos-empresa/1');
    },
  });

  return (
    <div className="contedor-fixed">
      <div className="contedor-solicitud">
        <div className="container">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <h2 className="color-blue-storm">¡Cuenta activada!</h2>
            <p className="body2 color-gray-dark">
              Gracias Alejandra, ahora vamos a comenzar el segundo bloque de datos de tu empresa para conocerla un poco
              mejor, ¿te parece?
            </p>

            <div className="row no-gutters">
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="card-simple-transparent-img disabled-card-svg">
                  <SvgPersona />
                  <p>Datos Personales</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="card-simple-transparent-img">
                  <SvgPersonaMoral />
                  <p>Datos de tu empresa</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div className="card-simple-transparent-img disabled-card-svg">
                  <SvgOferta />
                  <p>Oferta</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="card-simple-transparent-img disabled-card-svg">
                  <SvgDocumentos />
                  <p>Documentación</p>
                </div>
              </div>
            </div>
            <div className="row flex-column-start-config">
              <p className="body2 color-gray-dark">Deberás tener a la mano:</p>
              <div className="card-simple-blue-light list-onboarding">
                <ul>
                  <li>Tu CURP</li>
                  <li>
                    Tu clave CIEC y tu e.firma* <span className="color-gray">(.key y .cer) </span>
                    <Tooltip message="Esta información nos servirá únicamente para autorización y consulta de la actividad de tu negocio. No resguardaremos ninguna de estas contraseñas." />
                  </li>
                  <li>Cuenta bancaria BanCoppel</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <CheckTextBox name="aceptoTerminosMultas" formulario={formulario}>
                <p className="m-0">
                  Yo <strong>{`${datosPersonales.primerNombre} ${datosPersonales.segundoNombre}`}</strong> declaro bajo
                  protesta de decir vedad y conozco las penas y multas en que incurren los que con el ánimo de obtener
                  un financiamiento proporcionen información y/o documentación falsa de conformidad con lo establecido
                  en el artículo 112 de la Ley de Instituciones de Crédito y en los artículos 339 y 342 del Código Penal
                  para el Distrito Federal y demás correlativos del Código Penal Federal, en la parte que corresponda.
                </p>
              </CheckTextBox>
            </div>
            <div className="flex-column-start-config">
              <button
                type="submit"
                className="btn-medium flex-align-self-center my-3"
                disabled={!(formulario.isValid && formulario.dirty)}
              >
                ¡Comencemos!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CuentaActiva;
