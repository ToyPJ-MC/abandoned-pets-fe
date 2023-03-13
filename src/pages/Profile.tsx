import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const Profile = () => {
  const [user_id, setUerid] = useState();
  const [nickname, setNickname] = useState();
  const [profileimage, setProfileimage] = useState();
  //const [cookies, Setcookie] = useCookies(["access_token"]);

  const headerConfig = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const getProfile = async () => {
    //const token = cookies.access_token;
    try {
      axios
        .get("https://kapi.kakao.com/v1/api/talk/profile", {
          //headers: { ...headerConfig, Authorization: "Bearer" + token },
        })
        .then((response) => {
          console.log(response);
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
