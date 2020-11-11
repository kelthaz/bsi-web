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

const StepThree = ({ sectores }) => {
  const { currentStep, datosPersonales } = useSelector((state) => state.solicitud);
  const [itemsGiro, setitemsGiro] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const itemsSector = sectores.map(({ nombre }) => nombre);
  const itemsTipoEmpresa = [
    'S.A.',
    'S.A. DE C.V.',
    'S. DE R.L.',
    'S. DE R.L. DE C.V.',
    'S. EN C.',
    'S. EN C. POR A.',
    'S.N.C.',
  ];

  const { initialValues, validationSchema } =
    datosPersonales.personType === 'Persona Moral'
      ? {
          initialValues: {
            razonSocial: datosPersonales.businessName,
            tipoEmpresa: datosPersonales.tipoEmpresa,
            businessName: datosPersonales.businessName,
            sector: datosPersonales.sector,
            giro: datosPersonales.giro,
            businessAbout: datosPersonales.businessAbout,
          },
          validationSchema: Yup.object({
            razonSocial: Yup.string().trim().max(120, longitudMaxima).required(campoRequerido),
            tipoEmpresa: Yup.string(),
            businessName: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
            sector: Yup.string().notOneOf(['Sector'], seleccionOpcion),
            giro: Yup.string().notOneOf(['Giro'], seleccionOpcion),
            businessAbout: Yup.string().trim().max(180, longitudMaxima).required(campoRequerido),
          }),
        }
      : {
          initialValues: {
            businessName: datosPersonales.businessName,
            sector: datosPersonales.sector,
            giro: datosPersonales.giro,
            businessAbout: datosPersonales.businessAbout,
          },
          validationSchema: Yup.object({
            businessName: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
            sector: Yup.string().notOneOf(['Sector'], seleccionOpcion),
            giro: Yup.string().notOneOf(['Giro'], seleccionOpcion),
            businessAbout: Yup.string().trim().max(180, longitudMaxima).required(campoRequerido),
          }),
        };

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
    if (formulario.values.sector !== 'Sector') {
      const fetchData = async () => {
        const giros = await SectoresRepositorio.getGiroPorSector(
          sectores.find(({ nombre }) => formulario.values.sector === nombre).id
        ).then((resp) => resp.data);
        setitemsGiro(giros.map(({ nombre }) => nombre));
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
              {datosPersonales.personType === 'Persona Moral' ? (
                <span>¿Cuál es la razón social, nombre comercial, sector y giro de tu negocio?</span>
              ) : (
                <span>¿Cuál es el nombre comercial, sector y giro de tu negocio?</span>
              )}
            </p>

            {datosPersonales.personType === 'Persona Moral' && (
              <div className="row no-gutters">
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                  <p className="input color-gray">La razón social es</p>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                  <TextField
                    name="razonSocial"
                    maxlength={120}
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="Razón social"
                  />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                  <Select name="tipoEmpresa" formulario={formulario} size="big" items={itemsTipoEmpresa} />
                </div>
              </div>
            )}

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

            <div className="row no-gutters">
              <TextArea
                name="businessAbout"
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
