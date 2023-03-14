import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../constants/Constants";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Main } from "../pages";

const headerConfig = {
  "Content-Type": "application/json",
  //"Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Origin": "*",
};

const profileAPI = async () => {
  const code = new URL(window.location.href).searchParams.get("code"); // 인가 코드 받는 부분
  try {
    await axios
      .get(API_URL + "/user/login", {
        params: { code },
        headers: { ...headerConfig, withCredentials: true },
        withCredentials: true,
      })
      .then((response) => {
        //setUerid(response.data.id);
        //setNickname(response.data.nickname);
        console.log(response.data);
        console.log(response);
        //setProfileimage(response.data.picture);
      });
  } catch (error) {
    console.log("error");
    console.log(error);
  }
};
export default profileAPI;
