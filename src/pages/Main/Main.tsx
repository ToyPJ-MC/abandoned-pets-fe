import { Button, Dialog } from "@mui/material";
import React, { useState } from "react";
import Lawdialog from "../../components/Lawdialog";
import Petnotice from "../Petnotice";
import Search from "../Search";
import { useNavigate } from "react-router-dom";

const { VITE_APP_KAKAO_KEY } = import.meta.env;

const Main = () => {
  const navigate = useNavigate();
  const REDIRECT_URI = "http://localhost:5173/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_APP_KAKAO_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  function handleClick() {
    navigate("/Latestsearch");
  }
  const loginClick = () => {
    //navigate("/Loginpage");
    navigate("/Auth");
  };

  return (
    <>
      <Lawdialog open={open} onClose={handleClose} />
      <div className="h-full w-full flex flex-col">
        <div className="ml-10">
          <h1 className="text-green-700">MJ PET</h1>
          <a href={KAKAO_AUTH_URL}>
            <Button variant="contained" size="medium" onClick={loginClick}>
              로그인
            </Button>
          </a>
          <div className="text-right pr-16">
            <Button variant="contained" size="medium" onClick={handleClick}>
              최근 조회
            </Button>
          </div>
        </div>
        <div className="left-1/2 mt-10">
          <Search />
          <Petnotice />
        </div>
      </div>
    </>
  );
};
export default Main;
