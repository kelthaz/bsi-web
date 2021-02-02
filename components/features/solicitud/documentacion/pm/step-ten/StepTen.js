import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';

const StepTen = () => {
  const { documentacion } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const formulario = useFormik({
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'documentacion', step: '10' },
          documentacion: { ...documentacion, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/documentacion/agradecimiento');
    },
  });

  return (
    <>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud">
          <div className="container">
            <form onSubmit={formulario.handleSubmit} noValidate>
              <div className="row ">
                <h2 className="color-blue-storm">Para el último paso</h2>
                <p>Te explicaremos como realizar la toma de tus biométricos, ¡es muy sencillo! </p>
                <p className="mt-2">
                  Las instrucciones se enviarán a tu correo electrónico. Es muy importante que accedas al proceso desde
                  tu télefono celular.
                </p>
                <p className="mt-2">Deberás tener a la mano:</p>
                <div className="mt-3 card-simple-blue-light list-onboarding">
                  <ul>
                    <li>Identificación oficial</li>{' '}
                  </ul>
                </div>
              </div>
              <div className="flex-column-center-config mt-2">
                <Link href="/solicitud/[tab]/[step]" as="/solicitud/documentacion/agradecimiento">
                  <button type="submit" className="btn-big">
                    Enviar instrucciones
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepTen;
