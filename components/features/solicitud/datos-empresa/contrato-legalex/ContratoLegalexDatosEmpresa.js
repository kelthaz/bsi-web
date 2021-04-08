import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import SvgLegalex from '../../../../svgs/SvgLegalex';
import styles from './StepNine.module.scss';
import SvgNoGuardamosNada from '../../../../svgs/icons-cards/SvgNoGuardamosNada';
import Modal from '../../../../shared/modal/Modal';
import SvgCheckText from '../../../../svgs/SvgCheckText';
import CheckTextBox from '../../../../shared/check-text-box/CheckTextBox';
import TextField from '../../../../shared/text-field/TextField';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import Tooltip from '../../../../shared/tooltip/Tooltip';
import { aceptarTerminos } from '../../../../../constants/errors';
import { MORAL } from '../../../../../constants/persona';
import ContratoLegalex from '../../shared/contrato-legalex/ContratoLegalex';
import { useEffect } from 'react';
import LegalexRepositorio from '../../../../../services/solicitud/legalex.repositorio';

const ContratoLegalexDatosEmpresa = () => {
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [openModalMobile, setOpenModalMobile] = useState(false);
  const { datosEmpresa } = useSelector((state) => state.solicitud);
  const { datosPersonales } = useSelector((state) => state.solicitud);
  const router = useRouter();

  const dispatch = useDispatch();

  const { initialValues, validationSchema } = {
    initialValues: {
      nombreSolicitante: `${
        datosPersonales.tipoPersona === MORAL
          ? `${datosPersonales.razonSocial} ${datosPersonales.tipoSociedad}`
          : `${datosPersonales.primerNombre} ${datosPersonales.segundoNombre} ${datosPersonales.primerApellido} ${datosPersonales.segundoApellido}`
      }`,
      rfc: datosPersonales.rfc,
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
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'datos-empresa', step: '9' },
          datosEmpresa: {
            ...datosEmpresa,
            ...values,
          },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/datos-empresa/agradecimiento');
    },
  });

  useEffect(async () => {
    const validateEmail = async () => {
      const emailExist = await LegalexRepositorio.postContratoDigital()
        .then((resp) => {
          console.log(resp);
        })
        .catch(({ response }) => {
          // const [error] = response.data.message;
          console.log(response.data);
          // return false;
        });
    };
    await validateEmail();
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
            <Link href="/solicitud/[tab]/[step]" as="/solicitud/datos-empresa/agradecimiento">
              <button className="btn-medium" type="submit" aria-label="Avanzar">
                <span>Continuar</span>
              </button>
            </Link>
          </div>
        </div>
      </Modal>
      <Modal openModal={openModalMobile} setOpenModal={setOpenModalMobile}>
        <div className="container px-xs-0 px-md-0">
          <span className="sub color-blue-storm ">Proceso de autorización</span>
          <div className="row mt-3 card-white text-md-center ">
            <div className="col-xs-4">
              <Image src="/Buro2.jpg" alt="" width="90" height="90" />
            </div>
            <div className="mt-2 col-xs-8">
              <h4 className="color-blue-storm sub">Consultamos con Buró de crédito</h4>
              <p className="color-gray body3">Esto para conocer un poco más sobre ti</p>
            </div>
          </div>
          <div className="row mt-4 card-white text-md-center">
            <div className="col-xs-4">
              <SvgLegalex />
            </div>
            <div className="col-xs-8">
              <h4 className="color-blue-storm sub">Firma segura con Legalex GS</h4>
              <p className="color-gray body3">
                Puedes firmar de forma segura con tu e.firma
                <br />
                <a className="link">¿Por qué te pedimos esto?</a>
              </p>
            </div>
          </div>
          <div className="row  mt-3 text-md-center ">
            <div className=" col-xs-4">
              <SvgNoGuardamosNada />
            </div>
            <div className="col-xs-8">
              <h4 className="color-blue-storm sub pb-auto">No guardamos nada</h4>
              <p className="color-gray body3">Después de la consulta no guardaremos tus archivos</p>
            </div>
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
                  type="button"
                  aria-label="Avanzar"
                  disabled={!(formulario.isValid && formulario.dirty)}
                  onClick={() => setOpenConfirmation(true)}
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
