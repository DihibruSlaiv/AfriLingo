import axios from "axios";
import i18n from 'i18n-js';
import { BASE_URL_LOCAL } from "@env";

const axiosInstance = axios.create({
  baseURL: `${BASE_URL_LOCAL}`,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    "Accept-Language": i18n.locale
  },
});

const setAuthToken = (token, instance) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const setHeaders = (arrayHeaders, instance) => {
    arrayHeaders.map((arrayHeader, index ) => {
        instance.defaults.headers.common[index] = arrayHeader;
    })    
};

export { axiosInstance, setAuthToken, setHeaders };
