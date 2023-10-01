import axios from "axios";

axios.defaults.baseURL = "https://center.uzcodes.uz/api/";

let refresh = false;

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    
    if (error.response.status === 401 && !refresh) {
    
      refresh = true;
      const rToken = localStorage.getItem("refresh")
      const response = await axios.post("users/auth/refreshToken", {refreshToken : rToken});
      const {refreshToken
      } = response.data;
      localStorage.setItem('refresh', refreshToken
      );
      console.log(response)

      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${refreshToken
        }`;
        return axios(error.config);
      }
      
    }
    refresh = false;
    return error;
  }
);

