import React from 'react';

const Step1 = () => (
  <form>
    <h2>Para comenzar</h2>
    <p>Cuéntanos, ¿Cómo te llamas?</p>

    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <p>Mi nombre es</p>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <input />
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <input />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <input />
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <input />
      </div>
    </div>

    <button type="button">avanzar</button>
  </form>
);

export default Step1;
