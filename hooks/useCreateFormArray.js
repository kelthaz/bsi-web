import { useEffect } from 'react';

const useCreateFormArray = (formulario, conditionReset, dependencies) => {
  useEffect(() => {
    if (formulario.values.ejerceControlFisico === 'si') {
      formulario.setFieldValue(
        'controladosFisicos',
        [...Array(formulario.values.cantidadEjerceControlFisico.value).keys()].map(() => ({
          nombreNegocio: '',
          rfc: '',
          porcentajeDirecto: '',
          porcentajeIndirecto: '',
        }))
      );
    } else {
      formulario.setFieldValue('controladosFisicos', []);
    }
  }, [formulario.values.ejerceControlFisico, formulario.values.cantidadEjerceControlFisico]);
};

export default useCreateFormArray;
