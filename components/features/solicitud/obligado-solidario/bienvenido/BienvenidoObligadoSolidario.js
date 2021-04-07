import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import { declararTerminos } from '../../../../../constants/errors';
import SvgCargaDocumento from '../../../../svgs/SvgCargaDocumento';
import SvgEmpresa from '../../../../svgs/SvgEmpresa';
import SvgBuro from '../../../../svgs/SvgBuro';
import CheckTextBox from '../../../../shared/check-text-box/CheckTextBox';
import { PASO_UNO_OBLIGADO_SOLIDARIO_ROUTE } from '../../../../../constants/routes/solicitud/obligado';
import { MORAL } from '../../../../../constants/persona';
import useOnChangePage from '../../../../../hooks/useOnChangePage';

const BienvenidoObligadoSolidario = ({ validate }) => {
  const { currentStep, datosPersonales, obligadoSolidario } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const formulario = useFormik({
    initialValues: {
      aceptar: obligadoSolidario.aceptar,
    },
    validationSchema: Yup.object({
      aceptar: Yup.boolean().oneOf([true], declararTerminos),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate ? { ...currentStep, paso: currentStep.paso + 1 } : { ...currentStep },
          obligadoSolidario: { ...obligadoSolidario, ...values },
        })
      );
    },
  });

  const [handleSubmit] = useOnChangePage(formulario, PASO_UNO_OBLIGADO_SOLIDARIO_ROUTE, validate);

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
              {datosPersonales.tipoPersona === MORAL ? (
                <ul>
                  <li>
                    Identificación oficial <span className="color-gray"> (vigente) </span>
                  </li>
                  <li className="position-relative">
                    Comprobante de domicilio&nbsp;
                    <span className="color-gray">(No mayor a tres meses) </span>
                  </li>
                  <li className="position-relative">
                    Acta de matrimonio&nbsp;
                    <span className="color-gray">(Si estás casado)</span>
                  </li>
                  <li className="position-relative">
                    INE de tu pareja&nbsp;
                    <span className="color-gray">(Si estás casado)</span>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>Acta Constitutiva</li>
                  <li className="position-relative">
                    Poderes Notariales&nbsp;
                    <span className="color-gray">(si no vienen en tu acta constitutiva) </span>
                  </li>
                  <li className="position-relative">
                    Comprobante de domicilio comercial y fiscal&nbsp;
                    <span className="color-gray">(No mayores a tres meses)</span>
                  </li>
                  <li className="position-relative">
                    INE&nbsp;
                    <span className="color-gray">(del Representante Legal)</span>
                  </li>
                </ul>
              )}
            </div>
            <p className="body2 mt-xs-3 mt-md-2 mb-md-4 color-gray-dark">
              Te tomará aproximadamente 10 minutos, te sugerimos no salir antes de concluirlo.
            </p>
            <div className="row">
              <CheckTextBox isGrayColor notBackground={false} name="aceptar" formulario={formulario}>
                <p className="body3 ml-1 ">
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
            <button
              disabled={validate && !(formulario.isValid && formulario.dirty)}
              type="submit"
              className="btn-medium flex-align-self-center my-3"
              onClick={handleSubmit}
            >
              ¡Comencemos!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

BienvenidoObligadoSolidario.propTypes = {
  validate: PropTypes.any.isRequired,
};

export default BienvenidoObligadoSolidario;
