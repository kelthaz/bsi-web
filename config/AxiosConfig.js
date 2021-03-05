import axios from 'axios';

console.log({value: process.env.NEXT_PUBLIC_API_BANCOPPEL_PYME_HOST})

const axiosIntance = axios.create({
  baseURL: 'https://bsi-cred-pyme-service-bsi-cr-pyme-web-stg.obe8.bancoppel-dev.openshiftapps.com/api',
  // baseURL: process.env.NEXT_PUBLIC_PYME_HOSTNAME,
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosIntance;
