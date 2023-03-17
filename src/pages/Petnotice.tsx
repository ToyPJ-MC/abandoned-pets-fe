import React, { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import Petcard from "./Petcard";
import { MaxpageAPI, TotalAPI, allAPI } from "../api/server";
import { useRecoilState } from "recoil";
import {
  SearchDataState,
  maxpageDataState,
  petcardDataState,
  totalDataState,
} from "../states/atom";

const Petnotice = () => {
  const [maxpage, setPage] = useRecoilState(maxpageDataState);
  const [total, setTotal] = useRecoilState(totalDataState);
  useEffect(() => {
    MaxpageAPI(setPage);
  }, []);
  useEffect(() => {
    TotalAPI(setTotal);
  }, []);
  return (
    <>
      <div className="container mx-auto mt-20 mb-10">
        <div className="text-center">
          <h1>총 {total}마리</h1>
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
