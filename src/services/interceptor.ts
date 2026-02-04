import axios, { type AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { store } from '@store/index';
import { logout } from '@store/slices/authSlice';

const BaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const Api = axios.create({
    timeout: 60000,
    baseURL: BaseUrl,
});

// Default headers
Api.defaults.headers.post['Content-Type'] = 'application/json';
Api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

// Request interceptor - Add auth token to requests
Api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // Get token from Redux store
        const state = store.getState();
        const { token } = state.auth;

        if (token) {
            config.headers.set('Authorization', `Bearer ${token}`);
        }

        return config;
    },
    (error: AxiosError) => Promise.reject(error)
);

// Response interceptor - Handle errors globally
Api.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        // Auto logout on 401 Unauthorized
        if (error?.response?.status === 401) {
            if (typeof window !== 'undefined') {
                // Dispatch logout action to clear Redux state
                store.dispatch(logout());

                // Redirect to login page
                const currentPath = window.location.pathname;
                if (currentPath !== '/login' && currentPath !== '/profile-setup' && currentPath !== '/') {
                    window.location.href = '/login';
                }
            }
        }

        return Promise.reject(error);
    }
);

export default Api;
