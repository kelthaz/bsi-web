import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import {
  campoRequerido,
  longitudMaxima,
  codigoPostalInvalido,
  seleccionOpcion,
} from '../../../../../../constants/errors';
import Domicilio from '../../../shared/domicilio/Domicilio';
import useOnChangePage from '../../../../../../hooks/useOnChangePage';
import { PASO_DOS_OBLIGADO_SOLIDARIO_ROUTE } from '../../../../../../constants/routes/solicitud/obligado';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';

const PasoUnoObligadoSolidarioPFAE = ({ validate }) => {
  const { currentStep, obligadoSolidario } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const formulario = useFormik({
    initialValues: {
      domicilioFiscal: { ...obligadoSolidario.domicilioFiscal },
    },
    validationSchema: Yup.object({
      domicilioFiscal: Yup.object().shape({
        calle: Yup.string().max(60, longitudMaxima).required(campoRequerido),
        numExterior: Yup.string().max(6, longitudMaxima).required(campoRequerido),
        numInterior: Yup.string().max(6, longitudMaxima),
        codigoPostal: Yup.string().min(5, codigoPostalInvalido).max(5, longitudMaxima).required(campoRequerido),
        colonia: Yup.object()
          .shape({
            value: Yup.string(),
            label: Yup.string(),
          })
          .nullable()
          .required(seleccionOpcion),
        municipioAlcaldia: Yup.string(),
        ciudad: Yup.string(),
        estado: Yup.string(),
      }),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate
            ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
            : { ...currentStep },
          obligadoSolidario: { ...obligadoSolidario, ...values },
        })
      );
    },
  });

  const [handleSubmit] = useOnChangePage(formulario, PASO_DOS_OBLIGADO_SOLIDARIO_ROUTE, validate);

  return (
    <>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud ">
          <div className="container p-0">
            <form onSubmit={handleSubmit} noValidate>
              <p className="color-dark-gray sub">
                Alejandra ya nos ha platicado un poco sobre ti, por lo que te pediremos información adicional para
                completar tu expediente y habremos terminado.
              </p>
              <p className="color-dark-gray sub">Para comenzar, por favor compártenos tu domicilio.</p>
              <Domicilio
                formulario={formulario}
                nameFieldCalle="domicilioFiscal.calle"
                nameFieldNumExterior="domicilioFiscal.numExterior"
                nameFieldNumInterior="domicilioFiscal.numInterior"
                nameFieldCodigoPostal="domicilioFiscal.codigoPostal"
                nameFieldColonia="domicilioFiscal.colonia"
                nameFieldMunicipioAlcaldia="domicilioFiscal.municipioAlcaldia"
                nameFieldCiudad="domicilioFiscal.ciudad"
                nameFieldEstado="domicilioFiscal.estado"
              />

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

PasoUnoObligadoSolidarioPFAE.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoUnoObligadoSolidarioPFAE;
