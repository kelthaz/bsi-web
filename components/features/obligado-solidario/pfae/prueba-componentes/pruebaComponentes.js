import React from 'react';
import { useFormik } from 'formik';
import IndividualVideo from '../../../../shared/back-office-video/BackOfficeVideo';

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
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default pruebaComponentes;
