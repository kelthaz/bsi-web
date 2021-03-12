import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '../../../../../shared/text-field/TextField';
import TextArea from '../../../../../shared/text-area/TextArea';
import Select from '../../../../../shared/select/Select';
import { campoRequerido, longitudMaxima, seleccionOpcion } from '../../../../../../constants/errors';
import changeSelectModel from '../../../../../../helpers/changeSelectModel';
import useFindGiroBySector from '../../../../../../hooks/useFindGiroBySector';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import { PASO_DOS_OBLIGADO_SOLIDARIO_ROUTE } from '../../../../../../constants/routes/solicitud/obligado';
import useOnChangePage from '../../../../../../hooks/useOnChangePage';

const PasoUnoObligadoSolidarioPM = ({ sectores, validate }) => {
  const { obligadoSolidario, currentStep } = useSelector((state) => state.solicitud);

  const dispatch = useDispatch();
  const itemsSector = changeSelectModel('id', 'nombre', sectores);

  const itemsTipoEmpresa = [
    { value: 10, label: 'S.A.' },
    { value: 20, label: 'S.A. DE C.V.' },
    { value: 30, label: 'S. DE R.L.' },
    { value: 40, label: 'S. DE R.L. DE C.V.' },
    { value: 60, label: 'S. EN C.' },
    { value: 70, label: 'S. EN C. POR A.' },
    { value: 110, label: 'S.N.C.' },
  ];

  const formulario = useFormik({
    initialValues: {
      razonSocial: obligadoSolidario.nombreEmpresa,
      tipoSociedad: obligadoSolidario.tipoSociedad,
      nombreEmpresa: obligadoSolidario.nombreEmpresa,
      sector: obligadoSolidario.sector,
      giro: obligadoSolidario.giro,
      descripcionEmpresa: obligadoSolidario.descripcionEmpresa,
    },
    validationSchema: Yup.object().shape({
      razonSocial: Yup.string().trim().max(120, longitudMaxima).required(campoRequerido),
      tipoSociedad: Yup.object()
        .shape({
          value: Yup.string(),
          label: Yup.string(),
        })
        .nullable()
        .required(seleccionOpcion),
      nombreEmpresa: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
      sector: Yup.object()
        .shape({
          value: Yup.string(),
          label: Yup.string(),
        })
        .nullable()
        .required(seleccionOpcion),
      giro: Yup.object()
        .shape({
          value: Yup.string(),
          label: Yup.string(),
        })
        .nullable()
        .required(seleccionOpcion),
      descripcionEmpresa: Yup.string().trim().max(180, longitudMaxima).required(campoRequerido),
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

  const [itemsGiro] = useFindGiroBySector(formulario, 'sector', 'giro');
  const [handleSubmit] = useOnChangePage(formulario, PASO_DOS_OBLIGADO_SOLIDARIO_ROUTE, validate);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container p-0">
          <form onSubmit={handleSubmit} noValidate>
            <p className="color-dark-gray sub">
              Alejandra ya nos ha platicado un poco sobre tu empresa, por lo que te pediremos un poco más de información
              para completar tu expediente y habremos terminado.
            </p>
            <p className="color-dark-gray sub">
              Para comenzar, ¿Cuál es la razón social, nombre comercial, sector y giro de tu negocio?
            </p>

            <div className="row no-gutters">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                <p className="input color-gray">La razón social es</p>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                <TextField
                  name="razonSocial"
                  format="uppercase"
                  maxlength={120}
                  type="text"
                  size="big"
                  label="Razón social"
                  {...formulario.getFieldMeta('razonSocial')}
                  {...formulario.getFieldHelpers('razonSocial')}
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <Select
                  name="tipoSociedad"
                  formulario={formulario}
                  size="big"
                  items={itemsTipoEmpresa}
                  label="Tipo sociedad"
                />
              </div>
            </div>

            <div className="row no-gutters">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <p className="input color-gray">El nombre comercial es</p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                <TextField
                  name="nombreEmpresa"
                  format="uppercase"
                  type="text"
                  size="big"
                  maxlength={120}
                  label="Nombre del negocio"
                  {...formulario.getFieldMeta('nombreEmpresa')}
                  {...formulario.getFieldHelpers('nombreEmpresa')}
                />
              </div>
            </div>

            <div className="row no-gutters">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <p className="input color-gray">el sector es de</p>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                <Select name="sector" formulario={formulario} size="big" items={itemsSector} label="Sector" />
              </div>
            </div>

            <div className="row no-gutters">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <p className="input color-gray">y el giro es de</p>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                <Select
                  name="giro"
                  formulario={formulario}
                  size="big"
                  items={itemsGiro}
                  label="Giro"
                  disabled={itemsGiro.length === 0}
                />
              </div>
            </div>

            <div className="row no-gutters">
              <TextArea
                name="descripcionEmpresa"
                maxlength={180}
                label="Platícanos un poco a qué se dedica tu negocio..."
                format="textArea"
                {...formulario.getFieldMeta('descripcionEmpresa')}
                {...formulario.getFieldHelpers('descripcionEmpresa')}
              />
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

PasoUnoObligadoSolidarioPM.propTypes = {
  sectores: PropTypes.any.isRequired,
  validate: PropTypes.any.isRequired,
};

export default PasoUnoObligadoSolidarioPM;
