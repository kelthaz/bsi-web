import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { campoRequerido } from '../../../../../../constants/errors';
import { DESEMBOLSO, ALTA_DE_LINEA } from '../../../../../../constants/contrato';
import Modal from '../../../../../shared/modal/Modal';
import TextField from '../../../../../shared/text-field/TextField';

const AltaLineaClienteDesembolso = ({ estadoContrato }) => {
  const [openAltaDeLineaModal, setOpenAltaDeLineaModal] = useState(false);

  const { title, textParagraph, textButton, openTextButton, inputText } = (() => {
    switch (estadoContrato) {
      case DESEMBOLSO:
        return {
          title: 'Confirmar Desembolso',
          textParagraph: [
            'Salvador, una vez que hayas solicitado al área Comercial el desembolso, haz click en “Confirmar Desembolso” para terminar con este caso.',
            'Se notificará entonces al Prospecto cuando su dinero sea depositado.',
          ],
          textButton: 'Confirmar desembolso',
          openTextButton: 'Confirmar desembolso',
          inputText: '',
        };

      case ALTA_DE_LINEA:
        return {
          title: 'Realizar alta de línea',
          textParagraph: [
            'Salvador, inicia el proceso de Alta de Línea en la plataforma correspondiente (Orion), una vez que concluyas vuelve a esta plataforma, ingresa la información que generaste y haz click en “Confrmar Alta de Línea” para concluir el proceso.',
            'Se notificará entonces al área de Mesa de Control para autorizar la Línea.',
          ],
          textButton: 'Confirmar alta de línea',
          openTextButton: 'Alta de Línea',
          inputText: 'Alta de línea',
        };

      default:
        return {
          title: 'Realizar Alta de Cliente',
          textParagraph: [
            'Salvador, inicia el proceso de Alta de Cliente en la plataforma correspondiente (Orion), una vez que concluyas vuelve a esta plataforma, ingresa la información que generaste y haz click en “Confrmar Alta de Cliente” para concluir el proceso.',
            'Se notificará entonces al Prospecto para que agende su Visita Ocular y Firma de Contrato.',
          ],
          textButton: 'Confirmar alta',
          openTextButton: 'Realizar alta de cliente',
          inputText: 'Alta de cliente',
        };
    }
  })();

  const formulario = useFormik({
    initialValues: {
      alta: '',
    },
    validationSchema: Yup.object({
      alta: Yup.string().required(campoRequerido),
    }),
    onSubmit: async (values) => {},
  });

  return (
    <>
      <Modal openModal={openAltaDeLineaModal} setOpenModal={setOpenAltaDeLineaModal}>
        <div className="modal-portal-privado">
          <h4 className="color-blue-storm">{title}</h4>

          {textParagraph.map((paragraph) => (
            <p className="color-gray body3">{paragraph}</p>
          ))}

          {inputText && (
            <div className="row d-flex justify-content-center">
              <div className="col-6">
                <TextField
                  name="rfc"
                  format="number"
                  maxlength={6}
                  type="text"
                  size="small"
                  label={inputText}
                  {...formulario.getFieldMeta('alta')}
                  {...formulario.getFieldHelpers('alta')}
                />
              </div>
            </div>
          )}

          <div className="flex-column-center-config mt-2">
            <button type="submit" className="btn-big">
              {textButton}
            </button>
          </div>
        </div>
      </Modal>
      <button type="button" className="btn-big" onClick={() => setOpenAltaDeLineaModal(true)}>
        {openTextButton}
      </button>
    </>
  );
};

export default AltaLineaClienteDesembolso;
