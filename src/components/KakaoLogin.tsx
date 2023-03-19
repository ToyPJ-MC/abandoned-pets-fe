import { useEffect } from "react";
import { TokenAPI } from "../api/auth";

const { VITE_APP_KAKAO_JS_KEY } = import.meta.env;

const KakaoLogin = () => {
  useEffect(() => {
    window.Kakao.init(VITE_APP_KAKAO_JS_KEY);
  }, []);
  const login = () => {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:5173",
    });
  };
  useEffect(() => {
    TokenAPI();
  }, []);

  return (
    <div>
      <a id="kakao-login-btn" href="#">
        <button onClick={login} className="bg-white text-lg">
          로그인
        </button>
      </a>
    </div>
  );
};
export default KakaoLogin;
