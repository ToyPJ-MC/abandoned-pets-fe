import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProfileAPI } from "../api/auth";
import { useRecoilState } from "recoil";
import { petregistDataState, userDataState } from "../states/atom";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import { likelistAPI } from "../api/server";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userDataState);
  const [like, setLike] = useRecoilState(petregistDataState);
  useEffect(() => {
    ProfileAPI(setUser);
  }, []);
  const homeClick = () => {
    navigate("/");
  };
  useEffect(() => {
    likelistAPI(setLike);
  }, []);

  return (
    <>
      <div className="text-6xl font-bold mt-6 ml-8" onClick={homeClick}>
        MJ PET
      </div>
      <div className="grid grid-cols-2 mt-8">
        <div className="text-center grid place-items-center">
          <Paper
            sx={{
              height: "600px",
              width: "400px",
              paddingTop: 5,
              paddingBottom: 10,
              borderRadius: "30px",
            }}
            elevation={0}
            variant="outlined"
          >
            <h1>
              {"<"}Profile{">"}
            </h1>
            <div>
              <img src={user.picture} className="h-full mt-6"></img>
              <h1>{user.nickname}</h1>
              <h3>이메일: {user.email}</h3>
            </div>
          </Paper>
        </div>
        <div>
          <h1>내가 관심 있는 유기동물</h1>
          <div>
            {like.map((item, index) => (
              <div key={index}>
                <img src={item.popfile} className="h-60"></img>
                <li>{item.kindCd}</li>
                <li>{item.colorCd}</li>
                <li>{item.age}</li>
                <li>{item.weight}</li>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
