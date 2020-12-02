import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SvgLegalex from '../../../../svgs/SvgLegalex';
import styles from './StepNine.module.scss';
import SvgNoGuardamosNada from '../../../../svgs/icons-cards/SvgNoGuardamosNada';
import Modal from '../../../../shared/modal/Modal';
import SvgBuroRevision from '../../../../svgs/SvgBuroRevision';
import CheckTextBox from '../../../../shared/check-text-box/CheckTextBox';
import TextField from '../../../../shared/text-field/TextField';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import { aceptarTerminos } from '../../../../../constants/errors';

const StepNine = () => {
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const { datosEmpresa } = useSelector((state) => state.solicitud);
  const { datosPersonales } = useSelector((state) => state.solicitud);
  const router = useRouter();

  const dispatch = useDispatch();

  const { initialValues } = {
    initialValues: {
      nombreSolicitante: datosPersonales.primerNombre,
      rfc: datosEmpresa.curp,
      numeroExtension: false,
    },
  };
  const formulario = useFormik({
    initialValues,
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
    <div className="contedor-fixed">
      <div className={`contedor-solicitud ${styles['bg-white']}`}>
        <div className="container p-0 mt-4">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <Modal openModal={openConfirmation} setOpenModal={setOpenConfirmation}>
              <div className={styles['modal-container']}>
                <div className="d-flex justify-content-center pb-4">
                  <SvgBuroRevision />
                </div>
                <div>
                  <h4 className="color-blue-storm">¡Gracias Alejandra!</h4>
                  <p className="dark-gray body2">
                    La revisión del Buró de Crédito ha sido realizada con éxito.
                    <br />
                    ¡Analizaremos esta información para poder calcular tu oferta!
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn-medium" type="submit" aria-label="Avanzar">
                    <span>Continuar</span>
                  </button>
                </div>
              </div>
            </Modal>
            <h4 className="color-blue-storm">Autorización para la consulta de Buró de Crédito</h4>
            <div className="row justify-content-between">
              <div className={`card-white text-md-center ${styles['icon-card']}`}>
                <div className="container-svg-card">
                  <img src="/buro.png" alt="Buro de crédito" />
                </div>
                <div>
                  <h4 className="color-blue-storm sub">Consultamos con Buró de crédito</h4>
                  <p className="color-gray body3">Esto para conocer un poco más sobre ti</p>
                </div>
              </div>
              <div className={`card-white text-md-center ${styles['icon-card']}`}>
                <div className="container-svg-card">
                  <SvgLegalex />
                </div>
                <div>
                  <h4 className="color-blue-storm sub">Firma segura con Legalex GS</h4>
                  <p className="color-gray body3">
                    Puedes firmar de forma segura con tu e.firma
                    <br />
                    <a className="body3 link">¿Por qué te pedimos esto?</a>
                  </p>
                </div>
              </div>
              <div className={`card-white text-md-center ${styles['icon-card']}`}>
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
                <p className="sub color-blue-storm">
                  AUTORIZACIÓN PARA SOLICITAR REPORTES DE CRÉDITO PERSONAS FISICAS / PERSONAS MORALES
                </p>
                <div className="body2">
                  <p className="mb-4">
                    Por este conducto autorizo expresamente a BanCoppel, S.A., Institución de Banca Múltiple, para que
                    por conducto de sus funcionarios facultados lleve a cabo investigaciones sobre mi comportamiento
                    crediticio o el de la empresa que represento en las sociedades de información crediticia que estime
                    conveniente.
                  </p>
                  <p className="mb-4">
                    Asimismo declaro que conozco la naturaleza de las sociedades de información crediticia y de la
                    información contenida en los reportes de crédito y reporte de crédito especial; declaro que conozco
                    la naturaleza alcance de la información que se solicitará, del uso que BanCoppel, S.A., Institución
                    de banca Múltiple, hará de tal informacióny de que esta podrá realizar consultas periódicas de mi
                    historial crediticio o el de la empresa que represento, consintiendo que esta autorización se
                    encuentre vigente por un periodo de 3 años contando a partir de la fecha de sus expedición y en todo
                    caso durante el tiempo que mantengamos relación jurídica.
                  </p>
                  <div className="row">
                    <div className="col-12">
                      <TextField
                        name="nombreSolicitante"
                        value={datosPersonales.primerNombre}
                        maxlength={18}
                        formulario={formulario}
                        type="text"
                        size="small"
                        label="Nombre del Solicitante (Persona Física o Razón Social de la persona Moral)"
                      />
                    </div>
                    <div className="col-6">
                      <TextField
                        name="rfc"
                        value={datosPersonales.rfc}
                        maxlength={12}
                        formulario={formulario}
                        type="text"
                        size="small"
                        label="RFC"
                      />
                    </div>
                    <div className="col-6">
                      <TextField
                        name="fechaNacimiento"
                        maxlength={12}
                        formulario={formulario}
                        type="text"
                        size="small"
                        label="Fecha de Nacimiento/Constitución:"
                      />
                    </div>
                    <div className="col-6">
                      <TextField
                        name="domicilio"
                        maxlength={12}
                        formulario={formulario}
                        type="text"
                        size="small"
                        label="Domicilio"
                      />
                    </div>
                    <div className="col-3">
                      <TextField
                        name="numeroExtension"
                        maxlength={12}
                        formulario={formulario}
                        type="text"
                        size="small"
                        label="No. Ext."
                      />
                    </div>
                    <div className="col-3">
                      <TextField
                        name="numeroInterno"
                        maxlength={12}
                        formulario={formulario}
                        type="text"
                        size="small"
                        label="No. Int."
                      />
                    </div>
                    <div className="col-6">
                      <TextField
                        name="colonia"
                        maxlength={12}
                        formulario={formulario}
                        type="text"
                        size="small"
                        label="Colonia"
                      />
                    </div>
                    <div className="col-6">
                      <TextField
                        name="alcaldia"
                        maxlength={12}
                        formulario={formulario}
                        type="text"
                        size="small"
                        label="Alcaldía/Municipio"
                      />
                    </div>
                    <div className="col-6">
                      <TextField
                        name="codigoPostal"
                        maxlength={12}
                        formulario={formulario}
                        type="text"
                        size="small"
                        label="Código Postal"
                      />
                    </div>
                    <div className="col-6">
                      <TextField
                        name="estado"
                        maxlength={12}
                        formulario={formulario}
                        type="text"
                        size="small"
                        label="Estado"
                      />
                    </div>
                    <div className="col-12">
                      <TextField
                        name="telefono"
                        formulario={formulario}
                        type="tel"
                        size="small"
                        label="Teléfono"
                        format="phone"
                        maxlength={12}
                      />
                    </div>
                    <div className="col-12">
                      <TextField
                        name="representanteLegal"
                        maxlength={12}
                        formulario={formulario}
                        type="text"
                        size="small"
                        label="Representante legal (solo Persona Moral):"
                      />
                    </div>
                    <div className="col-12">
                      <TextField
                        name="fechaAutorizacion"
                        maxlength={12}
                        formulario={formulario}
                        type="text"
                        size="small"
                        label="Fecha en que se autoriza la consulta:"
                      />
                    </div>
                  </div>
                  <p>
                    En caso de que la solicitante sea una persona, declaro bajo protesta de decir verdad ser
                    Representante Legal de la empresa mencionada en esta autorización; manifestando que a la fecha de
                    firma de la presente autorización los poderes no me han sido revocados, limitados, ni modificados en
                    forma alguna.
                  </p>
                  <p>
                    Estoy consciente y acepto que este documento quede bajo propiedad de BanCoppel, S.A., Institución de
                    banca Múltiple, para efectos de control y cumplimiento del artículo 28 de la Ley para Regular a las
                    Sociedades de Información Crediticia.
                  </p>
                </div>
              </div>
            </div>

            <div className="row no-gutters mt-4">
              <CheckTextBox name="firmaElectronica" formulario={formulario}>
                <p className="body3 color-gray mb-0">
                  Fimar electronicamente la autorización de consulta de Buro de Crédito.
                </p>
              </CheckTextBox>
            </div>
            <div className="row no-gutters">
              <CheckTextBox name="autorizacion" formulario={formulario}>
                <p className="body3 color-gray mb-0">
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
  );
};

export default StepNine;
