import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { campoRequerido } from '../../../../../../constants/errors';
import Modal from '../../../../../shared/modal/Modal';
import TextField from '../../../../../shared/text-field/TextField';

const MesaHeader = () => {
  const [openAutorizacionLinea, setOpenAutorizacionLinea] = useState(false);

  const formulario = useFormik({
    initialValues: {
      lineaAutorizada: '',
    },
    validationSchema: Yup.object({
      lineaAutorizada: Yup.string().required(campoRequerido),
    }),
    onSubmit: async (values) => {},
  });

  return (
    <>
      <Modal openModal={openAutorizacionLinea} setOpenModal={setOpenAutorizacionLinea}>
        <div className="modal-portal-privado">
          <h4 className="color-blue-storm">Autorizando línea</h4>

          <p className="color-gray body3">
            Roberto, inicia el proceso de Autorización de Línea en la plataforma correspondiente (Orion), una vez que
            concluyas vuelve a esta plataforma, ingresa la información que generaste y haz clic en “Confirmar Línea”
            para concluir el proceso.
          </p>

          <p className="color-gray body3">
            Se notificará entonces al área de seguimiento para que realice el desembolso.
          </p>

          <TextField
            name="lineaAutorizada"
            format="number"
            maxlength={11}
            type="text"
            size="small"
            label="Número de línea autorizada"
            {...formulario.getFieldMeta('lineaAutorizada')}
            {...formulario.getFieldHelpers('lineaAutorizada')}
          />

          <div className="flex-column-center-config mt-2">
            <button type="submit" className="btn-big">
              Confirmar datos
            </button>
          </div>
        </div>
      </Modal>

      <button type="button" className="btn-big" onClick={() => setOpenAutorizacionLinea(true)}>
        Autorización de línea
      </button>
    </>
  );
};

export default MesaHeader;
