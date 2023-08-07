import axios from './axios';
import api from './api';

const loginRequired = (fn: (...args: any[]) => Promise<any>) => async (...args: any[]) => {

    let token = localStorage.getItem('access');

    if (!token || token == '') {
        const refreshToken = localStorage.getItem('refresh');
        if (refreshToken) {
            const response = await api.users.refreshToken({ refreshToken });
            token = response.data.access;
            localStorage.setItem('token', token ?? '');
        } else {
            localStorage.removeItem('token');
        }
    }

    if (token || token === '') {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    const response = await fn(...args);
    return response;

};

export default loginRequired;
