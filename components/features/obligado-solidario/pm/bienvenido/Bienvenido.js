import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { declararTerminos } from '../../../../../constants/errors';
import SvgCargaDocumento from '../../../../svgs/SvgCargaDocumento';
import SvgEmpresa from '../../../../svgs/SvgEmpresa';
import SvgBuro from '../../../../svgs/SvgBuro';
import CheckTextBox from '../../../../shared/check-text-box/CheckTextBox';
import { nextStepObligadoSolidario } from '../../../../../redux/actions/obligado';

const Bienvenido = () => {
  const { pm } = useSelector((state) => state.obligado);
  const router = useRouter();
  const dispatch = useDispatch();

  const { initialValues, validationSchema } = {
    initialValues: {
      aceptar: pm.aceptar,
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
        nextStepObligadoSolidario({
          currentStep: { tab: 'preguntas', step: '1' },
          pm: { ...pm, ...values },
        })
      );
      router.push('/obligado-solidario/[person]/[tab]/[step]', '/obligado-solidario/pm/preguntas/1');
    },
  });

  return (
    <div className="contedor-fixed">
      <div className="contedor-solicitud">
        <div className="container px-xs-0 ">
          <h2 className="color-blue-storm">¡Hola, José!</h2>
          <p className="body2 color-gray-dark">
            Alejandra Aguilar Ruíz te ha designado como su Obligado Solidario como parte del proceso de solicitud de un
            crédito PyME BanCoppel.
          </p>
          <p className="body2 color-gray-dark">
            Este proceso es para conocerte mejor y se divide en los siguientes pasos:
          </p>

          <div className="row no-gutters">
            <div className="col-md-3 col-xs-12">
              <div className="card-simple-transparent-img ">
                <div className="container-svg-always-small-card">
                  <SvgEmpresa />
                </div>
                <p>Responder unas preguntas</p>
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="card-simple-transparent-img ">
                <div className="container-svg-always-small-card">
                  <SvgCargaDocumento />
                </div>

                <p>Carga de documentos</p>
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="card-simple-transparent-img ">
                <div className="container-svg-always-small-card">
                  <SvgBuro />
                </div>
                <p>Autorización de consulta de buró de crédito </p>
              </div>
            </div>
          </div>
          <div className="row flex-column-start-config">
            <div className="col-12">
              <p className="body2 color-gray-dark">Qué documentos deberás tener a la mano:</p>
            </div>

            <div className="col-12">
              <div className="card-simple-blue-light list-onboarding">
                <ul>
                  <li>Acta Constitutiva</li>
                  <li className="position-relative">
                    Poderes Notariales
                    <span className="color-gray"> (si no vienen en tu acta constitutiva) </span>
                  </li>
                  <li className="position-relative">
                    Comprobante de domicilio comercial y fiscal
                    <span className="color-gray">(No mayores a tres meses)</span>
                  </li>
                  <li className="position-relative">
                    INE <span className="color-gray">(del Representante Legal)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12">
              <p className="body2 color-gray-dark">
                Te tomará aproximadamente 10 minutos, te sugerimos no salir antes de concluirlo.
              </p>
            </div>

            <div className="col-12">
              <div className="card-simple-blue-light list-onboarding">
                <CheckTextBox isGrayColor notBackground={false} name="aceptar" formulario={formulario}>
                  <p className="body3 ml-1 ">
                    Acepto: (1) los
                    <a className="color-blue-sky" target="_blank" rel="noreferrer">
                      Términos y Condiciones
                    </a>
                    , (2) el{' '}
                    <a className="color-blue-sky" target="_blank" rel="noreferrer">
                      Aviso de Privacidad
                    </a>
                    , y que (3) los productos y/o servicios que ofrece BanCoppel serán promocionados, aceptados y/o
                    modificados a través de medios electrónicos, telefónicos, digitales y/o cualquier otra tecnología.
                  </p>
                </CheckTextBox>
              </div>
            </div>
          </div>
          <div className="flex-column-start-config">
            <button
              disabled={!(formulario.dirty && formulario.isValid)}
              type="button"
              className="btn-medium flex-align-self-center my-3"
              onClick={formulario.handleSubmit}
            >
              ¡Comencemos!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bienvenido;
