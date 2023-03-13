import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import auth from "../api/auth";
import { useNavigate } from "react-router-dom";

const { VITE_APP_KAKAO_KEY } = import.meta.env;

const Loginpage = () => {
  const REDIRECT_URI = "http://localhost:5173/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_APP_KAKAO_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

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
