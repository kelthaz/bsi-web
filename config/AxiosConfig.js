import axios from 'axios';

const axiosIntance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BANCOPPEL_PYME_HOST,
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosIntance;
