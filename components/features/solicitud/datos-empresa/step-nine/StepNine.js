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

  return (
    <>
      <Modal openModal={openConfirmation} setOpenModal={setOpenConfirmation} closeable={false}>
        <div className={styles['modal-container']}>
          <div className="d-flex justify-content-center pb-4">
            <SvgCheckText />
          </div>

          <h4 className="color-blue-storm">??Gracias {datosPersonales.primerNombre}!</h4>
          <p className="dark-gray body2">
            {datosPersonales.tipoPersona === MORAL
              ? 'La revisi??n del Bur?? de Cr??dito, y la firma del Kit de Apertura y la Solicitud de EmpresaNet han sido realizadas con ??xito.'
              : 'La revisi??n del Bur?? de Cr??dito ha sido realizada con ??xito.'}
            <br />
            ??Analizaremos esta informaci??n para poder calcular tu oferta!
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
          <span className="sub color-blue-storm ">Proceso de autorizaci??n</span>
          <div className="row mt-3 card-white text-md-center ">
            <div className="col-xs-4">
              <Image src="/Buro2.jpg" alt="" width="90" height="90" />
            </div>
            <div className="mt-2 col-xs-8">
              <h4 className="color-blue-storm sub">Consultamos con Bur?? de cr??dito</h4>
              <p className="color-gray body3">Esto para conocer un poco m??s sobre ti</p>
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
                <a className="link">??Por qu?? te pedimos esto?</a>
              </p>
            </div>
          </div>
          <div className="row  mt-3 text-md-center ">
            <div className=" col-xs-4">
              <SvgNoGuardamosNada />
            </div>
            <div className="col-xs-8">
              <h4 className="color-blue-storm sub pb-auto">No guardamos nada</h4>
              <p className="color-gray body3">Despu??s de la consulta no guardaremos tus archivos</p>
            </div>
          </div>
        </div>
      </Modal>
      <div className="contedor-fixed">
        <div className="contedor-solicitud">
          <div className="container p-0 mt-4">
            <form onSubmit={formulario.handleSubmit} noValidate>
              <h4 className="color-blue-storm">Autorizaci??n para la consulta de Bur?? de Cr??dito</h4>
              <div className="row justify-content-between">
                <div className={` d-none d-md-block card-white text-md-center ${styles['icon-card']}`}>
                  <div className="container-svg-card">
                    <Image src="/Buro2.jpg" alt="" width="75" height="75" />
                  </div>
                  <div>
                    <h4 className="color-blue-storm sub">Consultamos con Bur?? de cr??dito</h4>
                    <p className="color-gray body3">Esto para conocer un poco m??s sobre ti</p>
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
                      <a className="link">??Por qu?? te pedimos esto?</a>
                    </p>
                  </div>
                </div>
                <div className={`d-none d-md-block card-white text-md-center ${styles['icon-card']}`}>
                  <div className="container-svg-card">
                    <SvgNoGuardamosNada />
                  </div>
                  <div>
                    <h4 className="color-blue-storm sub pb-auto">No guardamos nada</h4>
                    <p className="color-gray body3">Despu??s de la consulta no guardaremos tus archivos</p>
                  </div>
                </div>
              </div>

              <div className={styles['scrollable-container']}>
                <div>
                  <p className="d-none d-md-block sub color-blue-storm">
                    AUTORIZACI??N PARA SOLICITAR REPORTES DE CR??DITO PERSONAS FISICAS / PERSONAS MORALES
                  </p>
                  <div className="row d-block d-sm-none">
                    <a className="mt-1 sub link " onClick={() => setOpenModalMobile(true)}>
                      ??Cu??l es el proceso de autorizaci??n?
                    </a>
                    <Tooltip message="." position="top" />
                  </div>
                  <p className="mt-5 d-block d-sm-none sub color-blue-storm">
                    AUTORIZACI??N PARA SOLICITAR REPORTES DE CR??DITO PERSONAS FISICAS / PERSONAS MORALES
                  </p>
                  <div className="body2">
                    <p className="mb-4">
                      Por este conducto autorizo expresamente a{' '}
                      <span className="sub">BanCoppel, S.A., Instituci??n de Banca M??ltiple</span>, para que por conducto
                      de sus funcionarios facultados lleve a cabo investigaciones sobre mi comportamiento crediticio o
                      el de la empresa que represento en las sociedades de informaci??n crediticia que estime
                      conveniente.
                    </p>
                    <p className="mb-3">
                      Asimismo declaro que conozco la naturaleza de las sociedades de informaci??n crediticia y de la
                      informaci??n contenida en los reportes de cr??dito y reporte de cr??dito especial; declaro que
                      conozco la naturaleza alcance de la informaci??n que se solicitar??, del uso que{' '}
                      <span className="sub">BanCoppel, S.A., Instituci??n de banca M??ltiple</span>, har?? de tal
                      informaci??n y de que esta podr?? realizar consultas peri??dicas de mi historial crediticio o el de
                      la empresa que represento, consintiendo que esta autorizaci??n se encuentre vigente por un periodo
                      de 3 a??os contando a partir de la fecha de sus expedici??n y en todo caso durante el tiempo que
                      mantengamos relaci??n jur??dica.
                    </p>
                    <p className="mb-3">
                      En caso de que la solicitante sea una persona, declaro bajo protesta de decir verdad ser
                      Representante Legal de la empresa mencionada en esta autorizaci??n; manifestando que a la fecha de
                      firma de la presente autorizaci??n los poderes no me han sido revocados, limitados, ni modificados
                      en forma alguna.
                    </p>
                    <div className="row">
                      <div className="col-md-12 col-xs-12">
                        <TextField
                          name="nombreSolicitante"
                          maxlength={18}
                          type="text"
                          size="small"
                          label="Nombre del Solicitante (Persona F??sica o Raz??n Social de la persona Moral)"
                          disabled
                          {...formulario.getFieldMeta('nombreSolicitante')}
                          {...formulario.getFieldHelpers('nombreSolicitante')}
                        />
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <TextField
                          name="rfc"
                          maxlength={12}
                          type="text"
                          size="small"
                          label="RFC"
                          disabled
                          {...formulario.getFieldMeta('rfc')}
                          {...formulario.getFieldHelpers('rfc')}
                        />
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <TextField
                          name="fechaNacimiento"
                          maxlength={12}
                          type="text"
                          size="small"
                          label="Fecha de Nacimiento/Constituci??n:"
                          disabled
                          {...formulario.getFieldMeta('fechaNacimiento')}
                          {...formulario.getFieldHelpers('fechaNacimiento')}
                        />
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <TextField
                          name="domicilio"
                          maxlength={12}
                          type="text"
                          size="small"
                          label="Domicilio"
                          disabled
                          {...formulario.getFieldMeta('domicilio')}
                          {...formulario.getFieldHelpers('domicilio')}
                        />
                      </div>
                      <div className="col-md-3 col-xs-12">
                        <TextField
                          name="numeroExterior"
                          maxlength={12}
                          type="text"
                          size="small"
                          label="No. Exterior"
                          disabled
                          {...formulario.getFieldMeta('numeroExterior')}
                          {...formulario.getFieldHelpers('numeroExterior')}
                        />
                      </div>
                      <div className="col-md-3 col-xs-12">
                        <TextField
                          name="numeroInterior"
                          maxlength={12}
                          type="text"
                          size="small"
                          label="No. Interior"
                          disabled
                          {...formulario.getFieldMeta('numeroInterior')}
                          {...formulario.getFieldHelpers('numeroInterior')}
                        />
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <TextField
                          name="colonia"
                          maxlength={12}
                          type="text"
                          size="small"
                          label="Colonia"
                          disabled
                          {...formulario.getFieldMeta('colonia')}
                          {...formulario.getFieldHelpers('colonia')}
                        />
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <TextField
                          name="alcaldia"
                          maxlength={12}
                          type="text"
                          size="small"
                          label="Alcald??a/Municipio"
                          disabled
                          {...formulario.getFieldMeta('alcaldia')}
                          {...formulario.getFieldHelpers('alcaldia')}
                        />
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <TextField
                          name="codigoPostal"
                          maxlength={12}
                          type="text"
                          size="small"
                          label="C??digo Postal"
                          disabled
                          {...formulario.getFieldMeta('codigoPostal')}
                          {...formulario.getFieldHelpers('codigoPostal')}
                        />
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <TextField
                          name="estado"
                          maxlength={12}
                          type="text"
                          size="small"
                          label="Estado"
                          disabled
                          {...formulario.getFieldMeta('estado')}
                          {...formulario.getFieldHelpers('estado')}
                        />
                      </div>
                      <div className="col-md-12 col-xs-12">
                        <TextField
                          name="telefono"
                          type="tel"
                          size="small"
                          label="Tel??fono"
                          format="phone"
                          maxlength={12}
                          disabled
                          {...formulario.getFieldMeta('telefono')}
                          {...formulario.getFieldHelpers('telefono')}
                        />
                      </div>
                      <div className="col-md-12 col-xs-12">
                        <TextField
                          name="representanteLegal"
                          maxlength={12}
                          type="text"
                          size="small"
                          label="Representante legal (solo Persona Moral):"
                          disabled
                          {...formulario.getFieldMeta('representanteLegal')}
                          {...formulario.getFieldHelpers('representanteLegal')}
                        />
                      </div>
                      <div className="col-md-12 col-xs-12">
                        <TextField
                          name="fechaAutorizacion"
                          maxlength={12}
                          type="text"
                          size="small"
                          label="Fecha en que se autoriza la consulta:"
                          disabled
                          {...formulario.getFieldMeta('fechaAutorizacion')}
                          {...formulario.getFieldHelpers('fechaAutorizacion')}
                        />
                      </div>
                    </div>
                    <p>
                      Estoy consciente y acepto que este documento quede bajo propiedad de BanCoppel, S.A., Instituci??n
                      de banca M??ltiple, para efectos de control y cumplimiento del art??culo 28 de la Ley para Regular a
                      las Sociedades de Informaci??n Crediticia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row no-gutters mt-4">
                <CheckTextBox name="autorizacionFirmaElectronica" formulario={formulario}>
                  <p className="ml-1 body3 color-gray mb-0">
                    Firmar electr??nicamente la autorizaci??n de consulta de Bur?? de Cr??dito.
                  </p>
                </CheckTextBox>
              </div>
              <div className="row no-gutters">
                <CheckTextBox className="pt-5" name="autorizacionConsultaBancoppel" formulario={formulario}>
                  <p className="ml-1 body3 color-gray mb-0">
                    Autorizo a partir de este momento a BanCoppel a consultar mis antecedentes crediticios ante las
                    Sociedades de Informaci??n Crediticia que estime conveniente y durante el tiempo que mantengamos
                    relaci??n jur??dica, declarando que conoce la naturaleza, alcance y uso que BanCoppel har?? de tal
                    informaci??n.
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
