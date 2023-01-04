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
const animalDataState = atom({
  key: "animal",
  default: [
    {
      id: 417000,
      name: "개",
    },
    {
      id: 422400,
      name: "고양이",
    },
  ],
});
const stateData = atom({
  key: "state",
  default: [
    {
      id: "notice",
      name: "공고중",
    },
    {
      id: "protect",
      name: "보호중",
    },
  ],
});
const yesDataState = atom({
  key: "Yes",
  default: [
    {
      id: "Y",
      name: "중성화 O",
    },
    {
      id: "N",
      name: "중성화 X",
    },
    {
      id: "U",
      name: "미상",
    },
  ],
});
const petindexDataState = atom({
  key: "petindex",
  default: [
    {
      sexCd: "",
      kindCd: "",
      noticeNo: "",
      processState: "",
      careAddr: "",
      noticeSdt: "",
      weight: "",
      chargeNm: "",
      desertionNo: "",
      careNm: "",
      careTel: "",
      happenPlace: "",
      officatel: "",
      orgNm: "",
      filename: "",
      popfile: "",
      noticeEdt: "",
      netureYn: "",
      specailMark: "",
      colorCd: "",
      happenDt: "",
      age: "",
    },
  ],
});
const petcardDataState = atom({
  key: "petcard",
  default: [
    {
      id: 0,
      sexCd: "",
      kindCd: "",
      noticeNo: "",
      processState: "",
      careAddr: "",
      noticeSdt: "",
      weight: "",
      chargeNm: "",
      desertionNo: "",
      careNm: "",
      careTel: "",
      happenPlace: "",
      officetel: "",
      orgNm: "",
      filename: "",
      popfile: "",
      noticeEdt: "",
      neuterYn: "",
      specialMark: "",
      colorCd: "",
      happenDt: "",
      age: "",
    },
    {
      id: 1,
      sexCd: "",
      kindCd: "",
      noticeNo: "",
      processState: "",
      careAddr: "",
      noticeSdt: "",
      weight: "",
      chargeNm: "",
      desertionNo: "",
      careNm: "",
      careTel: "",
      happenPlace: "",
      officetel: "",
      orgNm: "",
      filename: "",
      popfile: "",
      noticeEdt: "",
      neuterYn: "",
      specialMark: "",
      colorCd: "",
      happenDt: "",
      age: "",
    },
  ],
});
export {
  gunguDataState,
  placeDataState,
  indexDataState,
  animalDataState,
  stateData,
  yesDataState,
  petindexDataState,
  petcardDataState,
};
