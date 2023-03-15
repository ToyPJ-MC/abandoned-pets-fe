import { Main } from "../pages";
import Latestsearch from "../pages/Latestsearch";
import Petindex from "../pages/Petindex";
import KakaoLogin from "../components/KakaoLogin";
import Kakaoprofile from "../components/Kakaoprofile";
const Router = [
  {
    title: "Home",
    url: "/",
    component: <Main />,
  },
  {
    title: "반려동물 조회",
    url: "Petindex",
    component: <Petindex />,
  },
  {
    title: "최근 조회",
    url: "Latestsearch",
    component: <Latestsearch />,
  },
  {
    title: "카카오로그인",
    url: "/KakaoLogin",
    component: <KakaoLogin />,
  },
  {
    title: "카카오프로필",
    url: "/Kakaoprofile",
    component: <Kakaoprofile />,
  },
];
export default Router;
