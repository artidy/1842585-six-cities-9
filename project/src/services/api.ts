import axios, {AxiosInstance} from 'axios';

const BACKEND_URL = 'https://9.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

function createAPI(): AxiosInstance {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
}

export {createAPI};
