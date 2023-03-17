import { Main } from "../pages";
import Latestsearch from "../pages/Latestsearch";
import Petindex from "../pages/Petindex";
import KakaoLogin from "../components/KakaoLogin";
import Profile from "../pages/Profile";
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
    url: "/profile",
    component: <Profile />,
  },
];
export default Router;
