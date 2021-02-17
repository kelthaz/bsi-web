import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import RadioButton from '../../../../../shared/radio-button/RadioButton';

const StepNine = () => {
  const { pfae } = useSelector((state) => state.obligado);
  const dispatch = useDispatch();
  const router = useRouter();

  const { initialValues } = {
    initialValues: {
      bienesSeparados: pfae.bienesSeparados,
    },
  };

  const formulario = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'carga-documentos', step: '10' },
          pfae: { ...pfae, ...values },
        })
      );
      router.push('/obligado-solidario/pfae/[tab]/[step]', '/obligado-solidario/pfae/carga-documentos/10');
    },
  });
  return (
    <>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud mt-xs-0 mt-md-5">
          <div className="container pl-md-3 pl-xs-0">
            <form onSubmit={formulario.handleSubmit} noValidate>
              <div className="row pl-3 pb-xs-1">
                <p className="color-dark-gray sub">
                  Ahora, para saber qué documentos solicitarte, necesitamos que nos respondas. ¿Eres casada (o)?
                </p>
              </div>
              <div className="row">
                <div className="col-12">
                  <RadioButton name="bienesSeparados" formulario={formulario} value="siMancomunados">
                    <span className="input color-gray">Sí, por bienes mancomunados</span>
                  </RadioButton>
                </div>
                <div className="col-12 mt-3">
                  <RadioButton name="bienesSeparados" formulario={formulario} value="siSeparados">
                    <span className="input color-gray">Sí, por bienes separados</span>
                  </RadioButton>
                </div>
                <div className="col-12 mt-3">
                  <RadioButton name="bienesSeparados" formulario={formulario} value="no">
                    <span className="input color-gray">No</span>
                  </RadioButton>
                </div>
              </div>
              <div className="flex-column-center-config">
                <button
                  disabled={!formulario.dirty}
                  type="submit"
                  className="cicle-button-blue my-3"
                  aria-label="Avanzar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepNine;
