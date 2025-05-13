import axios from 'axios';
import store from '@/app/store';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const config = {
  baseURL: BASE_URL,
};

const httpBase = axios.create(config);

export default httpBase;