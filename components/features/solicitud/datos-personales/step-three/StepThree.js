import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import TextArea from '../../../../shared/text-area/TextArea';
import Select from '../../../../shared/select/Select';

const StepThree = () => {
  const { currentStep, datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();
  const itemsGiro = ['comercial', 'industrial', 'financiero', 'servicios'];
  const itemsSector = ['primario', 'secundario', 'terciario', 'cuaternario'];

  const formulario = useFormik({
    initialValues: {
      businessName: datosPersonales.businessName,
      sector: datosPersonales.sector,
      giro: datosPersonales.giro,
      businessAbout: datosPersonales.businessAbout,
    },
    validationSchema: Yup.object({
      businessName: Yup.string().max(15, 'Must be 15 characters or less').required('Campo requerido'),
      sector: Yup.string().notOneOf(['Sector'], 'Selecciona una opción'),
      giro: Yup.string().notOneOf(['Giro'], 'Selecciona una opción'),
      businessAbout: Yup.string().max(15, 'Must be 15 characters or less').required('Campo requerido'),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { ...currentStep, step: '4' },
          datosPersonales: { ...datosPersonales, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/datos-personales/4');
    },
  });

  return (
    <div className="container">
      <div className="contedor-solicitud">
        <form onSubmit={formulario.handleSubmit} noValidate>
          <h2 className="color-blue-storm">¡Anotado!</h2>
          <p className="color-dark-gray sub">¿Cuál es el nombre comercial, sector y giro de tu negocio?</p>

          <div className="row no-gutters">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <p className="input color-gray">El nombre comercial es</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
              <TextField
                name="businessName"
                formulario={formulario}
                type="text"
                size="big"
                label="Nombre del negocio"
              />
            </div>
          </div>

          <div className="row no-gutters">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <p className="input color-gray">el sector es de</p>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
              <Select name="sector" formulario={formulario} size="big" items={itemsSector} />
            </div>
          </div>

          <div className="row no-gutters">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <p className="input color-gray">y el giro es de</p>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
              <Select name="giro" formulario={formulario} size="big" items={itemsGiro} />
            </div>
          </div>

          <div className="row no-gutters py-3">
            <TextArea
              name="businessAbout"
              formulario={formulario}
              label="Platícanos un poco a qué se dedica tu negocio..."
            />
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
  );
};

export default StepThree;
