import { atom } from "recoil";

const sidoDataState = atom({
  key: "sido",
  default: [
    {
      id: 1,
      sidoname: "서울특별시",
    },
    {
      id: 2,
      sidoname: "부산광역시",
    },
    {
      id: 3,
      sidoname: "대구광역시",
    },
    {
      id: 4,
      sidoname: "인천광역시",
    },
    {
      id: 5,
      sidoname: "광주광역시",
    },
    {
      id: 6,
      sidoname: "세종특별시",
    },
    {
      id: 7,
      sidoname: "대전광역시",
    },
    {
      id: 8,
      sidoname: "울산광역시",
    },
    {
      id: 9,
      sidoname: "경기도",
    },
    {
      id: 10,
      sidoname: "강원도",
    },
    {
      id: 11,
      sidoname: "충청북도",
    },
    {
      id: 12,
      sidoname: "충청남도",
    },
    {
      id: 13,
      sidoname: "전라북도",
    },
    {
      id: 14,
      sidoname: "전라남도",
    },
    {
      id: 15,
      sidoname: "경상북도",
    },
    {
      id: 16,
      sidoname: "경상남도",
    },

    {
      id: 17,
      sidoname: "제주특별자치도",
    },
  ],
});
export { sidoDataState };
