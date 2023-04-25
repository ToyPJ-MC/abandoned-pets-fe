import axios from "axios";
import { API_URL } from "../constants/Constants";
import { getCookie, removeCookie, setCookie } from "../util/Cookie";
import { SetterOrUpdater } from "recoil";
import jinInterceptor from "./interceptor";
//import jwtDecode from "jwt-decode";
//import decodejwtType from "../type";

const headerConfig = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};
const TokenAPI = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  axios
    .get(API_URL + "/kakao/login", {
      params: { code },
      headers: headerConfig,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
const ProfileAPI = (setUser: SetterOrUpdater<any>) => {
  const cookies = getCookie("access_token");
  let token = cookies;
  axios
    .get(API_URL + "/api/member/info", {
      params: { access_token: token },
      headers: headerConfig,
    })
    .then((response) => {
      setUser(response.data);
    });
};
const LoginAPI = (refreshtoken: string) => {
  axios
    .get(API_URL + "api/member/token/new", {
      params: {
        refresh_token: refreshtoken,
      },
      headers: headerConfig,
    })
    .then((response) => {
      //const decodeToken: decodejwtType = jwtDecode(response.data.accessToken);
      // jinInterceptor.defaults.headers.common["Authorization"] =
      //   "Bearer " + reponse.data.access_token;
      setCookie("access_token", response.data.accessToken, {
        path: "/",
        //expires: new Date(decodeToken.exp * 1000),
        //maxAge: 3600, // 1시간3600
      });
      setCookie("refresh_token", response.data.refreshToken, {
        path: "/",
      });
      if (response.data.accessToken) {
        window.location.href = "/";
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
const LogoutAPI = (accesstoken: string) => {
  axios
    .post(API_URL + "/api/member/logout", null, {
      params: {
        access_token: accesstoken,
      },
      headers: headerConfig,
    })
    .then((reponse) => {
      console.log(reponse);
    })
    .catch((error) => {
      console.log(error);
    });
};
// const beforeProfileAPI = () => {
//   const cookies = getCookie("access_token");
//   axios
//     .get(API_URL + "/kakao/info", {
//       params: { access_token: cookies },
//       headers: headerConfig,
//     })
//     .then((response) => {
//       setCookie(response.data.id);
//     });
// };
//beforeProfileAPI
export { ProfileAPI, TokenAPI, LoginAPI, LogoutAPI };
