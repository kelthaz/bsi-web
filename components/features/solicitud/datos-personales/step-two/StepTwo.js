import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import SvgPersonaFisicaActividadFisica from '../../../../svgs/SvgPersonaFisicaActividadFisica';
import SvgPersonaMoral from '../../../../svgs/SvgPersonaMoral';

const StepTwo = () => {
  const personaFisica = 'Persona Física con Actividad Empresarial';
  const personaMoral = 'Persona Moral';
  const { currentStep, datosPersonales } = useSelector((state) => state.solicitud);
  const [selectPersonType, setSelectPersonType] = useState(datosPersonales.tipoPersona);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleNext = () => {
    dispatch(
      nextStepDatosPersonales({
        currentStep: { ...currentStep, step: '3' },
        datosPersonales: {
          ...datosPersonales,
          tipoPersona: selectPersonType,
        },
      })
    );
    router.push('/solicitud/[tab]/[step]', '/solicitud/datos-personales/3');
  };

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container p-0">
          <form>
            <h2 className="color-blue-storm">
              ¡Hola, {datosPersonales.name} {datosPersonales.segundoNombre}!
            </h2>
            <p className="color-dark-gray sub">Conozcámonos un poco más, ¿Qué tipo de persona eres?</p>

            <div className="row my-3">
              <div className="col-lg-6 col-md-6 col-sm-12 pl-lg-5 pl-md-5 col-xs-12 mb-sm-2 mb-xs-2">
                <button
                  type="button"
                  className={`card-simple-white-svg card-button ${
                    selectPersonType === personaFisica && 'card-selected-blue-sky'
                  }`}
                  onClick={() => setSelectPersonType(personaFisica)}
                >
                  <div>
                    <SvgPersonaFisicaActividadFisica />
                  </div>

                  <p className="px-md-5 px-lg-5">{personaFisica}</p>
                </button>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-5 pr-md-5">
                <button
                  type="button"
                  className={`card-simple-white-svg card-button ${
                    selectPersonType === personaMoral && 'card-selected-blue-sky'
                  }`}
                  onClick={() => setSelectPersonType(personaMoral)}
                >
                  <div>
                    <SvgPersonaMoral />
                  </div>

                  <p>{personaMoral}</p>
                </button>
              </div>
            </div>
            <p className="color-gray-dark sub">
              <span>¿Eres persona física? ¡Adquiere tu crédito en </span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.bancoppel.com/ahorro_bcopp/cuenta_efectiva.html"
                className="link"
              >
                BanCoppel Personas!
              </a>
            </p>
            <div className="flex-column-center-config pt-sm-5 pt-xs-5 pt-md-0 pt-lg-0">
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
    </div>
  );
};

export default StepTwo;
