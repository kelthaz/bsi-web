import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import RadioButton from '../../../../../shared/radio-button/RadioButton';
import Select from '../../../../../shared/select/Select';
import Tooltip from '../../../../../shared/tooltip/Tooltip';
import TextField from '../../../../../shared/text-field/TextField';
import useCreateFormArray from '../../../../../../hooks/useCreateFormArray';
import {
  campoRequerido,
  longitudMaxima,
  longitudMinima,
  rfcInvalido,
  seleccionOpcion,
} from '../../../../../../constants/errors';
import { regexRFCMoral } from '../../../../../../constants/regex';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import { PASO_CINCO_OBLIGADO_SOLIDARIO_ROUTE } from '../../../../../../constants/routes/solicitud/obligado';
import useOnChangePage from '../../../../../../hooks/useOnChangePage';
import TIPO_EMPRESA from '../../../../../../constants/feature/tipoEmpresa';

const StepFour = ({ validate }) => {
  const { obligadoSolidario, currentStep } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const subformValidationSchema = Yup.object().shape({
    razonSocial: Yup.string().trim().max(120, longitudMaxima).required(campoRequerido),
    tipoSociedad: Yup.object()
      .shape({
        value: Yup.string(),
        label: Yup.string(),
      })
      .nullable()
      .required(seleccionOpcion),
    rfc: Yup.string().matches(regexRFCMoral, rfcInvalido).min(12, longitudMinima).required(campoRequerido),
    invierto: Yup.string().required(campoRequerido),
  });

  const items = [...Array(10).keys()].map((index) => ({ value: index + 1, label: (index + 1).toString() }));

  const formulario = useFormik({
    initialValues: {
      empresas: obligadoSolidario.empresas,
      tieneAccionesEnOtrasEmpresas: obligadoSolidario.tieneAccionesEnOtrasEmpresas,
      cantidadEmpresas: obligadoSolidario.cantidadEmpresas,
    },
    validationSchema: Yup.object().shape({
      tieneAccionesEnOtrasEmpresas: Yup.string().required(campoRequerido),
      empresas: Yup.array().of(subformValidationSchema),
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

  useCreateFormArray(
    formulario,
    formulario.values.tieneAccionesEnOtrasEmpresas === 'si',
    [formulario.values.tieneAccionesEnOtrasEmpresas, formulario.values.cantidadEmpresas],
    {
      razonSocial: '',
      tipoSociedad: '',
      rfc: '',
      invierto: '',
    },
    'empresas',
    'cantidadEmpresas'
  );

  const [handleSubmit] = useOnChangePage(formulario, PASO_CINCO_OBLIGADO_SOLIDARIO_ROUTE, validate);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container px-xs-0 px-md-3">
          <form onSubmit={handleSubmit} noValidate>
            <p className="sub color-dark-gray">¿Tienes acciones en otras empresas?</p>
            <div className="row no-gutters">
              <div className="col-lg-6 col-md-8 col-sm-8 col-xs-8">
                <RadioButton
                  name="tieneAccionesEnOtrasEmpresas"
                  label="si"
                  {...formulario.getFieldProps('tieneAccionesEnOtrasEmpresas')}
                >
                  <div className="row">
                    <div className="input color-gray col-5">Sí, son</div>
                    <div className="col-6 ">
                      <Select
                        name="cantidadEmpresas"
                        size="big"
                        items={items}
                        disabled={formulario.values.tieneAccionesEnOtrasEmpresas !== 'si'}
                        label=""
                        showAlwaysErrors={false}
                        {...formulario.getFieldMeta('cantidadEmpresas')}
                        {...formulario.getFieldHelpers('cantidadEmpresas')}
                      />
                    </div>
                  </div>
                </RadioButton>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <RadioButton
                  name="tieneAccionesEnOtrasEmpresas"
                  label="no"
                  {...formulario.getFieldProps('tieneAccionesEnOtrasEmpresas')}
                >
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>

            {formulario.values.empresas.map((value, index) => (
              <div key={value}>
                <p className="sub color-gray mt-2">¿Cómo se llama la empresa y de cuánto es tu inversión?</p>
                <div className="row ">
                  <div className="col-md-5 col-xs-12 pr-md-0">
                    <p className="input color-gray">La razón social es</p>
                  </div>
                  <div className="col-md-4 col-xs-12 px-md-0 px-xs-3">
                    <TextField
                      name={`empresas[${index}].razonSocial`}
                      format="uppercase"
                      maxlength={120}
                      type="text"
                      size="big"
                      label="Razón social"
                      {...formulario.getFieldMeta(`empresas[${index}].razonSocial`)}
                      {...formulario.getFieldHelpers(`empresas[${index}].razonSocial`)}
                    />
                  </div>
                  <div className="col-md-3 col-xs-12 ">
                    <Select
                      name={`empresas[${index}].tipoSociedad`}
                      size="big"
                      items={TIPO_EMPRESA}
                      label="S.A"
                      {...formulario.getFieldMeta(`empresas[${index}].tipoSociedad`)}
                      {...formulario.getFieldHelpers(`empresas[${index}].tipoSociedad`)}
                    />
                  </div>
                  <div className="col-md-3 col-xs-12 ">
                    <p className="input color-gray">El RFC es </p>
                  </div>
                  <div className="col-md-8 col-xs-12 pr-lg-2 pr-md-2">
                    <TextField
                      name={`empresas[${index}].rfc`}
                      format="rfcformatter"
                      maxlength={12}
                      type="text"
                      size="big"
                      label="Ej. TLF280693HVZJNR03"
                      {...formulario.getFieldMeta(`empresas[${index}].rfc`)}
                      {...formulario.getFieldHelpers(`empresas[${index}].rfc`)}
                    />
                  </div>
                  <div className="col-md-3 col-xs-12 pr-md-0">
                    <p className="input color-gray">Invierto </p>
                  </div>
                  <div className="col-md-5 col-xs-12 pl-md-0">
                    <TextField
                      name={`empresas[${index}].invierto`}
                      maxlength={11}
                      type="text"
                      size="big"
                      label="$0.00"
                      format="money"
                      {...formulario.getFieldMeta(`empresas[${index}].invierto`)}
                      {...formulario.getFieldHelpers(`empresas[${index}].invierto`)}
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="flex-column-center-config pt-sm-5 pt-xs-5 pt-md-0 pt-lg-0">
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

StepFour.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default StepFour;
