import axios from "axios";
//import { getAccessToken, getStoreAuth } from "@/api/authData";

// const apiUrl = import.meta.env.VUE_APP_API_URL;
const currentUrl = window.location.hostname;
const resultUrl = currentUrl == 'localhost' ? '7t.novostroy-m.ru' : currentUrl;
const apiUrl = 'https://'+resultUrl;
const appVersion = Date.parse(new Date()) + 26;

axios.interceptors.request.use(async request => {
  return request;
});

axios.interceptors.response.use(
  response => response,
  async error => {
    //const { response } = error;

    return Promise.reject(error);
  }
);

export { axios, apiUrl, appVersion };


