import { useEffect } from "react";
import { setCookie } from "../util/Cookie";
import { Main } from "../pages";

const KakaoLogin = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  setCookie(code as string);
  location.href = "/";
  return <></>;
};
export default KakaoLogin;
