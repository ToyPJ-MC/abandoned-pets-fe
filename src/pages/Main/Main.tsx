import { Button, Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import Lawdialog from "../../components/Lawdialog";
import Petnotice from "../Petnotice";
import Search from "../Search";
import { useNavigate } from "react-router-dom";
import { ProfileAPI, beforeProfileAPI } from "../../api/auth";
import KakaoLogin from "../../components/KakaoLogin";
import { Cookies, useCookies } from "react-cookie";
import { getCookie } from "../../util/Cookie";
import axios from "axios";
const { VITE_APP_KAKAO_KEY } = import.meta.env;

const Main = () => {
  const cookies = getCookie("access_token");
  const navigate = useNavigate();
  const LOGOUT_REDIRECT_URI = "http://localhost:5173";
  const kakaologout = `https://kauth.kakao.com/oauth/logout?client_id=${VITE_APP_KAKAO_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
  const [open, setOpen] = useState(true);
  const [, , removeCookie] = useCookies(["access_token"]);
  const handleClose = () => {
    setOpen(false);
  };
  const profileclick = () => {
    navigate("/profile");
  };
  const logout = () => {
    window.location.href = kakaologout;
    removeCookie("access_token", { path: "/" });
  };
  const latestsearch = () => {
    navigate("/latestsearch");
  };
  useEffect(() => {
    beforeProfileAPI();
  }, []);
  const kakobtn = () => {
    axios
      .get("/oauth2/authorization/kakao", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const kakaologin = () => {
    location.href = "/oauth2/authorization/kakao";
  };

  return (
    <>
      <Lawdialog open={open} onClose={handleClose} />
      <div className="h-full w-full flex flex-col">
        <div className="ml-10 mt-5">
          <div className="text-6xl font-bold">MJ PET</div>
          <div className="text-right pr-16 mb-4">
            {!cookies ? (
              <button
                type="button"
                onClick={kakaologin}
                className="bg-white text-lg"
              >
                로그인
              </button>
            ) : (
              <button
                onClick={logout}
                className="bg-white text-lg outline-none"
              >
                로그아웃
              </button>
            )}
          </div>
        </div>
        {cookies ? (
          <div className="text-right pr-16">
            <button
              onClick={profileclick}
              className="mr-2 bg-white text-lg outline-none"
            >
              프로필
            </button>
            <button
              onClick={latestsearch}
              className="bg-white text-lg outline-none"
            >
              최근조회
            </button>
          </div>
        ) : null}

        <div className="left-1/2 mt-10">
          <Search />
          <Petnotice />
        </div>
      </div>
    </>
  );
};
export default Main;
