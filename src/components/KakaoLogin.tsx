import { useEffect } from "react";
import { getCookie, setCookie } from "../util/Cookie";
import { LoginAPI } from "../api/auth";

const KakaoLogin = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  setCookie("refresh_token", code as string, {
    path: "/",
    //expires: new Date(Date.now() + 3600 * 1000), // server 만료시간
  });
  // useEffect(() => {
  //   LoginAPI(code as string);
  // }, []);
  // if (access_token) {
  //   location.href = "/";
  // } else {
  //   window.alert("문제가 있음");
  // }
  useEffect(() => {
    LoginAPI(code as string);
  }, []);

  return <></>;
};
export default KakaoLogin;
