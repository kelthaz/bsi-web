import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import Select from '../../../../shared/select/Select';
import { seleccionOpcion } from '../../../../../constants/errors';
import Tooltip from '../../../../shared/tooltip/Tooltip';
import useOnChangePage from '../../../../../hooks/useOnChangePage';
import { PASO_SEIS_DATOS_EMPRESA_ROUTE } from '../../../../../constants/routes/solicitud/empresa';

const PasoCincoDatosEmpresa = ({ validate }) => {
  const { currentStep, datosEmpresa } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const items = [
    { value: 1, label: '0 a 40' },
    { value: 2, label: '40 a 60' },
    { value: 3, label: 'Más de 60' },
  ];

  const formulario = useFormik({
    initialValues: {
      numeroEmpleados: datosEmpresa.numeroEmpleados,
    },
    validationSchema: Yup.object({
      numeroEmpleados: Yup.object()
        .shape({
          value: Yup.string(),
          label: Yup.string(),
        })
        .nullable()
        .required(seleccionOpcion),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate
            ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
            : { ...currentStep },
          datosEmpresa: { ...datosEmpresa, ...values },
        })
      );
    },
  });

  const [handleSubmit] = useOnChangePage(formulario, PASO_SEIS_DATOS_EMPRESA_ROUTE, validate);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud ">
        <div className="container p-0">
          <form onSubmit={handleSubmit} noValidate>
            <p className="color-dark-gray sub position-relative">
              ¿Cuántos empleados tiene la empresa?
              <Tooltip message="Esta información nos ayudará a darnos una idea del tamaño de tu negocio." />
            </p>
            <div className="row no-gutters">
              <div className="col-lg-1 col-md-1 col-sm-12 col-xs-1 ">
                <p className="input color-gray">De</p>
              </div>
              <div className="col-lg-5 col-md-5  col-xs-11 pr-lg-2 pr-md-2 pb-sm-3 pb-xs-3">
                <Select name="numeroEmpleados" label="40 a 60" formulario={formulario} size="big" items={items} />
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

PasoCincoDatosEmpresa.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoCincoDatosEmpresa;
