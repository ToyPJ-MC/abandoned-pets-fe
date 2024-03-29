import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { getgunAPI, getCenterAPI, getIndexAPI, findAPI } from "../api/server";
import { useRecoilState } from "recoil";
import {
  animalDataState,
  gunguDataState,
  indexDataState,
  petindexDataState,
  placeDataState,
  stateData,
  yesDataState,
  userDataState,
  errorState,
} from "../states/atom";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../util/Cookie";

const Search = () => {
  const navigate = useNavigate();
  const [select, setSelect] = useState(""); //시/도 select
  const [gunselect, setGunselect] = useState("");
  const [placeselect, setPlaceselect] = useState("");
  const [animalselect, setAnimalselect] = useState("");
  const [indexselect, setIndexselect] = useState("");
  const [yesselect, setYeselect] = useState("");
  const [sido, setSido] = useState([
    "서울특별시",
    "부산광역시",
    "대구광역시",
    "인천광역시",
    "광주광역시",
    "세종특별시",
    "대전광역시",
    "울산광역시",
    "경기도",
    "강원도",
    "충청북도",
    "충청남도",
    "전라북도",
    "전라남도",
    "경상북도",
    "경상남도",
    "제주특별자치도",
  ]); // 시/도
  const [animal, setAnimal] = useRecoilState(animalDataState);
  const [gungu, setGungu] = useRecoilState(gunguDataState);
  const [place, setPlace] = useRecoilState(placeDataState);
  const [index, setIndex] = useRecoilState(indexDataState);
  const [yes, setYes] = useRecoilState(yesDataState);
  const [petindex, setPetindex] = useRecoilState(petindexDataState);
  const member = getCookie("access_token");
  const [error, setError] = useRecoilState(errorState);

  const sidohandleChange = (event: SelectChangeEvent<any>): void => {
    setSelect(event.target.value);
  };
  const gunhandleChange = (event: SelectChangeEvent<any>) => {
    setGunselect(event.target.value);
  };
  const placehandleChange = (event: SelectChangeEvent<any>) => {
    setPlaceselect(event.target.value);
  };
  const animalhandleChange = (event: SelectChangeEvent<any>) => {
    setAnimalselect(event.target.value);
  };
  const indexhandleChange = (event: SelectChangeEvent<any>) => {
    setIndexselect(event.target.value);
  };
  const yeshandleChange = (event: SelectChangeEvent<any>) => {
    setYeselect(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      select == "" ||
      gunselect == "" ||
      placeselect == "" ||
      animalselect == "" ||
      indexselect == "" ||
      yesselect == ""
    ) {
      window.alert("모두다 Select를 하세요!");
    } else {
      findAPI(
        select,
        gunselect,
        placeselect,
        animalselect,
        indexselect,
        yesselect,
        setPetindex,
        String(member),
        setError
      );
      navigate("/Petindex");
    }
  };

  useEffect(() => {
    getgunAPI(select, setGungu);
  }, [select]);
  useEffect(() => {
    getCenterAPI(select, gunselect, setPlace);
  }, [gunselect]);
  useEffect(() => {
    getIndexAPI(animalselect, setIndex);
  }, [animalselect]);

  return (
    <>
      <div className="container mx-auto">
        <Paper
          sx={{
            borderRadius: "30px",
            minWidth: 100,
            maxHeight: 900,
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 5,
            paddingBottom: 5,
          }}
          elevation={0}
          variant="outlined"
        >
          <Grid className="grid grid-cols-1 md:grid-cols-7 gap-8">
            <FormControl sx={{ minWidth: 150 }}>
              <InputLabel id="cido">시/도</InputLabel>
              <Select
                value={select}
                onChange={(e) => sidohandleChange(e)}
                autoWidth
                label="시/도"
              >
                {sido.map((v) => (
                  <MenuItem value={v}>{v}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 100 }}>
              <InputLabel id="gun">군/구</InputLabel>
              <Select
                value={gunselect}
                onChange={gunhandleChange}
                autoWidth
                label="군/구"
              >
                {gungu.map((value) => (
                  <MenuItem value={value}>{value}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 150 }}>
              <InputLabel id="place">보호소</InputLabel>
              <Select
                value={placeselect}
                onChange={placehandleChange}
                autoWidth
                label="보호소"
              >
                {place.map((value) => (
                  <MenuItem value={value}>{value}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 110 }}>
              <InputLabel id="place">개/고양이</InputLabel>
              <Select
                value={animalselect}
                onChange={animalhandleChange}
                autoWidth
                label="개/고양이"
              >
                {animal.map((v) => (
                  <MenuItem value={v.id}>{v.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 150 }}>
              <InputLabel id="place">품종</InputLabel>
              <Select
                value={indexselect}
                onChange={indexhandleChange}
                autoWidth
                label="품종"
              >
                {index.map((v) => (
                  <MenuItem value={v}>{v}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 100 }}>
              <InputLabel id="place">중성화 여부</InputLabel>
              <Select
                value={yesselect}
                onChange={yeshandleChange}
                autoWidth
                label="중성화 여부"
              >
                {yes.map((v) => (
                  <MenuItem value={v.id}>{v.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <form onSubmit={handleSubmit} className="text-center">
              <button className="bg-white text-lg outline-none" type="submit">
                🔎
              </button>
            </form>
          </Grid>
        </Paper>
      </div>
    </>
  );
};
export default Search;
