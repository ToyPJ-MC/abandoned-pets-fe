import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import React, { ChangeEvent, useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import Petcard from "./Petcard";
import { getgunAPI, getCenterAPI, getIndexAPI } from "../api/server";
import { useRecoilState } from "recoil";
import { gunguDataState, indexDataState, placeDataState } from "../states/atom";

const Search = () => {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  const [select, setSelect] = useState(""); //시/도 select
  const [gunselect, setGunselect] = useState("");
  const [placeselect, setPlaceselect] = useState("");
  const [animalselect, setAnimalselect] = useState("");
  const [indexselect, setIndexselect] = useState("");
  const [stateselect, setStateselect] = useState("");
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
  //const [gun, setGun] = useState([]); //군
  //const [place, setPlace] = useState(""); //보호소
  const [animal, setAnimal] = useState(["개", "고양이"]);
  //const [index, setIndex] = useState("");
  const [state, setState] = useState(["공고중", "보호중"]);
  const [yes, Setyes] = useState(["Yes", "No", "Unknown"]);
  const [gungu, setGungu] = useRecoilState(gunguDataState);
  const [place, setPlace] = useRecoilState(placeDataState);
  const [index, setIndex] = useRecoilState(indexDataState);

  const [startvalue, setStartvalue] = useState<Dayjs | null>(
    dayjs(month + "/" + date + "/" + year)
  );
  const [endvalue, setEndvalue] = useState<Dayjs | null>(
    dayjs(month + "/" + date + "/" + year)
  );

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
  const statehandleChange = (event: SelectChangeEvent<any>) => {
    setStateselect(event.target.value);
  };
  const yeshandleChange = (event: SelectChangeEvent<any>) => {
    setYeselect(event.target.value);
  };
  const startcalendarhandleChange = (startvalue: Dayjs | null) => {
    setStartvalue(startvalue);
  };
  const endcalendarhandleChange = (endvalue: Dayjs | null) => {
    setEndvalue(endvalue);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      select ||
      gunselect ||
      placeselect ||
      animalselect ||
      indexselect ||
      stateselect ||
      yesselect == ""
    ) {
      window.alert("모두다 Select를 하세요!");
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
        <Paper sx={{ height: "140px", borderRadius: "30px", minWidth: 100 }}>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={3}
            sx={{ paddingTop: 5, paddingLeft: 5, paddingRight: 5 }}
          >
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
            <FormControl sx={{ minWidth: 100 }}>
              <InputLabel id="place">개/고양이</InputLabel>
              <Select
                value={animalselect}
                onChange={animalhandleChange}
                autoWidth
                label="개/고양이"
              >
                {animal.map((v) => (
                  <MenuItem value={v}>{v}</MenuItem>
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
              <InputLabel id="place">현재상태</InputLabel>
              <Select
                value={stateselect}
                onChange={statehandleChange}
                autoWidth
                label="현재상태"
              >
                {state.map((v) => (
                  <MenuItem value={v}>{v}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id="place">중성화 여부</InputLabel>
              <Select
                value={yesselect}
                onChange={yeshandleChange}
                autoWidth
                label="중성화 여부"
              >
                {yes.map((v) => (
                  <MenuItem value={v}>{v}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="시작일"
                inputFormat="MM/DD/YYYY"
                value={startvalue}
                onChange={startcalendarhandleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="종료일"
                inputFormat="MM/DD/YYYY"
                value={endvalue}
                onChange={endcalendarhandleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <form onSubmit={handleSubmit}>
              <Button variant="contained" size="medium" type="submit">
                조회
              </Button>
            </form>
          </Stack>
        </Paper>
      </div>
      <div className="container mx-auto mt-20 mb-10">
        <Paper
          sx={{
            height: "600px",
            minWidth: 200,
            paddingTop: 10,
            borderRadius: "30px",
          }}
        >
          <Petcard />
        </Paper>
      </div>
    </>
  );
};
export default Search;
