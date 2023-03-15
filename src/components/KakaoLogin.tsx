import { Button } from "@mui/material";
import { useEffect } from "react";
import { Cookies } from "react-cookie";
import { TokenAPI } from "../api/auth";
import axios from "axios";

const { VITE_APP_KAKAO_KEY } = import.meta.env;

const headerConfig = {
  "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-WithCredentials": "true",
};

const KakaoLogin = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  const login = () => {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:5173",
    });
  };
  useEffect(() => {
    TokenAPI();
  }, []);
  //   useEffect(() => {
  //     axios.post(
  //       "/oauth/token",
  //       {
  //         grant_type: "authorization_code",
  //         client_id: VITE_APP_KAKAO_KEY,
  //         redirect_uri: "http://localhost:5173",
  //         code: code,
  //         client_secret: "snwqolbE6Z5ypThJ3eNf1t33c8ymMvhq",
  //       },
  //       {
  //         headers: headerConfig,
  //         withCredentials: true,
  //       }
  //     );
  //   }, []);

  return (
    <div>
      <a id="kakao-login-btn" href="#">
        <Button variant="contained" size="medium" onClick={login}>
          로그인
        </Button>
      </a>
    </div>
  );
};
export default KakaoLogin;
