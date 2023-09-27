import axios from "axios";

axios.defaults.baseURL = "https://center.uzcodes.uz/api/";

let refresh = false;

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;
      const response = await axios.post("users/auth/refreshToken", {});

      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data["accessToken"]}`;
        return axios(error.config);
      }
      
    }
    refresh = false;
    return error;
  }
);

