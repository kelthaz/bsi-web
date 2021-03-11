import React from 'react';
import { useFormik } from 'formik';
import IndividualVideo from '../../../../shared/back-office-video/BackOfficeVideo';
import ProgressBar from '../../../../shared/progressbar/ProgressBar';
import NextStepsTable from '../../../../shared/next-steps-table/NextStepsTable';
import CardBackOffices from '../../../../shared/back-office-card/BackOfficeCard';

const pruebaComponentes = () => {
  const formulario = useFormik({});

  return (
    <>
      <section className="section-white-relative">
        <div className="container w-100 p-3">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <div className="row">
              <div className="col-md-3 col-xs-12 pr-1">
                <IndividualVideo width={210} idVideo={1} src="https://www.youtube.com/embed/PMP6zcY6Fcc" />
              </div>
              <div className="col-md-3 col-xs-12 pr-1">
                <IndividualVideo width={210} idVideo={2} src="https://www.youtube.com/embed/ppIJmaa9ue8" />
              </div>
              <div className="col-md-4 col-xs-12">
                <IndividualVideo width={210} idVideo={3} src="https://www.youtube.com/embed/VayHlVwGmGs" />
              </div>
              <div className="col-md-4 col-xs-12">
                <ProgressBar value="50" />
              </div>
              <div className="mt-4 col-md-12 col-xs-12">
                <NextStepsTable />
              </div>

              <div className="ml-5">
                <CardBackOffices title="Validación de expediente" subTitle="Siguiente paso" />
              </div>
              <div className="ml-5">
                <CardBackOffices
                  title="$1,500,000.00"
                  subTitle="Monto autorizado"
                  haveButton={false}
                  iconoAgendar={false}
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default pruebaComponentes;
