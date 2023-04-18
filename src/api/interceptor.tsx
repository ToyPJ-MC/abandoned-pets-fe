import axios, { AxiosRequestConfig } from "axios";
import { API_URL } from "../constants/Constants";
import { getCookie, setCookie } from "../util/Cookie";

const jinInterceptor = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
const refresh_token = getCookie("refresh_token");
const access_token = getCookie("access_token");

jinInterceptor.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    // config.headers = {
    //   //Authorization: !!access_token ? `Bearer ${access_token}` : "",
    //   Authorization: `Bearer ${access_token}`,
    // };
    // config.params = {
    //   token: access_token,
    // };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

jinInterceptor.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response;
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 || error.response.status === 403) {
      originalRequest._retry = true;
      const response = await axios.get(API_URL + "api/member/token/new", {
        params: { refresh_token: refresh_token },
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        response.data;
      console.log("새거" + newRefreshToken);
      setCookie("access_token", newAccessToken, {
        path: "/",
        expires: new Date(Date.now() + 3600 * 1000),
      });
      setCookie("refresh_token", newRefreshToken);
      //originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
      originalRequest.params = {
        access_token: newAccessToken,
      };
      return jinInterceptor(originalRequest);
    } else if (error.response.status === 404) {
      window.location.replace("/");
    }
    return Promise.reject(error);
  }
);
export default jinInterceptor;
