import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../constants/Constants";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const { VITE_APP_KAKAO_KEY } = import.meta.env;

const auth = () => {
  const code = new URL(window.location.href).searchParams.get("code"); // 인가 코드 받는 부분
  const LOGOUT_REDIRECT_URI = "http://localhost:5173";
  const headerConfig = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  };
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]); // cookie
  const [refreshcookie, setRefreshcookie] = useCookies(["refresh_token"]); // refreshcookie
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
          console.log(response.headers["Set-Cookie"]);
          setCookie("access_token", response.headers["Set-Coookie"]);
          //console.log(response.headers["Set-Cookie"]);
          //setRefreshcookie("refresh_token", response.headers["Set-Cookie"]);
          //setProfileimage(response.data.picture);
          //setCookie("access_token", response.headers["access_token"]);
          //console.log(response.headers["access_token"]);
        });
    } catch (error) {
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
      <h1>Hello</h1>
      {/* <h1>{user_id}</h1>
      <h3>{nickname}</h3>
      <img src={profileimage}></img> */}
      <Button onClick={logout}>로그아웃</Button>
      <Button onClick={home}>홈으로</Button>
    </div>
  );
};
export default auth;