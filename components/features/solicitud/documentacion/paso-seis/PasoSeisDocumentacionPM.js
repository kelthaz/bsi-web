import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import RadioButton from '../../../../shared/radio-button/RadioButton';
import useOnChangePage from '../../../../../hooks/useOnChangePage';
import { PASO_SIETE_DOCUMENTACION_ROUTE } from '../../../../../constants/routes/solicitud/documentacion';
import { campoRequerido } from '../../../../../constants/errors';

const PasoSeisDocumentacionPM = ({ validate }) => {
  const { currentStep, documentacion } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const columnaImporteEsperado = [
    'Menos de 50,000',
    'De 50,001 a 250,000',
    'De 250,001 a 500,000',
    'De 500,001 a 1,000, 000',
    'De 1,000,001 a 10,000,000',
    'De 10,000,000 a 50,000,000',
    'Más de 50,000,001',
  ];

  const formulario = useFormik({
    initialValues: {
      retirosNumeroTransacciones: documentacion.retirosNumeroTransacciones,
      depositosNumeroTransacciones: documentacion.depositosNumeroTransacciones,
      transaccionesNumeroTransacciones: documentacion.transaccionesNumeroTransacciones,
      retirosImporteEsperado: documentacion.retirosImporteEsperado,
      depositosImporteEsperado: documentacion.depositosImporteEsperado,
      transaccionesImporteEsperado: documentacion.transaccionesImporteEsperado,
    },
    validationSchema: Yup.object().shape({
      retirosNumeroTransacciones: Yup.string().required(campoRequerido),
      depositosNumeroTransacciones: Yup.string().required(campoRequerido),
      transaccionesNumeroTransacciones: Yup.string().required(campoRequerido),
      retirosImporteEsperado: Yup.string().required(campoRequerido),
      depositosImporteEsperado: Yup.string().required(campoRequerido),
      transaccionesImporteEsperado: Yup.string().required(campoRequerido),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate
            ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
            : { ...currentStep },
          documentacion: { ...documentacion, ...values },
        })
      );
    },
  });

  const [handleSubmit] = useOnChangePage(formulario, PASO_SIETE_DOCUMENTACION_ROUTE, validate);

  return (
    <>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud  w-75">
          <div className="container pl-md-0 pl-lg-5 px-xs-0">
            <form className="mt-xs-5 mt-md-0 mt-lg-0 pl-md-0 pl-lg-5 pl-xs-0" onSubmit={handleSubmit} noValidate>
              <p className="color-dark-gray sub mb-0">
                Dinos, ¿cómo serán los movimientos y la transaccionalidad mensual de la cuenta?
              </p>
              <span className="color-dark-gray sub">
                Selecciona una opción para el rango del no. de transacciones y una para el importe por tipo de
                operación:
              </span>
              <div className="row pl-xs-3 pt-4 pl-md-2">
                <p className="col-md-3 col-xs-7 pl-xs-0  pl-md-2 pr-0 color-gray-light sub">Número de transacciones</p>
                <div className="col-md-9 col-xs-4 mt-md-2 mt-xs-2 line">&nbsp;</div>
              </div>
              <div className="row ">
                <div className="pt-2 col-md-3 col-lg-2 col-xs-4">
                  <p className="color-gray sub">Operaciones</p>
                </div>

                <div className="pt-2 col-md-3 col-lg-2 col-xs-4">
                  <p className="color-gray sub">De 0 a 50</p>
                </div>
                <div className="pt-2 col-md-3 col-lg-2 col-xs-4">
                  <p className="color-gray sub">Más de 50</p>
                </div>
              </div>
              <div className="row ">
                <div className="pt-2 col-lg-2 col-md-4 col-xs-5 pr-xs-0">
                  <p className="color-gray">Retiros</p>
                </div>

                <div className="pt-2 col-md-2 pl-xs-0 pl-md-0 pl-lg-4 col-xs-4 ml-xs-1 ml-md-0 ml-lg-3">
                  <RadioButton
                    name="retirosNumeroTransacciones"
                    label="De 0 a 50"
                    {...formulario.getFieldProps('retirosNumeroTransacciones')}
                  />
                </div>
                <div className="pt-2 col-md-3 col-lg-7 pl-md-4 pl-xs-0 col-xs-1">
                  <RadioButton
                    name="retirosNumeroTransacciones"
                    label="Más de 50"
                    {...formulario.getFieldProps('retirosNumeroTransacciones')}
                  />
                </div>

                <div className="pt-2 col-md-4 col-lg-2 col-xs-4 pr-md-0">
                  <p className="color-gray">Depósitos</p>
                </div>

                <div className="pt-2 col-md-2 col-xs-4 ml-xs-3 ml-md-0 pl-md-0 pl-lg-4 ml-lg-3">
                  <RadioButton
                    name="depositosNumeroTransacciones"
                    label="De 0 a 50"
                    {...formulario.getFieldProps('depositosNumeroTransacciones')}
                  />
                </div>
                <div className="pt-2 col-md-5 col-lg-7 col-xs-1 pl-md-4">
                  <RadioButton
                    name="depositosNumeroTransacciones"
                    label="Más de 50"
                    {...formulario.getFieldProps('depositosNumeroTransacciones')}
                  />
                </div>

                <div className="pt-2 col-md-4 col-lg-2 col-xs-4 pr-md-0">
                  <p className="color-gray">Transferencias</p>
                </div>
                <div className="pt-2 col-md-2 col-xs-4 ml-xs-3 ml-md-0 pl-md-0 pl-lg-4 ml-lg-3">
                  <RadioButton
                    name="transaccionesNumeroTransacciones"
                    label="De 0 a 50"
                    {...formulario.getFieldProps('transaccionesNumeroTransacciones')}
                  />
                </div>
                <div className="pt-2 col-md-2 col-xs-1 pl-md-4">
                  <RadioButton
                    name="transaccionesNumeroTransacciones"
                    label="Más de 50"
                    {...formulario.getFieldProps('transaccionesNumeroTransacciones')}
                  />
                </div>
              </div>
              <div className="row pl-xs-0  pl-md-2 pt-3">
                <p className="col-md-2 col-xs-6 pr-0 pr-lg-0 pl-lg-0 color-gray-light sub">Importe esperado</p>
                <div className="col-md-10 col-xs-6 mt-2 pl-md-2 line">&nbsp;</div>
              </div>
              <div className="row mr-3 table-documentacion">
                <table>
                  <thead>
                    <tr>
                      <th>Operaciones</th>
                      {columnaImporteEsperado.map((column) => (
                        <th>{column}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="ml-3 mt-3 color-gray ">Retiros</div>
                      </td>
                      {columnaImporteEsperado.map((column) => (
                        <td key={column}>
                          <div className="ml-5 mt-3 ">
                            <RadioButton
                              name="retirosImporteEsperado"
                              label={column}
                              {...formulario.getFieldProps('retirosImporteEsperado')}
                            />
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>
                        <div className="ml-3 mt-3 color-gray ">Depósitos</div>
                      </td>
                      {columnaImporteEsperado.map((column) => (
                        <td key={column}>
                          <div className="ml-5 mt-3 ">
                            <RadioButton
                              name="depositosImporteEsperado"
                              label={column}
                              {...formulario.getFieldProps('depositosImporteEsperado')}
                            />
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>
                        <div className="ml-3 mt-3 color-gray ">Trasnferencias</div>
                      </td>
                      {columnaImporteEsperado.map((column) => (
                        <td key={column}>
                          <div className="ml-5 mt-3 ">
                            <RadioButton
                              name="transaccionesImporteEsperado"
                              label={column}
                              {...formulario.getFieldProps('transaccionesImporteEsperado')}
                            />
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex-column-center-config">
                <button
                  type="submit"
                  className="cicle-button-blue my-3"
                  aria-label="Avanzar"
                  disabled={validate && !(formulario.isValid && formulario.dirty)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

PasoSeisDocumentacionPM.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoSeisDocumentacionPM;
