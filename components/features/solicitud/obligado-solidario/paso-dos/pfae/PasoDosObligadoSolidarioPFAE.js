import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '../../../../../shared/text-field/TextField';
import { regexRFCFisica } from '../../../../../../constants/regex';
import { campoRequerido, longitudMinima, longitudMaxima, rfcInvalido } from '../../../../../../constants/errors';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import { PASO_TRES_OBLIGADO_SOLIDARIO_ROUTE } from '../../../../../../constants/routes/solicitud/obligado';
import useOnChangePage from '../../../../../../hooks/useOnChangePage';

const PasoDosObligadoSolidarioPFAE = ({ validate }) => {
  const { obligadoSolidario, currentStep } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const formulario = useFormik({
    initialValues: {
      rfc: obligadoSolidario.rfc,
      curp: obligadoSolidario.curp,
    },
    validationSchema: Yup.object({
      rfc: Yup.string().matches(regexRFCFisica, rfcInvalido).min(13, longitudMinima).required(campoRequerido),
      curp: Yup.string().max(18, longitudMaxima).min(18, longitudMinima).required(campoRequerido),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate
            ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
            : { ...currentStep },
          obligadoSolidario: {
            ...obligadoSolidario,
            ...values,
          },
        })
      );
    },
  });

  const [handleSubmit] = useOnChangePage(formulario, PASO_TRES_OBLIGADO_SOLIDARIO_ROUTE, validate);

  return (
    <>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud ">
          <div className="container p-0">
            <form onSubmit={handleSubmit} noValidate>
              <p className="color-dark-gray sub">Ahora dinos, ¿cuál es tu RFC y tu CURP?</p>
              <div className="row no-gutters">
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                  <p className="input color-gray">Mi RFC es </p>
                </div>
                <div className="col-lg-7 col-md-6 col-xs-12 pr-md-2 pb-xs-3 pb-md-0">
                  <TextField
                    name="rfc"
                    format="rfcformatter"
                    maxlength={13}
                    type="text"
                    size="big"
                    label="Ej. TLF280693H17"
                    {...formulario.getFieldMeta('rfc')}
                    {...formulario.getFieldHelpers('rfc')}
                  />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                  <p className="input color-gray">Mi CURP es </p>
                </div>
                <div className="col-lg-8 col-md-7 col-xs-12 pr-md-2 pb-xs-3 pb-md-0">
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
    </>
  );
};

PasoDosObligadoSolidarioPFAE.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoDosObligadoSolidarioPFAE;
