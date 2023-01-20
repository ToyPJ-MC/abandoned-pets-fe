import axios from "axios";
import React, { useEffect } from "react";
import { API_URL } from "../constants/Constants";

const auth = () => {
  const code = new URL(window.location.href).searchParams.get("code"); // 인가 코드 받는 부분
  const REST_API_KEY = "f572e34312b48d6cebb3d5ce372cf2a7";
  const REDIRECT_URI = "http://localhost:5173/oauth/kakao/callback";
  const CLIENT_SECRET = ""; // 보안에 있음(owner만 가능)
  const headerConfig = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const getToken = async () => {
    // const payload = JSON.stringify({
    //     grant_type : "authorization_code",
    //     client_id :REST_API_KEY,
    //     redirect_uri : REDIRECT_URI,
    //     code:code,
    //     client_secret:CLIENT_SECRET
    // });
    // try {
    //     const response = await axios.post(
    //         "https://kauth.kakao.com/oauth/token",
    //         payload
    //     );
    // }
    await axios
      .post(API_URL + "/user/login", null, {
        params: { code },
        headers: headerConfig,
      })
      .then((response) => {
        console.log(response);
      });
  };
  useEffect(() => {
    getToken();
  }, []);

  return <div>{code}</div>;
};
export default auth;
