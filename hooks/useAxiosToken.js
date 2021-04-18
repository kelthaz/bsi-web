import { useEffect, useMemo } from 'react';
import axiosIntance from '../config/AxiosConfig';
import useCookie from './useCookie';

const useAxiosToken = () => {
  const [cookie, updateCookie] = useCookie('token', '');
  const [, updateCookiePassword] = useCookie('cambioPassword', 'false');

  const interceptors = useMemo(
    () => ({
      request: (config) => {
        config.headers.Authorization = cookie;
        return config;
      },
      response: (response) => {
        const token = response.headers.authorization;
        const cambiarPassword = response.headers['cambio-password'];
        if (token) {
          const { exp } = JSON.parse(atob(token.split('.')[1]));
          console.log(token);
          updateCookie(token, exp * 1000);
          updateCookiePassword(cambiarPassword, exp * 1000);
        }

        return response;
      },
      error: (error) => Promise.reject(error),
    }),
    []
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
};

export default useAxiosToken;
