import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import TextArea from '../../../../shared/text-area/TextArea';
import Select from '../../../../shared/select/Select';
import { campoRequerido, longitudMaxima, seleccionOpcion } from '../../../../../constants/errors';
import SectoresRepositorio from '../../../../../services/simulador/sectores.repositorio';
import changeSelectModel from '../../../../../helpers/changeSelectModel';

const StepThree = ({ sectores }) => {
  const { currentStep, datosPersonales } = useSelector((state) => state.solicitud);
  const [itemsGiro, setItemsGiro] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
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

  const { initialValues, validationSchema } = {
    initialValues: {
      nombreEmpresa: datosPersonales.nombreEmpresa,
      sector: datosPersonales.sector,
      giro: datosPersonales.giro,
      descripcionEmpresa: datosPersonales.descripcionEmpresa,
    },
    validationSchema: Yup.object({
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
  };

  if (datosPersonales.tipoPersona === 'Persona Moral') {
    initialValues.razonSocial = datosPersonales.nombreEmpresa;
    initialValues.tipoSociedad = datosPersonales.tipoSociedad;
    validationSchema.razonSocial = Yup.string().trim().max(120, longitudMaxima).required(campoRequerido);
    validationSchema.tipoSociedad = Yup.string();
  }

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { ...currentStep, step: '4' },
          datosPersonales: { ...datosPersonales, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/datos-personales/4');
    },
    validateOnMount: true,
  });

  useEffect(() => {
    if (formulario.values.sector) {
      const fetchData = async () => {
        const giros = await SectoresRepositorio.getGiroPorSector(formulario.values.sector.value).then(
          (resp) => resp.data
        );
        formulario.setFieldValue('giro', null);
        setItemsGiro(changeSelectModel('id', 'nombre', giros));
      };
      fetchData();
    }
  }, [formulario.values.sector]);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container p-0">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <h2 className="color-blue-storm">¡Anotado!</h2>
            <p className="color-dark-gray sub">
              {datosPersonales.tipoPersona === 'Persona Moral' ? (
                <span>¿Cuál es la razón social, nombre comercial, sector y giro de tu negocio?</span>
              ) : (
                <span>¿Cuál es el nombre comercial, sector y giro de tu negocio?</span>
              )}
            </p>

            {datosPersonales.tipoPersona === 'Persona Moral' && (
              <div className="row no-gutters">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                  <p className="input color-gray">La razón social es</p>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                  <TextField
                    name="razonSocial"
                    maxlength={120}
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="Razón social"
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
            )}

            <div className="row no-gutters">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <p className="input color-gray">El nombre comercial es</p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                <TextField
                  name="nombreEmpresa"
                  formulario={formulario}
                  type="text"
                  size="big"
                  maxlength={120}
                  label="Nombre del negocio"
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
                formulario={formulario}
                label="Platícanos un poco a qué se dedica tu negocio..."
              />
            </div>

            <div className="flex-column-center-config pt-sm-5 pt-xs-5 pt-md-0 pt-lg-0">
              <button
                type="submit"
                className="cicle-button-blue my-3"
                aria-label="Avanzar"
                disabled={!formulario.isValid}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

StepThree.propTypes = {
  sectores: PropTypes.any.isRequired,
};

export default StepThree;
