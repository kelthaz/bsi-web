import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import SvgPersonaFisicaActividadFisica from '../../../../svgs/SvgPersonaFisicaActividadFisica';
import SvgPersonaMoral from '../../../../svgs/SvgPersonaMoral';

const Step2 = () => {
  const personaFisica = 'Persona Física con Actividad Empresarial';
  const personaMoral = 'Persona Moral';
  const [selectPersonType, setSelectPersonType] = useState();
  const { datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(
      nextStepDatosPersonales({
        datosPersonales: {
          ...datosPersonales,
          personType: selectPersonType,
          validSteps: [...datosPersonales.validSteps, 2],
          currentStep: 3,
        },
      })
    );
  };

  return (
    <form>
      <h2 className="color-blue-storm">¡Hola, {datosPersonales.name}!</h2>
      <p className="color-dark-gray sub">Conozcámonos un poco más, ¿Qué tipo de persona eres?</p>

      <div className="row my-3">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <button
            type="button"
            className={`card-simple-white-svg card-button ${
              selectPersonType === personaFisica && 'card-selected-blue-sky'
            }`}
            onClick={() => setSelectPersonType(personaFisica)}
          >
            <SvgPersonaFisicaActividadFisica />
            <p>{personaFisica}</p>
          </button>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <button
            type="button"
            className={`card-simple-white-svg card-button ${
              selectPersonType === personaMoral && 'card-selected-blue-sky'
            }`}
            onClick={() => setSelectPersonType(personaMoral)}
          >
            <SvgPersonaMoral />
            <p>{personaMoral}</p>
          </button>
        </div>
      </div>
      <p className="color-gray-dark sub">
        ¿Eres persona física? ¡Adquiere tu crédito en,&nbsp;
        <a className="color-blue-sky">BanCoppel Personas!</a>
      </p>
      <div className="flex-column-center-config">
        <button
          type="button"
          className="cicle-button-blue my-3"
          aria-label="Avanzar"
          onClick={handleNext}
          disabled={!selectPersonType}
        />
      </div>
    </form>
  );
};

export default Step2;
