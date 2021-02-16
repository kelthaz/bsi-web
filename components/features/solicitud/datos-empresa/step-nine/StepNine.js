import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import SvgLegalex from '../../../../svgs/SvgLegalex';
import styles from './StepNine.module.scss';
import SvgNoGuardamosNada from '../../../../svgs/icons-cards/SvgNoGuardamosNada';
import SvgFirmaElectronica from '../../../../svgs/icons-cards/SvgFirmaElectronica';
import Modal from '../../../../shared/modal/Modal';
import SvgCheckText from '../../../../svgs/SvgCheckText';
import CheckTextBox from '../../../../shared/check-text-box/CheckTextBox';
import TextField from '../../../../shared/text-field/TextField';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import Tooltip from '../../../../shared/tooltip/Tooltip';
import { aceptarTerminos } from '../../../../../constants/errors';

const StepNine = () => {
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [openModalMobile, setOpenModalMobile] = useState(false);
  const { datosEmpresa } = useSelector((state) => state.solicitud);
  const { datosPersonales } = useSelector((state) => state.solicitud);
  const router = useRouter();

  const dispatch = useDispatch();

  const { initialValues, validationSchema } = {
    initialValues: {
      nombreSolicitante: `${
        datosPersonales.tipoPersona.value === 'MORAL'
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

  return (
    <>
      <Modal openModal={openConfirmation} setOpenModal={setOpenConfirmation} closeable={false}>
        <div className={styles['modal-container']}>
          <div className="d-flex justify-content-center pb-4">
            <SvgCheckText />
          </div>

          <h4 className="color-blue-storm">¡Gracias {datosPersonales.primerNombre}!</h4>
          <p className="dark-gray body2">
            {datosPersonales.tipoPersona.value === 'MORAL'
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
              <img src="/buro.png" alt="Buro de crédito" />
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
                Puedes firmar de forma segura con tu e.firm
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
              <h4 className="color-blue-storm">Autorización para la consulta de Buró de Crédito</h4>
              <div className="row justify-content-between">
                <div className={` d-none d-md-block card-white text-md-center ${styles['icon-card']}`}>
                  <div className="container-svg-card">
                    <img src="/buro.png" alt="Buro de crédito" />
                  </div>
                  <div>
                    <h4 className="color-blue-storm sub">Consultamos con Buró de crédito</h4>
                    <p className="color-gray body3">Esto para conocer un poco más sobre ti</p>
                  </div>
                </div>
                <div className={`d-none d-md-block  card-white text-md-center ${styles['icon-card']}`}>
                  <div className="container-svg-card">
                    <SvgLegalex />
                  </div>
                  <div className="px-0">
                    <h4 className="color-blue-storm sub">Firma segura con Legalex GS</h4>
                    <p className="color-gray body3">
                      Puedes firmar de forma segura con tu e.firma
                      <br />
                      <a className="link">¿Por qué te pedimos esto?</a>
                    </p>
                  </div>
                </div>
                <div className={`d-none d-md-block card-white text-md-center ${styles['icon-card']}`}>
                  <div className="container-svg-card">
                    <SvgNoGuardamosNada />
                  </div>
                  <div>
                    <h4 className="color-blue-storm sub pb-auto">No guardamos nada</h4>
                    <p className="color-gray body3">Después de la consulta no guardaremos tus archivos</p>
                  </div>
                </div>
              </div>

              <div className={styles['scrollable-container']}>
                <div>
                  <p className="d-none d-md-block sub color-blue-storm">
                    AUTORIZACIÓN PARA SOLICITAR REPORTES DE CRÉDITO PERSONAS FISICAS / PERSONAS MORALES
                  </p>
                  <div className="row d-block d-sm-none">
                    <a className="mt-1 sub link " onClick={() => setOpenModalMobile(true)}>
                      ¿Cuál es el proceso de autorización?
                    </a>
                    <Tooltip message="." position="top" />
                  </div>
                  <p className="mt-5 d-block d-sm-none sub color-blue-storm">
                    AUTORIZACIÓN PARA SOLICITAR REPORTES DE CRÉDITO PERSONAS FISICAS / PERSONAS MORALES
                  </p>
                  <div className="body2">
                    <p className="mb-4">
                      Por este conducto autorizo expresamente a{' '}
                      <span className="sub">BanCoppel, S.A., Institución de Banca Múltiple</span>, para que por conducto
                      de sus funcionarios facultados lleve a cabo investigaciones sobre mi comportamiento crediticio o
                      el de la empresa que represento en las sociedades de información crediticia que estime
                      conveniente.
                    </p>
                    <p className="mb-3">
                      Asimismo declaro que conozco la naturaleza de las sociedades de información crediticia y de la
                      información contenida en los reportes de crédito y reporte de crédito especial; declaro que
                      conozco la naturaleza alcance de la información que se solicitará, del uso que{' '}
                      <span className="sub">BanCoppel, S.A., Institución de banca Múltiple</span>, hará de tal
                      información y de que esta podrá realizar consultas periódicas de mi historial crediticio o el de
                      la empresa que represento, consintiendo que esta autorización se encuentre vigente por un periodo
                      de 3 años contando a partir de la fecha de sus expedición y en todo caso durante el tiempo que
                      mantengamos relación jurídica.
                    </p>
                    <p className="mb-3">
                      En caso de que la solicitante sea una persona, declaro bajo protesta de decir verdad ser
                      Representante Legal de la empresa mencionada en esta autorización; manifestando que a la fecha de
                      firma de la presente autorización los poderes no me han sido revocados, limitados, ni modificados
                      en forma alguna.
                    </p>
                    <div className="row">
                      <div className="col-md-12 col-xs-12">
                        <TextField
                          name="nombreSolicitante"
                          maxlength={18}
                          formulario={formulario}
                          type="text"
                          size="small"
                          label="Nombre del Solicitante (Persona Física o Razón Social de la persona Moral)"
                          disabled
                        />
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <TextField
                          name="rfc"
                          maxlength={12}
                          formulario={formulario}
                          type="text"
                          size="small"
                          label="RFC"
                          disabled
                        />
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <TextField
                          name="fechaNacimiento"
                          maxlength={12}
                          formulario={formulario}
                          type="text"
                          size="small"
                          label="Fecha de Nacimiento/Constitución:"
                          disabled
                        />
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <TextField
                          name="domicilio"
                          maxlength={12}
                          formulario={formulario}
                          type="text"
                          size="small"
                          label="Domicilio"
                          disabled
                        />
                      </div>
                      <div className="col-md-3 col-xs-12">
                        <TextField
                          name="numeroExterior"
                          maxlength={12}
                          formulario={formulario}
                          type="text"
                          size="small"
                          label="No. Exterior"
                          disabled
                        />
                      </div>
                      <div className="col-md-3 col-xs-12">
                        <TextField
                          name="numeroInterior"
                          maxlength={12}
                          formulario={formulario}
                          type="text"
                          size="small"
                          label="No. Interior"
                          disabled
                        />
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <TextField
                          name="colonia"
                          maxlength={12}
                          formulario={formulario}
                          type="text"
                          size="small"
                          label="Colonia"
                          disabled
                        />
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <TextField
                          name="alcaldia"
                          maxlength={12}
                          formulario={formulario}
                          type="text"
                          size="small"
                          label="Alcaldía/Municipio"
                          disabled
                        />
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <TextField
                          name="codigoPostal"
                          maxlength={12}
                          formulario={formulario}
                          type="text"
                          size="small"
                          label="Código Postal"
                          disabled
                        />
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <TextField
                          name="estado"
                          maxlength={12}
                          formulario={formulario}
                          type="text"
                          size="small"
                          label="Estado"
                          disabled
                        />
                      </div>
                      <div className="col-md-12 col-xs-12">
                        <TextField
                          name="telefono"
                          formulario={formulario}
                          type="tel"
                          size="small"
                          label="Teléfono"
                          format="phone"
                          maxlength={12}
                          disabled
                        />
                      </div>
                      <div className="col-md-12 col-xs-12">
                        <TextField
                          name="representanteLegal"
                          maxlength={12}
                          formulario={formulario}
                          type="text"
                          size="small"
                          label="Representante legal (solo Persona Moral):"
                          disabled
                        />
                      </div>
                      <div className="col-md-12 col-xs-12">
                        <TextField
                          name="fechaAutorizacion"
                          maxlength={12}
                          formulario={formulario}
                          type="text"
                          size="small"
                          label="Fecha en que se autoriza la consulta:"
                          disabled
                        />
                      </div>
                    </div>
                    <p>
                      Estoy consciente y acepto que este documento quede bajo propiedad de BanCoppel, S.A., Institución
                      de banca Múltiple, para efectos de control y cumplimiento del artículo 28 de la Ley para Regular a
                      las Sociedades de Información Crediticia.
                    </p>
                  </div>
                </div>
              </div>

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

export default StepNine;
