import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import Link from 'next/link';

const StepEight = () => {
  const { datosEmpresa } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const formulario = useFormik({
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'datos-empresa', step: '5' },
          datosEmpresa: { ...datosEmpresa, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/datos-empresa/7');
    },
    validateOnMount: true,
  });

  return (
    <div className="contedor-fixed">
      <div className="contedor-solicitud ">
        <div className="container p-0">
          <div className="row mt-xs-5 mt-md-0">
            <div className="col-md-12 col-xs-12 mt-xs-5 mt-md-0">
              <h2 className="text-md-left color-blue-storm mt-5">¡Gracias por contarnos sobre ti!</h2>
              <p className="body2 text-md-left color-dark-gray sub mt-4">
                Ahora necesitamos tu autorización para la Consulta de Buró de Crédito, por lo que deberás tener a la
                mano tu clave CIEC y tu e.firma.
              </p>
            </div>
            <div className="text-center offset-md-4 offset-xs-3 my-3 ">
              <Link href="/simulador">
                <button className="btn-medium" type="submit" aria-label="Avanzar">
                  <span>De acuerdo</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StepEight;
