import React from 'react';
import SvgPersonaFisicaActividadFisica from '../../../../svgs/SvgPersonaFisicaActividadFisica';
import SvgPersonaMoral from '../../../../svgs/SvgPersonaMoral';

const Step2 = () => (
  <form>
    <h2 className="color-blue-storm">¡Hola, Alejandra!</h2>
    <p className="color-dark-gray sub">Conozcámonos un poco más, ¿Qué tipo de persona eres?</p>

    <div className="row my-3">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div className="card-simple-white-svg">
          <SvgPersonaFisicaActividadFisica />
          <p>Persona Física con Actividad Empresarial</p>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div className="card-simple-white-svg">
          <SvgPersonaMoral />
          <p>Persona Moral</p>
        </div>
      </div>
    </div>
    <p className="color-gray-dark sub">
      ¿Eres persona física? ¡Adquiere tu crédito en,&nbsp;
      <a className="color-blue-sky">BanCoppel Personas!</a>
    </p>
    <div className="flex-column-center-config">
      <button type="button" className="cicle-button-blue my-3" aria-label="Avanzar" />
    </div>
  </form>
);

export default Step2;
