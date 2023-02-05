import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import auth from "../api/auth";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const REST_API_KEY = "f572e34312b48d6cebb3d5ce372cf2a7";
  const REDIRECT_URI = "http://203.241.228.50:55173/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const navigate = useNavigate();

  const kakaopage = () => {
    navigate("/Auth");
  };
  return (
    <>
      <a href={KAKAO_AUTH_URL}>
        <Button onClick={kakaopage}>Kakao Login</Button>
      </a>
    </>
  );
};
export default Loginpage;
