import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Link from 'next/link';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import { declararTerminos } from '../../../../../../constants/errors';
import SvgCargaDocumento from '../../../../../svgs/SvgCargaDocumento';
import SvgEmpresa from '../../../../../svgs/SvgEmpresa';
import SvgBuro from '../../../../../svgs/SvgBuro';
import CheckTextBox from '../../../../../shared/check-text-box/CheckTextBox';

const Bienvenido = () => {
  const { pfae } = useSelector((state) => state.obligado);
  const { datosPersonales } = useSelector((state) => state.solicitud);
  const router = useRouter();
  const dispatch = useDispatch();

  const { initialValues, validationSchema } = {
    initialValues: {
      aceptar: pfae.aceptar,
    },
    validationSchema: Yup.object({
      aceptar: Yup.boolean().oneOf([true], declararTerminos),
    }),
  };

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'preguntas', step: '1' },
          pfae: { ...pfae, ...values },
        })
      );
      router.push('/obligado-solidario/pfae/[tab]/[step]', '/obligado-solidario/pfae/preguntas/1');
    },
  });
  return (
    <div className="contedor-fixed">
      <div className="contedor-solicitud">
        <div className="container px-xs-0 ">
          <h2 className="color-blue-storm">¡Hola, José!</h2>
          <p className="body2 color-gray-dark">
            Alejandra Aguilar Ruíz te ha designado como su Obligado Solidario como parte del proceso de solicitud de un
            crédito digital Pymes BanCoppel.
          </p>
          <p className="body2 color-gray-dark">
            Este proceso es para conocerte mejor y se divide en los siguientes pasos:
          </p>

          <div className="row no-gutters">
            <div className="col-md-3 col-xs-12">
              <div className="card-simple-transparent-img py-xs-0 py-md-3">
                <SvgEmpresa className="container-svg-always-small-card" />
                <p className="py-md-1 py-xs-0">Responder unas preguntas</p>
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="card-simple-transparent-img py-xs-0 py-md-3">
                <SvgCargaDocumento className="container-svg-always-small-card" />
                <p className="py-md-1 py-xs-0">Carga de documentos</p>
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="card-simple-transparent-img py-xs-3 py-md-3">
                <div className="container-svg-card">
                  <SvgBuro className="container-svg-always-small-card" />
                </div>
                <p className="py-md-1 py-xs-0">Autorización de consulta de buró de crédito </p>
              </div>
            </div>
          </div>
          <div className="row flex-column-start-config">
            <p className="body2 mt-xs-3 mt-md-2 color-gray-dark">Qué documentos deberás tener a la mano:</p>
            <div className="card-simple-blue-light list-onboarding">
              <ul>
                <li>
                  Identificación oficial <span className="color-gray"> (vigente) </span>
                </li>
                <li className="position-relative">
                  Comprobante de domicilio
                  <span className="color-gray"> (No mayor a tres meses) </span>
                </li>
                <li className="position-relative">
                  Acta de matrimonio <span className="color-gray">(Si estás casado)</span>
                </li>
                <li className="position-relative">
                  INE de tu pareja<span className="color-gray">(Si estás casado)</span>
                </li>
              </ul>
            </div>
            <p className="body2 mt-xs-3 mt-md-2 mb-md-4 color-gray-dark">
              Te tomará aproximadamente 10 minutos, te sugerimos no salir antes de concluirlo.
            </p>
            <div className="card-simple-blue-light list-onboarding">
              <CheckTextBox isGrayColor notBackground={false} name="aceptar" formulario={formulario}>
                <p className="body3 ml-1 ">
                  {/* Acepto: (1) los{' '}
                  <a className={`${styles.terminos}`} target="_blank" rel="noreferrer">
                    Términos y Condiciones
                  </a>
                  , (2) el{' '}
                  <Link href="/aviso-privacidad">
                    <a className={`${styles.terminos}`} target="_blank" rel="noreferrer">
                      Aviso de Privacidad
                    </a>
                  </Link> */}
                  {/* , y que (3) los productos y/o servicios que ofrece BanCoppel serán promocionados, aceptados y/o
                  modificados a través de medios electrónicos, telefónicos, digitales y/o cualquier otra tecnología. */}
                  Yo <strong>{`${datosPersonales.primerNombre} ${datosPersonales.segundoNombre}`}</strong> declaro bajo
                  protesta de decir vedad y conozco las penas y multas en que incurren los que con el ánimo de obtener
                  un financiamiento proporcionen información y/o documentación falsa de conformidad con lo establecido
                  en el artículo 112 de la Ley de Instituciones de Crédito y en los artículos 339 y 342 del Código Penal
                  para el Distrito Federal y demás correlativos del Código Penal Federal, en la parte que corresponda.
                </p>
              </CheckTextBox>
            </div>
          </div>
          <div className="flex-column-start-config">
            <Link href="/obligado-solidario/pfae/[tab]/[step]" as="/obligado-solidario/pfae/preguntas/1">
              <button
                disabled={!(formulario.dirty && formulario.isValid)}
                type="submit"
                className="btn-medium flex-align-self-center my-3"
              >
                ¡Comencemos!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bienvenido;
