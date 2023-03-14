import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../constants/Constants";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Main } from "../pages";

const { VITE_APP_KAKAO_KEY } = import.meta.env;

const headerConfig = {
  "Content-Type": "application/json",
  //"Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Origin": "*",
};
const loginAPI = async () => {
  const REDIRECT_URI = "http://localhost:5173";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_APP_KAKAO_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  await axios
    .get(KAKAO_AUTH_URL, { headers: headerConfig })
    .then((response) => {
      console.log(response);
    });
};

const TokenAPI = async () => {
  const code = new URL(window.location.href).searchParams.get("code");
  try {
    await axios
      .get(API_URL + "/user/login", {
        params: { code },
        headers: headerConfig,
      })
      .then((response) => {
        console.log(response);
      });
  } catch (error) {
    console.log(error);
  }
};
const ProfileAPI = async () => {
  await axios
    .get(API_URL + "/user/info", {
      params: {},
      headers: headerConfig,
    })
    .then((response) => {
      console.log(response);
    });
};
export { TokenAPI, ProfileAPI, loginAPI };
