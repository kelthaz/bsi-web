import { useFormik } from 'formik';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import styles from './StepNine.module.scss';
import Modal from '../../../../shared/modal/Modal';
import SvgCheckText from '../../../../svgs/SvgCheckText';
import CheckTextBox from '../../../../shared/check-text-box/CheckTextBox';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import { aceptarTerminos } from '../../../../../constants/errors';
import { MORAL } from '../../../../../constants/persona';
import ContratoLegalex from '../../shared/contrato-legalex/ContratoLegalex';
import ContratoRepositorio from '../../../../../services/solicitud/contrato.repositorio';
import {
  AGRADECIMIENTO_DATOS_EMPRESA_ROUTE,
  CONTRATO_LEGALEX_DATOS_EMPRESA_ROUTE,
} from '../../../../../constants/routes/solicitud/empresa';
import getDateBirth from '../../../../../helpers/getDateBirth';
import { regexMultipleSpaces } from '../../../../../constants/regex';
import { PENDIENTE_LEGALEX, PENDIENTE_BURO } from '../../../../../constants/contrato';

const ContratoLegalexDatosEmpresa = () => {
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const { datosEmpresa } = useSelector((state) => state.solicitud);
  const { datosPersonales } = useSelector((state) => state.solicitud);
  const [legalexRoute, setLegalexRoute] = useState('');
  const { push } = useRouter();

  const dispatch = useDispatch();

  const { initialValues, validationSchema } = {
    initialValues: {
      nombreSolicitante: `${
        datosPersonales.tipoPersona === MORAL
          ? `${datosPersonales.razonSocial} ${datosPersonales.tipoSociedad}`
          : `${datosPersonales.primerNombre} ${datosPersonales.segundoNombre} ${datosPersonales.primerApellido} ${datosPersonales.segundoApellido}`.replace(
              regexMultipleSpaces,
              ' '
            )
      }`,
      rfc: datosPersonales.rfc,
      fechaNacimiento: getDateBirth(datosPersonales.rfc) || '',
      colonia: datosEmpresa.domicilioFiscal.colonia,
      telefono: datosEmpresa.celularRecibe,
      numeroExtension: datosEmpresa.domicilioFiscal.numExterior,
      numeroInterior: datosEmpresa.domicilioFiscal.numInterior,
      estado: datosEmpresa.domicilioFiscal.estado,
      codigoPostal: datosEmpresa.domicilioFiscal.codigoPostal,
      alcaldia: datosEmpresa.domicilioFiscal.municipioAlcaldia,
      representanteLegal: datosEmpresa.primerNombreRecibe,
      domicilio: datosEmpresa.domicilioFiscal.esDomilicioComercial,
      autorizacionFirmaElectronica: datosEmpresa.autorizacionFirmaElectronica,
      autorizacionConsultaBancoppel: datosEmpresa.autorizacionConsultaBancoppel,
    },
    validationSchema: Yup.object({
      autorizacionFirmaElectronica: Yup.boolean().nullable().oneOf([true], aceptarTerminos),
      autorizacionConsultaBancoppel: Yup.boolean().nullable().oneOf([true], aceptarTerminos),
    }),
  };

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      window.open(legalexRoute, '_self');
    },
  });

  const handleNextStep = async () => {
    dispatch(
      nextStepDatosPersonales({
        currentStep: { tab: 'datos-empresa', step: '11' },
      })
    );
    await push(AGRADECIMIENTO_DATOS_EMPRESA_ROUTE);
  };

  const handleLegalex = async () => {
    const contratoData = await ContratoRepositorio.getContrato()
      .then(({ data }) => data)
      .catch(() => false);

    if (!contratoData) {
      return;
    }

    const { estado, firmaCovenant } = contratoData;

    switch (estado) {
      case PENDIENTE_LEGALEX:
        if (
          await ContratoRepositorio.postContratoDigital()
            .then(() => true)
            .catch(() => false)
        ) {
          handleLegalex();
        }
        break;

      case PENDIENTE_BURO:
        if (
          await ContratoRepositorio.postBuroCredito()
            .then(() => true)
            .catch(() => false)
        ) {
          setOpenConfirmation(true);
        }
        break;

      default:
        setLegalexRoute(
          `https://www.legalexgs.com/covenant_firma/acceso_firma.jsp?t=${firmaCovenant.listaTokens[0].token}&u=${window.location.origin}${CONTRATO_LEGALEX_DATOS_EMPRESA_ROUTE}`
        );
        break;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleLegalex();
    }, 500);
  }, []);

  return (
    <>
      <Modal openModal={openConfirmation} setOpenModal={setOpenConfirmation} closeable={false}>
        <div className={styles['modal-container']}>
          <div className="d-flex justify-content-center pb-4">
            <SvgCheckText />
          </div>

          <h4 className="color-blue-storm">¡Gracias {datosPersonales.primerNombre}!</h4>
          <p className="dark-gray body2">
            {datosPersonales.tipoPersona === MORAL
              ? 'La revisión del Buró de Crédito, y la firma del Kit de Apertura y la Solicitud de EmpresaNet han sido realizadas con éxito.'
              : 'La revisión del Buró de Crédito ha sido realizada con éxito.'}
            <br />
            ¡Analizaremos esta información para poder calcular tu oferta!
          </p>

          <div className="d-flex justify-content-center">
            <button className="btn-medium" type="submit" aria-label="Avanzar" onClick={handleNextStep}>
              <span>Continuar</span>
            </button>
          </div>
        </div>
      </Modal>

      <div className="contedor-fixed">
        <div className="contedor-solicitud">
          <div className="container p-0 mt-4">
            <form onSubmit={formulario.handleSubmit} noValidate>
              <ContratoLegalex
                formulario={formulario}
                nameFieldNombreSolicitante="nombreSolicitante"
                nameFieldRFC="rfc"
                nameFieldFechaNacimiento="fechaNacimiento"
                nameFieldDomicilio="domicilio"
                nameFieldNumeroExterior="numeroExterior"
                nameFieldNumeroInterior="numeroInterior"
                nameFieldColonia="colonia"
                nameFieldAlcaldia="alcaldia"
                nameFieldCodigoPostal="codigoPostal"
                nameFieldEstado="estado"
                nameFieldTelefono="telefono"
                nameFieldRepresentanteLegal="representanteLegal"
                nameFieldFechaAutorizacion="fechaAutorizacion"
              />

              <div className="row no-gutters mt-4">
                <CheckTextBox name="autorizacionFirmaElectronica" formulario={formulario}>
                  <p className="ml-1 body3 color-gray mb-0">
                    Firmar electrónicamente la autorización de consulta de Buró de Crédito.
                  </p>
                </CheckTextBox>
              </div>
              <div className="row no-gutters">
                <CheckTextBox className="pt-5" name="autorizacionConsultaBancoppel" formulario={formulario}>
                  <p className="ml-1 body3 color-gray mb-0">
                    Autorizo a partir de este momento a BanCoppel a consultar mis antecedentes crediticios ante las
                    Sociedades de Información Crediticia que estime conveniente y durante el tiempo que mantengamos
                    relación jurídica, declarando que conoce la naturaleza, alcance y uso que BanCoppel hará de tal
                    información.
                  </p>
                </CheckTextBox>
              </div>
              <div className="flex-column-center-config my-3 ">
                <button
                  className="btn-medium"
                  type="submit"
                  aria-label="Avanzar"
                  disabled={!(formulario.isValid && formulario.dirty)}
                >
                  <span>Firma tu contrato</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContratoLegalexDatosEmpresa;
