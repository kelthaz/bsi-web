import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import Select from '../../../../shared/select/Select';
import { seleccionOpcion } from '../../../../../constants/errors';
import Tooltip from '../../../../shared/tooltip/Tooltip';

const StepFive = () => {
  const { datosEmpresa } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();
  const items = [
    { value: 1, label: '0 a 40' },
    { value: 2, label: '40 a 60' },
    { value: 3, label: 'Más de 60' },
  ];

  const { initialValues, validationSchema } = {
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
  };

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'datos-empresa', step: '6' },
          datosEmpresa: { ...datosEmpresa, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/datos-empresa/6');
    },
  });

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud ">
        <div className="container p-0">
          <form onSubmit={formulario.handleSubmit} noValidate>
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
            <div className="flex-column-center-config pt-sm-5 pt-xs-5 pt-md-0 pt-lg-0">
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
  );
};
export default StepFive;
