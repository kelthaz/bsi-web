import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import RadioButton from '../../../../../shared/radio-button/RadioButton';
import { campoRequerido } from '../../../../../../constants/errors';
import { PASO_CINCO_DOCUMENTACION_ROUTE } from '../../../../../../constants/routes/solicitud/documentacion';
import useOnChangePage from '../../../../../../hooks/useOnChangePage';

const PasoCuatroDocumentacionPFAE = () => {
  const { currentStep, documentacion } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const { query } = useRouter();
  const validate = currentStep.step === query.step;

  const formulario = useFormik({
    initialValues: {
      bienesSeparados: documentacion.bienesSeparados,
    },
    validationSchema: Yup.object().shape({
      bienesSeparados: Yup.string().required(campoRequerido),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate ? { tab: 'documentacion', step: '5' } : { ...currentStep },
          documentacion: { ...documentacion, ...values },
        })
      );
    },
  });

  const [handleSubmit] = useOnChangePage(formulario, PASO_CINCO_DOCUMENTACION_ROUTE, currentStep);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud mt-xs-0 mt-md-5">
        <div className="container pl-md-3 pl-xs-0">
          <form onSubmit={handleSubmit} noValidate>
            <div className="row pl-3 pb-md-3 pb-xs-1">
              <p className="color-dark-gray sub">
                Para saber qué documentos solicitarte, necesitamos que nos respondas. ¿Eres casada(o)?
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
                disabled={validate && !(formulario.isValid && formulario.dirty)}
                type="submit"
                className="cicle-button-blue my-3"
                aria-label="Avanzar"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default PasoCuatroDocumentacionPFAE;
