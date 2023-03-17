import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProfileAPI } from "../api/auth";
import { useRecoilState } from "recoil";
import { userDataState } from "../states/atom";

const Profile = () => {
  const [user, setUser] = useRecoilState(userDataState);
  useEffect(() => {
    ProfileAPI(setUser);
  }, []);

  return (
    <div className="text-center">
      <h1>Profile</h1>
      <img src={user.picture} className="h-full"></img>
      <h1>{user.nickname}</h1>
      <h3>이메일: {user.email}</h3>
    </div>
  );
};
export default Profile;
