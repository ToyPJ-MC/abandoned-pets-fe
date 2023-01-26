import axios from "axios";
import React, { useEffect } from "react";
import { API_URL } from "../constants/Constants";
import Profile from "../pages/Profile";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const auth = () => {
  const code = new URL(window.location.href).searchParams.get("code"); // 인가 코드 받는 부분
  const REST_API_KEY = "f572e34312b48d6cebb3d5ce372cf2a7";
  const REDIRECT_URI = "http://localhost:5173/oauth/kakao/callback";
  const CLIENT_SECRET = "8pDR4lGFWqrXfTZiDkhbBffMXBbCERxi"; // 보안에 있음(owner만 가능)
  const headerConfig = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://203.241.228.50:18000",
  };
  const navigate = useNavigate();
  const profiletest = () => {
    navigate("/Profile");
  };
  const resetpage = () => {
    navigate("/Auth");
  };

  const getToken = async () => {
    // const payload = JSON.stringify({
    //   grant_type: "authorization_code",
    //   client_id: REST_API_KEY,
    //   redirect_uri: REDIRECT_URI,
    //   code: code,
    //   client_secret: CLIENT_SECRET,
    // });
    // try {
    //   const response = await axios.post(API_URL + "/user/login", payload);
    //   await axios
    //     .post(API_URL + "/user/login", null, {
    //       params: null,
    //       withCredentials: true,
    //       headers: headerConfig,
    //     })
    //     .then((response) => {
    //       console.log(response);
    //     });
    //   response;
    // } catch (error) {
    //   console.log(error);
    // }
    await axios
      .post(API_URL + "/user/login", null, {
        params: { code },
        headers: headerConfig,
      })
      .then((response) => {
        console.log(response); //토큰
        const ACCESS_TOKEN = response.data.accessToken;
        localStorage.setItem("accesstoken", ACCESS_TOKEN);
        profiletest;
      })
      .catch((error) => {
        console.log("login error" + error);
        window.alert("로그인 실패");
        resetpage;
      });
  };
  useEffect(() => {
    getToken();
    console.log(code);
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <Button onClick={profiletest}>Profile</Button>
    </div>
  );
};
export default auth;
