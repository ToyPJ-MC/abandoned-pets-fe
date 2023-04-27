import React, { useEffect, useState } from "react";
import Lawdialog from "../../components/Lawdialog";
import Petnotice from "../Petnotice";
import Search from "../Search";
import { useNavigate } from "react-router-dom";
import { LoginAPI, LogoutAPI } from "../../api/auth";
import { getCookie, removeCookie } from "../../util/Cookie";
const { VITE_APP_KAKAO_KEY, VITE_APP_SERVER_URL, VITE_APP_LOGOUT_URL } =
  import.meta.env;

const Main = () => {
  const cookies = getCookie("access_token");
  const refreshtoken = getCookie("refresh_token");
  const navigate = useNavigate();
  const LOGOUT_REDIRECT_URI = VITE_APP_LOGOUT_URL;
  const kakaologout = `https://kauth.kakao.com/oauth/logout?client_id=${VITE_APP_KAKAO_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
  const [open, setOpen] = useState(true);
  const [logincheck, setLogincheck] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const profileclick = () => {
    navigate("/profile");
  };
  const logout = async () => {
    window.location.href = kakaologout;
    await LogoutAPI(cookies as string);
    removeCookie("access_token", { path: "/" });
    removeCookie("refresh_token", { path: "/" });
    setLogincheck(false);
  };
  const latestsearch = () => {
    navigate("/latestsearch");
  };
  const kakaologin = () => {
    location.href = VITE_APP_SERVER_URL;
    setLogincheck(true);
  };
  if (!cookies) {
    LoginAPI(refreshtoken as string);
  }
  return (
    <>
      {cookies ? null : <Lawdialog open={open} onClose={handleClose} />}
      <div className="h-full w-full flex flex-col">
        <div className="ml-12 mt-5">
          <div className="text-6xl mt-4 font-bold text-transparent bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text">
            펫프
          </div>
          <div className="text-xl mt-2 font-bold overline">PET Friend</div>
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
