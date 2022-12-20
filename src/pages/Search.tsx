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
import React, { ChangeEvent, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useRecoilState } from "recoil";
import { sidoDataState } from "../states/atom";

const Search = () => {
  //const [sido, setSido] = useRecoilState(sidoDataState); //시 data
  const [select, setSelect] = useState(""); //시/도 select
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
  const [gun, setGun] = useState(""); //군
  const [place, setPlace] = useState(""); //보호소
  const [animal, setAnimal] = useState("");
  const [index, setIndex] = useState("");
  const [state, setState] = useState("");
  const [yes, Setyes] = useState("");

  const [startvalue, setStartvalue] = useState<Dayjs | null>(
    dayjs("2022-12-11")
  );
  const [endvalue, setEndvalue] = useState<Dayjs | null>(dayjs("2022-12-15"));

  const sidohandleChange = (event: SelectChangeEvent<string>): void => {
    setSelect(event.target.value);
  };
  const gunhandleChange = (event: SelectChangeEvent) => {
    setGun(event.target.value);
  };
  const placehandleChange = (event: SelectChangeEvent) => {
    setPlace(event.target.value);
  };
  const animalhandleChange = (event: SelectChangeEvent) => {
    setAnimal(event.target.value);
  };
  const indexhandleChange = (event: SelectChangeEvent) => {
    setIndex(event.target.value);
  };
  const statehandleChange = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };
  const yeshandleChange = (event: SelectChangeEvent) => {
    Setyes(event.target.value);
  };
  const startcalendarhandleChange = (startvalue: Dayjs | null) => {
    setStartvalue(startvalue);
  };
  const endcalendarhandleChange = (endvalue: Dayjs | null) => {
    setEndvalue(endvalue);
  };
  return (
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
              value={gun}
              onChange={gunhandleChange}
              autoWidth
              label="군/구"
            >
              <MenuItem value="1">동구</MenuItem>
              <MenuItem value="2">강남구</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="place">보호소</InputLabel>
            <Select
              value={place}
              onChange={placehandleChange}
              autoWidth
              label="보호소"
            >
              <MenuItem value="1">한국보호소</MenuItem>
              <MenuItem value="2">외국보호소</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 100 }}>
            <InputLabel id="place">개/고양이</InputLabel>
            <Select
              value={animal}
              onChange={animalhandleChange}
              autoWidth
              label="개/고양이"
            >
              <MenuItem value="1">개</MenuItem>
              <MenuItem value="2">고양이</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="place">품종</InputLabel>
            <Select
              value={index}
              onChange={indexhandleChange}
              autoWidth
              label="품종"
            >
              <MenuItem value="1">골든 리트리버</MenuItem>
              <MenuItem value="2">스코티쉬폴드</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 100 }}>
            <InputLabel id="place">현재상태</InputLabel>
            <Select
              value={state}
              onChange={statehandleChange}
              autoWidth
              label="현재상태"
            >
              <MenuItem value="notice">공고중</MenuItem>
              <MenuItem value="protect">보호중</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="place">중성화 여부</InputLabel>
            <Select
              value={yes}
              onChange={yeshandleChange}
              autoWidth
              label="중성화 여부"
            >
              <MenuItem value="y">중성화 O</MenuItem>
              <MenuItem value="n">중성화 X</MenuItem>
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
          <Button variant="contained" size="medium">
            조회
          </Button>
        </Stack>
      </Paper>
    </div>
  );
};
export default Search;
