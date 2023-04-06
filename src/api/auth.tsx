import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../constants/Constants";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie";
import { Main } from "../pages";
import { getCookie, setCookie } from "../util/Cookie";
import { SetterOrUpdater } from "recoil";

const { VITE_APP_KAKAO_KEY } = import.meta.env;

const headerConfig = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};
const baseurl = axios.create({
  baseURL: API_URL + "/oauth2/authorization/kakao",
});
const loginAPI = () => {
  baseurl.interceptors.response.use((response: any) => {
    // oauth2/redirect?code={accss_token} -> 쿠키 저장
    return response;
  });
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
    .get(API_URL + "/kakao/info", {
      params: { access_token: token },
      headers: headerConfig,
    })
    .then((response) => {
      setUser(response.data);
    });
};
const beforeProfileAPI = () => {
  const cookies = getCookie("access_token");
  axios
    .get(API_URL + "/kakao/info", {
      params: { access_token: cookies },
      headers: headerConfig,
    })
    .then((response) => {
      setCookie(response.data.id);
    });
};
export { ProfileAPI, TokenAPI, beforeProfileAPI, loginAPI };
