import axios from 'axios';
import Router from 'next/router';

const instance = axios.create({
  baseURL: process.env.BACKEND_URL
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    debugger
    if (error?.message?.includes('status code 401')) {
      localStorage.removeItem('token')
      Router.replace('/login');
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default instance;
