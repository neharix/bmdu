import axios from 'axios';
import {useAuthStore} from "@/stores/auth.store.js";
import router from "@/router/index.js";


const axiosInstance = axios.create({
  // baseURL: 'https://bmdu.depder.com/api',
  baseURL: 'http://127.0.0.1:8000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Добавляем интерсептор для добавления токена в заголовки
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers['Authorization'] = `BMDU ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const authStore = useAuthStore();
      authStore.logout();

      if (router.currentRoute.value.name !== 'login-page') {
        router.push('/login');
      }
    }
    return {};
  }
);


export default axiosInstance;
