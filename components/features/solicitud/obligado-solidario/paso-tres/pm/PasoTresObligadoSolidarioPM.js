import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import TextField from '../../../../../shared/text-field/TextField';
import { regexRFCMoral } from '../../../../../../constants/regex';
import { campoRequerido, longitudMinima, longitudMaxima, rfcInvalido } from '../../../../../../constants/errors';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import useOnChangePage from '../../../../../../hooks/useOnChangePage';
import { PASO_CUATRO_OBLIGADO_SOLIDARIO_ROUTE } from '../../../../../../constants/routes/solicitud/obligado';

const PasoTresObligadoSolidarioPM = ({ validate }) => {
  const { currentStep, obligadoSolidario } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const formulario = useFormik({
    initialValues: {
      rfc: obligadoSolidario.rfc,
      curp: obligadoSolidario.curp,
    },
    validationSchema: Yup.object({
      rfc: Yup.string().matches(regexRFCMoral, rfcInvalido).min(12, longitudMinima).required(campoRequerido),
      curp: Yup.string().max(18, longitudMaxima).min(18, longitudMinima).required(campoRequerido),
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

  const [handleSubmit] = useOnChangePage(formulario, PASO_CUATRO_OBLIGADO_SOLIDARIO_ROUTE, validate);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud ">
        <div className="container p-0">
          <form onSubmit={handleSubmit} noValidate>
            <p className="color-dark-gray sub">
              Ahora dinos, ¿cuál es el RFC de la empresa y el CURP del Representante Legal?
            </p>
            <div className="row no-gutters">
              <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 ">
                <p className="input color-gray">El RFC de la empresa es</p>
              </div>
              <div className="col-lg-5 col-md-5 col-xs-12 pb-md-0 pb-xs-3">
                <TextField
                  name="rfc"
                  format="rfcformatter"
                  maxlength={13}
                  type="text"
                  size="big"
                  label="TLF280693HVZJ"
                  {...formulario.getFieldMeta('rfc')}
                  {...formulario.getFieldHelpers('rfc')}
                />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                <p className="input color-gray">El CURP es</p>
              </div>
              <div className="col-lg-9 col-md-7 col-xs-12 pr-lg-2 pr-md-2 pb-sm-3 pb-xs-3">
                <TextField
                  name="curp"
                  format="rfcformatter"
                  maxlength={18}
                  type="text"
                  size="big"
                  label="Ej. TLF280693HVZJNR03"
                  {...formulario.getFieldMeta('curp')}
                  {...formulario.getFieldHelpers('curp')}
                />
              </div>
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
  );
};

PasoTresObligadoSolidarioPM.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoTresObligadoSolidarioPM;
