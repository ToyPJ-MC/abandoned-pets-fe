import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../constants/Constants";

const Profile = () => {
  const [user_id, setUerid] = useState();
  const [nickname, setNickname] = useState();
  const [profileimage, setProfileimage] = useState();
  const teststring = "accessToken";
  const headerConfig = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://203.241.228.50:18000",
  };

  const getProfile = async () => {
    try {
      axios
        .post(API_URL + "/user/info", null, {
          params: null,
          withCredentials: true,
          headers: headerConfig,
        })
        .then((response) => {
          setUerid(response.data.id);
          setNickname(response.data.properties.nickname);
          setProfileimage(response.data.properties.profie_image);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      <h1>프로필 페이지</h1>
      <h1>{user_id}</h1>
      <h3>{nickname}</h3>
      <img src={profileimage}></img>
    </div>
  );
};
export default Profile;
