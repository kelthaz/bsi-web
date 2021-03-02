import { useCallback, useEffect, useMemo, useState } from 'react';
import axiosIntance from '../config/AxiosConfig';

const useAxiosErrors = () => {
  const [errors, setErrors] = useState([]);
  const addError = useCallback((error) => setErrors((errorsInt) => [...errorsInt, error]), [setErrors]);
  const removeError = useCallback(
    () =>
      setErrors((errorsInt) => {
        errorsInt.shift();
        return errorsInt;
      }),
    [setErrors]
  );

  const interceptors = useMemo(
    () => ({
      request: (config) => config,
      response: (response) => response,
      error: (error) => {
        const { message } = error.response.data;
        if (Array.isArray(message)) {
          addError(message);
        } else {
          addError(['Error no definido.']);
        }

        return Promise.reject(error);
      },
    }),
    [addError, removeError]
  );

  useEffect(() => {
    const reqInterceptor = axiosIntance.interceptors.request.use(interceptors.request, interceptors.error);
    const resInterceptor = axiosIntance.interceptors.response.use(interceptors.response, interceptors.error);
    return () => {
      axiosIntance.interceptors.request.eject(reqInterceptor);
      axiosIntance.interceptors.response.eject(resInterceptor);
    };
  }, [interceptors]);

  return [errors, removeError];
};

export default useAxiosErrors;
