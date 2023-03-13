import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../constants/Constants";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Main } from "../pages";

const { VITE_APP_KAKAO_KEY } = import.meta.env;

const auth = () => {
  const code = new URL(window.location.href).searchParams.get("code"); // 인가 코드 받는 부분
  const LOGOUT_REDIRECT_URI = "http://localhost:5173";
  const headerConfig = {
    "Content-Type": "application/json",
    //"Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
  };
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  const kakaologout = `https://kauth.kakao.com/oauth/logout?client_id=${VITE_APP_KAKAO_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
  // const [user_id, setUerid] = useState();
  // const [nickname, setNickname] = useState();
  // const [profileimage, setProfileimage] = useState();
  const getToken = async () => {
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
  useEffect(() => {
    getToken();
  }, []);
  const logout = () => {
    window.location.href = kakaologout;
  };

  return (
    <div>
      {/* <Button onClick={logout}>로그아웃</Button>
      <Button onClick={home}>홈으로</Button> */}
      <Main />
    </div>
  );
};
export default auth;
