import React from 'react';
import TextField from '../../../../shared/text-field/TextField';

const Step1 = () => (
  <form>
    <h2>Para comenzar</h2>
    <p>Cuéntanos, ¿Cómo te llamas?</p>

    <div className="row no-gutters">
      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <p className="input">Mi nombre es</p>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
        <TextField type="text" size="big" label="Nombre" />
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <TextField type="text" size="big" label="Nombre" />
      </div>
    </div>
    <div className="row no-gutters">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
        <TextField type="text" size="big" label="Apellido paterno" />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <TextField type="text" size="big" label="Apellido materno" />
      </div>
    </div>

    <button type="button" className="cicle-button-blue" aria-label="Avanzar" />
  </form>
);

export default Step1;
