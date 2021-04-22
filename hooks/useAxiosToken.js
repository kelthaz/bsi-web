import { useEffect, useMemo } from 'react';
import axiosIntance from '../config/AxiosConfig';
import { getCookie, setCookie } from '../helpers/cookie';

const useAxiosToken = () => {
  const interceptors = useMemo(
    () => ({
      request: (config) => {
        const cookie = getCookie('token');
        console.log('--------------->', cookie);
        if (cookie) {
          config.headers.Authorization = cookie;
        }

        return config;
      },
      response: (response) => {
        const token = response.headers.authorization;
        const cambiarPassword = response.headers['cambio-password'];
        if (token) {
          const { exp } = JSON.parse(atob(token.split('.')[1]));
          setCookie('token', token, exp * 1000);
          setCookie('cambioPassword', cambiarPassword, exp * 1000);
        }

        return response;
      },
      error: (error) => Promise.reject(error),
    }),
    []
  );

  useEffect(() => {
    const reqInterceptor = axiosIntance.interceptors.request.use(interceptors.request, interceptors.error);
    const resInterceptor = axiosIntance.interceptors.response.use(interceptors.response, interceptors.error);

    return () => {
      axiosIntance.interceptors.request.eject(reqInterceptor);
      axiosIntance.interceptors.response.eject(resInterceptor);
    };
  }, []);
};

export default useAxiosToken;
