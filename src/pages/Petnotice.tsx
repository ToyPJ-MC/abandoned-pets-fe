import React, { useEffect } from "react";
import { Paper } from "@mui/material";
import Petcard from "./Petcard";
import { MaxpageAPI, TotalAPI } from "../api/server";
import { useRecoilState, useSetRecoilState } from "recoil";
import { maxpageDataState, totalDataState } from "../states/atom";

const Petnotice = () => {
  const setPage = useSetRecoilState(maxpageDataState);
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
            paddingTop: 5,
            paddingBottom: 5,
            borderRadius: "30px",
          }}
          elevation={0}
          variant="outlined"
        >
          <Petcard />
        </Paper>
      </div>
    </>
  );
};
export default Petnotice;
