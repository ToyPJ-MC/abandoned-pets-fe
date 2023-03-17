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
    <div className="text-center grid place-items-center">
      <h1>Profile</h1>
      <div>
        <img src={user.picture} className="h-full mt-6"></img>
        <h1>{user.nickname}</h1>
        <h3>이메일: {user.email}</h3>
      </div>
    </div>
  );
};
export default Profile;
