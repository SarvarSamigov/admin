import axios from "axios";

axios.defaults.baseURL = "https://center.uzcodes.uz/api/";

let refresh = false;

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    const token = localStorage.getItem("refresh")

    if (error.response.status === 401 && !refresh) {
      refresh = true;
      const response = await axios.post("users/auth/refreshToken", {token});
      console.log(response)

      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data["refreshToken"]}`;
        return axios(error.config);
      }
      
    }
    refresh = false;
    return error;
  }
);

