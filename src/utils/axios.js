import axios from "axios";

const getBaseUrl = () => {
  return "https://hackapi.hellozelf.com/frontend/api/v1/";
};

const $axios = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

$axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("error interceptors: ", error.response?.config);
    // if (error.response?.status === 401) {
    //   // reissue new valid token from firebase
    //   renewIdToken();
    // }
    return error;
  }
);

// export const setIdTokenInAxiosHeader = (idToken) => {
//   $axios.defaults.headers.common["authorization"] = idToken;
// };

export default $axios;
