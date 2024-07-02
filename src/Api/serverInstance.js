import axios from "axios";

axios.defaults.timeout = 5000;
axios.defaults.withCredentials = true;

const serverInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  withCredentials: true,
});

// serverInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       console.error("Unauthorized request. Removing cookies...");
//     }

//     return Promise.reject(error);
//   }
// );

export { serverInstance };
