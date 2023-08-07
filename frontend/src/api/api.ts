import axios from './axios';
import loginRequired from './token';

const apiroutes = {
  template: {
    getTemplate: () => axios.get('/template/')
  },
  users: {
    login: (data: any) => axios.post('/usuario/login/', data),
    logout: (data: any) => axios.post('/usuario/logout/', data),
    token: (data: any) => axios.post('/usuario/token/', data),
    refreshToken: (data: any) => axios.post('/usuario/token/refresh', data),
  },
  empresa: {
    getEmpresas: loginRequired((params: any) => axios.get('/empresa/',{params: params})),
    create: loginRequired((data: any) => axios.post('/empresa/', data)),
    update: loginRequired((CNPJ: string, data: any) => axios.put(`/empresa/${CNPJ}/`, data)),
    delete: loginRequired((CNPJ: string) => axios.delete(`/empresa/${CNPJ}`)),
  }
};

export default apiroutes;
