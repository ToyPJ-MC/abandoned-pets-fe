import { Main } from "../pages";
import Latestsearch from "../pages/Latestsearch";
import Loginpage from "../pages/Loginpage";
import Petindex from "../pages/Petindex";
import Auth from "../api/auth";
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
    title: "로그인 페이지",
    component: <Loginpage />,
  },
  {
    title: "카카오 로그인 페이지",
    component: <Auth />,
  },
];
export default Router;
