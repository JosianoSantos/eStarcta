import axios from './axios';
import api from './api';

const loginRequired = (fn: (...args: any[]) => Promise<any>) => async (...args: any[]) => {

    try {
        let token = localStorage.getItem('token');

        if (!token) {
            const refreshToken = localStorage.getItem('refreshToken');
            if (refreshToken) {
                const response = await api.users.refreshToken({ refreshToken });
                token = response.data.access;
                localStorage.setItem('token', token ?? '');
            }
        }

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        const response = await fn(...args);
        return response;
    } catch (error) {
        throw error;
    }
};

export default loginRequired;
