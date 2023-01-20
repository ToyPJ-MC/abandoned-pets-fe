import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../constants/Constants";

const Profile = () => {
  const [user_id, setUerid] = useState();
  const [nickname, setNickname] = useState();
  const [profileimage, setProfileimage] = useState();
  const headerConfig = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const getProfile = async () => {
    try {
      axios
        .get(API_URL + "/user/info", {
          params: {},
          headers: headerConfig,
        })
        .then((response) => {
          setUerid(response.data.id);
          setNickname(response.data.properties.nickname);
          setProfileimage(response.data.properties.profie_image);
        });
    } catch (error) {
      window.alert(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      <h1>{user_id}</h1>
      <h3>{nickname}</h3>
      <img src={profileimage}></img>
    </div>
  );
};
export default Profile;
