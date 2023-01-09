import React, { useEffect } from "react";
import { Paper } from "@mui/material";
import Petcard from "./Petcard";
import { MaxpageAPI, SearchAPI, allAPI } from "../api/server";
import { useRecoilState } from "recoil";
import {
  SearchDataState,
  maxpageDataState,
  petcardDataState,
} from "../states/atom";

const Petnotice = () => {
  const [alldata, setAlldata] = useRecoilState(petcardDataState);
  const [maxpage, setPage] = useRecoilState(maxpageDataState);
  const [searchpage, setSearchpage] = useRecoilState(SearchDataState);
  useEffect(() => {
    allAPI(maxpage, 6, setAlldata);
  }, []);
  useEffect(() => {
    MaxpageAPI(setPage);
  }, []);
  useEffect(() => {
    SearchAPI(setSearchpage);
  }, []);
  return (
    <>
      <div className="container mx-auto mt-20 mb-10">
        <div className="text-center">
          {alldata.map((v, index) =>
            index == 5 ? <h1>총 유기동물 : {v.id}마리</h1> : null
          )}
        </div>
        <h2>유기동물 공고</h2>
        <Paper
          sx={{
            height: "800px",
            minWidth: 200,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: "30px",
          }}
          elevation={3}
        >
          <Petcard />
        </Paper>
      </div>
    </>
  );
};
export default Petnotice;
