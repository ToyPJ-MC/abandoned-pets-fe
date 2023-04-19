import axios from "axios";
import { API_URL } from "../constants/Constants";
import { getCookie, setCookie } from "../util/Cookie";
import { SetterOrUpdater } from "recoil";
import jinInterceptor from "./interceptor";

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
  console.log(token);
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
    .then((reponse) => {
      // jinInterceptor.defaults.headers.common["Authorization"] =
      //   "Bearer " + reponse.data.access_token;
      setCookie("access_token", reponse.data.accessToken, {
        path: "/",
        expires: new Date(Date.now() + 3600 * 1000), // 1h
      });
      setCookie("refresh_token", reponse.data.refreshToken);
      console.log(reponse);
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
