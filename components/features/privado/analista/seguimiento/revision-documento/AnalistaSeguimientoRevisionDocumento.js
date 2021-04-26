import { useFormik } from 'formik';
import dynamic from 'next/dynamic';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { campoRequerido } from '../../../../../../constants/errors';
import Accordion from '../../../../../shared/accordion/Accordion';
import AprobarDocumento from '../../../shared/aprobar-documento/AprobarDocumento';
import CaracteristicasDocumento from '../../../shared/documentos/caracteristicas-documento/CaracteristicasDocumento';
import Reportes from '../../../shared/documentos/reportes/Reportes';
import VigenciaDocumento from '../../../shared/documentos/vigencia-documento/VigenciaDocumento';
import TextEditor from '../../../shared/text-editor/TextEditor';

const VisorPDF = dynamic(() => import('../../../../../shared/visor/VisorPDF'), {
  ssr: false,
});

const AnalistaSeguimientoRevisionDocumento = () => {
  const {
    perfilProspecto,
    informacionObligadoSolidario,
    informacionProspecto,
    informacionSolicitud,
    otraInformacion,
    documentosProspecto,
    documentosObligadoSolidario,
  } = useSelector((state) => state.prospecto);

  const formulario = useFormik({
    initialValues: {
      vigencia: '',
    },
    validationSchema: Yup.object({
      vigencia: Yup.string().required(campoRequerido),
    }),
    onSubmit: (values) => {},
  });

  const container = useRef();

  return (
    <div className="container-fluid px-0 h-100">
      <AprobarDocumento />
      <div className="row h-100">
        <div className="col-5">
          <TextEditor />
          <div className="card-accordion mt-3">
            <Accordion title="Vigencia del documento" color="blue" icon="arrow" expanded>
              <VigenciaDocumento formulario={formulario} nameFieldVigencia="vigencia" />
            </Accordion>
          </div>
          <div className="card-accordion mt-3">
            <Accordion title="Características del documento" color="blue" icon="arrow">
              <CaracteristicasDocumento />
            </Accordion>
          </div>
        </div>
        <div className="col-7 h-100" ref={container}>
          <VisorPDF container={container} />
        </div>
      </div>
    </div>
  );
};

export default AnalistaSeguimientoRevisionDocumento;
