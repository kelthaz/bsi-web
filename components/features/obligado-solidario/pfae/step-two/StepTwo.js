import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import { regexRFCFisica } from '../../../../../constants/regex';
import { campoRequerido, longitudMinima, longitudMaxima, rfcInvalido } from '../../../../../constants/errors';

const StepTwo = () => {
  const { pfae } = useSelector((state) => state.obligado);
  const dispatch = useDispatch();
  const router = useRouter();

  const formulario = useFormik({
    initialValues: {
      rfc: pfae.rfc,
      curp: pfae.curp,
    },
    validationSchema: Yup.object({
      rfc: Yup.string().matches(regexRFCFisica, rfcInvalido).min(13, longitudMinima).required(campoRequerido),
      curp: Yup.string().max(18, longitudMaxima).min(18, longitudMinima).required(campoRequerido),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'preguntas', step: '3' },
          pfae: {
            ...pfae,
            ...values,
          },
        })
      );
      router.push('/obligado-solidario/pfae/[tab]/[step]', '/obligado-solidario/pfae/preguntas/3');
    },
  });

  return (
    <>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud ">
          <div className="container p-0">
            <form onSubmit={formulario.handleSubmit} noValidate>
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
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="Ej. TLF280693H17"
                  />
                </div>
                <div className="col-lg-3  col-md-3 col-sm-12 col-xs-12 ">
                  <p className="input color-gray">Mi CURP es </p>
                </div>
                <div className="col-lg-8 col-md-7 col-xs-12 pr-md-2 pb-xs-3 pb-md-0">
                  <TextField
                    name="curp"
                    format="rfcformatter"
                    maxlength={18}
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="Ej. TLF280693HVZJNR03"
                  />
                </div>
              </div>
              <div className="flex-column-center-config">
                <button
                  type="submit"
                  className="cicle-button-blue my-3"
                  aria-label="Avanzar"
                  disabled={!(formulario.isValid && formulario.dirty)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepTwo;
