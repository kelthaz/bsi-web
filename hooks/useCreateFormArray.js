import { useEffect } from 'react';

const useCreateFormArray = (formulario, conditionReset, dependencies, obj, nameArray, nameNumberItems) => {
  useEffect(() => {
    if (conditionReset) {
      formulario.setFieldValue(
        nameArray,
        [...Array(formulario.values[nameNumberItems].value).keys()].map((index) =>
          formulario.values[nameArray][index] ? { ...formulario.values[nameArray][index] } : { index, ...obj }
        )
      );
    } else {
      formulario.setFieldValue(nameArray, []);
    }
  }, [...dependencies]);
};

export default useCreateFormArray;
