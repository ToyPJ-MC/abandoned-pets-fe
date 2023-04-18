import React, { useEffect, useState } from "react";
import Lawdialog from "../../components/Lawdialog";
import Petnotice from "../Petnotice";
import Search from "../Search";
import { Link, useNavigate } from "react-router-dom";
import { LoginAPI, ProfileAPI } from "../../api/auth";
import KakaoLogin from "../../components/KakaoLogin";
import { Cookies, useCookies } from "react-cookie";
import { getCookie, removeCookie } from "../../util/Cookie";
import axios from "axios";
const { VITE_APP_KAKAO_KEY } = import.meta.env;

const Main = () => {
  const cookies = getCookie("access_token");
  const refreshtoken = getCookie("refresh_token");
  const navigate = useNavigate();
  const LOGOUT_REDIRECT_URI = "http://localhost:5173";
  const kakaologout = `https://kauth.kakao.com/oauth/logout?client_id=${VITE_APP_KAKAO_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
  const [open, setOpen] = useState(true);
  //const [, , removeCookie] = useCookies(["access_token"]);
  const handleClose = () => {
    setOpen(false);
  };
  const profileclick = () => {
    navigate("/profile");
  };
  const logout = () => {
    window.location.href = kakaologout;
    //removeCookie("access_token", { path: "/" });
    //removeCookie("refresh_token", { path: "/" });
    removeCookie("access_token");
    removeCookie("refresh_token");
  };
  const latestsearch = () => {
    navigate("/latestsearch");
  };
  // beforeProfileAPI
  // useEffect(() => {
  //   beforeProfileAPI();
  // }, []);

  const kakaologin = () => {
    location.href = "http://192.168.0.16:8080/oauth2/authorization/kakao";
    // navigate("/KakaoLogin");
  };
  if (!cookies) {
    useEffect(() => {
      LoginAPI(refreshtoken);
    }, []);
  }
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
            ) : null}
            {cookies ? (
              <button
                onClick={logout}
                className="bg-white text-lg outline-none"
              >
                로그아웃
              </button>
            ) : null}
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
