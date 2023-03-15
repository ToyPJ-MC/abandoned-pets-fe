import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../constants/Constants";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie";
import { Main } from "../pages";
import { getCookie } from "../util/Cookie";

const { VITE_APP_KAKAO_KEY } = import.meta.env;

const headerConfig = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};
export const loginAPI = () => {
  const login = () => {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:5173",
    });
  };
  return (
    <div>
      <a id="" href="#">
        <Button variant="contained" size="medium" onClick={login}>
          로그인
        </Button>
      </a>
    </div>
  );
};
// const TokenAPI = () => {
//   const code = new URL(window.location.href).searchParams.get("code");
//   axios
//     .get(API_URL + "/user/login", {
//       params: { code },
//       headers: headerConfig,
//     })
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
const TokenAPI = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  axios
    .post("/oauth/token", {
      params: {
        grant_type: "authorization_code",
        client_id: VITE_APP_KAKAO_KEY,
        redirect_uri: "http://localhost:5173",
        code: code,
      },
      headers: headerConfig,
      WithCredentials: true,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const ProfileAPI = () => {
  // await axios
  //   .get(API_URL + "/user/info", {
  //     params: {},
  //     headers: headerConfig,
  //   })
  //   .then((response) => {
  //     console.log(response);
  //   });
};
export { ProfileAPI, TokenAPI };
