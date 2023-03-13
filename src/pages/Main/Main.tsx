import { Button, Dialog } from "@mui/material";
import React, { useState } from "react";
import Lawdialog from "../../components/Lawdialog";
import Petnotice from "../Petnotice";
import Search from "../Search";
import { useNavigate } from "react-router-dom";

const Main = () => {
  let navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  function handleClick() {
    navigate("/Latestsearch");
  }
  const loginClick = () => {
    navigate("/Loginpage");
  };

  return (
    <>
      <Lawdialog open={open} onClose={handleClose} />
      <div className="h-full w-full flex flex-col">
        <div className="ml-10">
          <h1 className="text-green-700">MJ PET</h1>
          <Button variant="contained" size="medium" onClick={loginClick}>
            로그인
          </Button>
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
