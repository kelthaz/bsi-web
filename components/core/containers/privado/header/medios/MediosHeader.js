import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { campoRequerido } from '../../../../../../constants/errors';
import { ALTA_DE_CUENTA_CLIENTE, DESBLOQUEAR_CUENTA } from '../../../../../../constants/contrato';
import Modal from '../../../../../shared/modal/Modal';
import TextField from '../../../../../shared/text-field/TextField';
import CheckBox from '../../../../../shared/check-box/CheckBox';
import SvgInformation from '../../../../../svgs/SvgInformation';

const MediosHeader = ({ estadoContrato = DESBLOQUEAR_CUENTA }) => {
  const [openAltaCuentaCliente, setOpenAltaCuentaCliente] = useState(false);
  const [openDesbloquearCuenta, setOpenDesbloquearCuenta] = useState(false);

  const formulario = useFormik({
    initialValues:
      estadoContrato === ALTA_DE_CUENTA_CLIENTE
        ? {
            numeroCuenta: '',
            numeroCliente: '',
          }
        : {
            desbloqueoCuenta: false,
            generacionToken: false,
            envioToken: false,
          },
    validationSchema:
      estadoContrato === ALTA_DE_CUENTA_CLIENTE
        ? Yup.object({
            numeroCuenta: Yup.string().required(campoRequerido),
            numeroCliente: Yup.string().required(campoRequerido),
          })
        : Yup.object({
            desbloqueoCuenta: Yup.boolean().oneOf([true], campoRequerido),
            generacionToken: Yup.boolean().oneOf([true], campoRequerido),
            envioToken: Yup.boolean().oneOf([true], campoRequerido),
          }),
    onSubmit: async (values) => {},
  });
  console.log(formulario);
  const rightComponent = (() => {
    switch (estadoContrato) {
      case ALTA_DE_CUENTA_CLIENTE:
        return (
          <button type="button" className="btn-big" onClick={() => setOpenAltaCuentaCliente(true)}>
            Alta de cuenta y cliente
          </button>
        );

      case DESBLOQUEAR_CUENTA:
        return (
          <button type="button" className="btn-big" onClick={() => setOpenDesbloquearCuenta(true)}>
            Desbloquear cuenta
          </button>
        );

      default:
        return (
          <div className="card-blue-sky d-flex flex-row">
            <SvgInformation className="svg-fill-white svg-size-24" />
            <span className="color-white body2 pl-3">Estatus: Cuenta y cliente generados. Cuenta bloqueada.</span>
          </div>
        );
    }
  })();

  return (
    <>
      <Modal openModal={openAltaCuentaCliente} setOpenModal={setOpenAltaCuentaCliente}>
        <div className="modal-portal-privado">
          <h4 className="color-blue-storm">Alta de cuenta y cliente</h4>

          <p className="color-gray body3">
            Karina, inicia el proceso de Alta de cuenta y cliente en la plataforma correspondiente (SOC), una vez que
            concluyas vuelve a esta plataforma, ingresa la información que generaste y haz clic en “Confrmar datos” aquí
            para concluir el proceso.
          </p>

          <TextField
            name="numeroCuenta"
            format="number"
            maxlength={11}
            type="text"
            size="small"
            label="Número de cuenta"
            {...formulario.getFieldMeta('numeroCuenta')}
            {...formulario.getFieldHelpers('numeroCuenta')}
          />

          <TextField
            name="numeroCliente"
            format="number"
            maxlength={9}
            type="text"
            size="small"
            label="Número de cliente"
            {...formulario.getFieldMeta('numeroCliente')}
            {...formulario.getFieldHelpers('numeroCliente')}
          />

          <div className="flex-column-center-config mt-2">
            <button type="submit" className="btn-big">
              Confirmar datos
            </button>
          </div>
        </div>
      </Modal>
      <Modal openModal={openDesbloquearCuenta} setOpenModal={setOpenDesbloquearCuenta}>
        <div className="modal-portal-privado">
          <h4 className="color-blue-storm">Desbloqueo de cuenta</h4>
          <p className="color-gray body3">
            Karina, para continuar con el proceso haz click en el botón de confirmación en cada actividad que hayas
            realizado para esta solicitud.
          </p>
          <p className="color-gray body3">
            Al terminar haz click en “Confirmar Desbloqueo de Cuenta”, se notificará entonces al área de seguimiento
            para realizar el Alta de la Línea
          </p>

          <div className="row d-flex justify-content-center py-3 bot-line">
            <div className="col-11">
              <p className="m-0 body2 color-gray-dark">Desbloqueo de cuenta en SOC</p>
              <p className="m-0 body3 color-blue-storm">En la palataforma correspondiente</p>
            </div>
            <div className="col-1">
              <CheckBox name="desbloqueoCuenta" {...formulario.getFieldProps('desbloqueoCuenta')} />
            </div>
          </div>

          <div className="row d-flex justify-content-center py-3 bot-line">
            <div className="col-11">
              <p className="m-0 body2 color-gray-dark">Generación de Token</p>
              <p className="m-0 body3 color-blue-storm">En la palataforma correspondiente</p>
            </div>
            <div className="col-1">
              <CheckBox name="generacionToken" {...formulario.getFieldProps('generacionToken')} />
            </div>
          </div>

          <div className="row d-flex justify-content-center py-3">
            <div className="col-11">
              <p className="m-0 body2 color-gray-dark">Envío de Token</p>
              <p className="m-0 body3 color-blue-storm">
                Envía el token a Alejandra Aguilar Ruiz por mensajería a: Avenida Santa Fe 510 Interior 401, 05000,
                Cuajimalpa, CDMX También puede recibir: María Lima González
              </p>
            </div>
            <div className="col-1">
              <CheckBox name="envioToken" {...formulario.getFieldProps('envioToken')} />
            </div>
          </div>

          <div className="flex-column-center-config mt-2">
            <button type="submit" className="btn-big">
              Confirmar desbloqueo
            </button>
          </div>
        </div>
      </Modal>

      {rightComponent}
    </>
  );
};

export default MediosHeader;
