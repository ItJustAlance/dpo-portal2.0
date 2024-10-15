import axios from "axios";
// import/no-mutable-exports
let preApiUrl;
// import/no-mutable-exports
let preAppVersion;

if (typeof window !== "undefined") {
  const url = new URL(window.location.href);
  console.log("url", url.port);
  const currentUrl = window.location.hostname;
  const resultUrl = currentUrl === "localhost" ? `localhost:${url.port}` : currentUrl;
  preApiUrl = "http://" + resultUrl;
  preAppVersion = Date.parse(new Date()) + 26;
} else {
  // Используйте серверную переменную окружения для определения URL-адреса API
  preApiUrl = process.env.VUE_APP_API_URL;
  preAppVersion = Date.parse(new Date()) + 26;
}

const apiUrl = preApiUrl;
const appVersion = preAppVersion;

axios.interceptors.request.use(async (request) => {
  return await request;
});

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    // const { response } = error;

    return await Promise.reject(error);
  },
);

export { axios, apiUrl, appVersion };
