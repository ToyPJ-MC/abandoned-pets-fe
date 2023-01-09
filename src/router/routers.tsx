import { Main } from "../pages";
import Latestsearch from "../pages/Latestsearch";
import Petindex from "../pages/Petindex";
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
];
export default Router;
