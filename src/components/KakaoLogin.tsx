import { Button } from "@mui/material";
import { useEffect } from "react";
import { Cookies } from "react-cookie";
import { TokenAPI } from "../api/auth";
import axios from "axios";
import { getCookie } from "../util/Cookie";

const { VITE_APP_KAKAO_JS_KEY } = import.meta.env;

const KakaoLogin = () => {
  useEffect(() => {
    window.Kakao.init(VITE_APP_KAKAO_JS_KEY);
  }, []);
  const login = () => {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:5173",
    });
  };
  useEffect(() => {
    TokenAPI();
  }, []);

  return (
    <div>
      <a id="kakao-login-btn" href="#">
        <Button onClick={login}>로그인</Button>
      </a>
    </div>
  );
};
export default KakaoLogin;
