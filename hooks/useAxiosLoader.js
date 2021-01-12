import { useCallback, useEffect, useMemo, useState } from 'react';
import axiosIntance from '../config/AxiosConfig';

const useAxiosLoader = () => {
  const [counter, setCounter] = useState(0);
  const inc = useCallback(() => setCounter((counterInt) => counterInt + 1), [setCounter]); // add to counter
  const dec = useCallback(() => setCounter((counterInt) => counterInt - 1), [setCounter]); // remove from counter

  const interceptors = useMemo(
    () => ({
      request: (config) => {
        inc();
        return config;
      },
      response: (response) => {
        dec();
        return response;
      },
      error: (error) => {
        dec();
        return Promise.reject(error);
      },
    }),
    [inc, dec]
  ); // create the interceptors

  useEffect(() => {
    // add request interceptors
    const reqInterceptor = axiosIntance.interceptors.request.use(interceptors.request, interceptors.error);
    // add response interceptors
    const resInterceptor = axiosIntance.interceptors.response.use(interceptors.response, interceptors.error);
    return () => {
      // remove all intercepts when done
      axiosIntance.interceptors.request.eject(reqInterceptor);
      axiosIntance.interceptors.response.eject(resInterceptor);
    };
  }, [interceptors]);

  return [counter > 0, inc, dec];
};

export default useAxiosLoader;
