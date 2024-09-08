import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { Units } from './constants';

export const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/3.0/onecall',
  timeout: 10000, // Optional: set a timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  // If there are already query parameters, we merge app_id with them
  config.params = config.params || {};
  config.params.appid = process.env.NEXT_PUBLIC_APP_ID;
  config.params.units = Units.Metric

  return config;
}, (error) => {
  return Promise.reject(error);
});