import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import SvgPersonaFisicaActividadFisica from '../../../../svgs/SvgPersonaFisicaActividadFisica';
import SvgPersonaMoral from '../../../../svgs/SvgPersonaMoral';
const StepTwo = () => {
  const personaFisica = 'Persona Física con Actividad Empresarial';
  const personaMoral = 'Persona Moral';
  const [selectPersonType, setSelectPersonType] = useState();
  const { currentStep, datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleNext = () => {
    dispatch(
      nextStepDatosPersonales({
        currentStep: { ...currentStep, step: '3' },
        datosPersonales: {
          ...datosPersonales,
          personType: selectPersonType,
        },
      })
    );
    router.push('/solicitud/[tab]/[step]', '/solicitud/datos-personales/3');
  };

  return (
    <div className="container">
      <div className="contedor-solicitud">
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
      </div>
    </div>
  );
};

export default StepTwo;
