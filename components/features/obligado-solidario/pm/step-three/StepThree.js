import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import TextField from '../../../../shared/text-field/TextField';
import { regexRFCMoral } from '../../../../../constants/regex';
import { campoRequerido, longitudMinima, longitudMaxima, rfcInvalido } from '../../../../../constants/errors';
import { nextStepObligadoSolidario } from '../../../../../redux/actions/obligado';

const StepThree = () => {
  const { pm } = useSelector((state) => state.obligado);
  const dispatch = useDispatch();
  const router = useRouter();

  const formulario = useFormik({
    initialValues: {
      rfc: pm.rfc,
      curp: pm.curp,
    },
    validationSchema: Yup.object({
      rfc: Yup.string().matches(regexRFCMoral, rfcInvalido).min(12, longitudMinima).required(campoRequerido),
      curp: Yup.string().max(18, longitudMaxima).min(18, longitudMinima).required(campoRequerido),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepObligadoSolidario({
          currentStep: { tab: 'preguntas', step: '4' },
          pm: {
            ...pm,
            ...values,
          },
        })
      );
      router.push('/obligado-solidario/pm/[tab]/[step]', '/obligado-solidario/pm/preguntas/4');
    },
  });

  return (
    <>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud ">
          <div className="container p-0">
            <form onSubmit={formulario.handleSubmit} noValidate>
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
                    maxlength={12}
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="TLF280693HVZJ"
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

export default StepThree;
