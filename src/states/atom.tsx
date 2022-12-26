import { atom } from "recoil";

const gunguDataState = atom({
  key: "gun",
  default: ["없음"],
});
const placeDataState = atom({
  key: "place",
  default: ["없음"],
});
const indexDataState = atom({
  key: "index",
  default: ["default"],
});
export { gunguDataState, placeDataState, indexDataState };
