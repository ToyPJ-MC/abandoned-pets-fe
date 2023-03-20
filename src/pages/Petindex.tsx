import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { errorState, petindexDataState } from "../states/atom";
import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Box,
  Grid,
  Button,
} from "@mui/material";

const Petindex = () => {
  let navigate = useNavigate();
  const [petindex, setPetindex] = useRecoilState(petindexDataState);
  const [error, setError] = useRecoilState(errorState);

  const homeClick = () => {
    navigate("/");
  };
  return (
    <>
      {error === "잘못된 조회" ? (
        <>
          <h1>잘못된 조회</h1>
          <Button onClick={homeClick}>홈으로</Button>
        </>
      ) : (
        <div className="h-full w-full flex flex-col">
          <div className="ml-10 mr-10">
            <h1 className="text-green-700" onClick={homeClick}>
              MJ PET
            </h1>
            <div className="pb-6">
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {petindex.map((v, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                      <Card sx={{ minWidth: 300, borderRadius: 5 }}>
                        <img
                          src={petindex[index].popfile}
                          className="w-full h-60"
                        />
                        <CardContent>
                          <ul className="list-none">
                            <li>털색 : {v.colorCd}</li>
                            <li>
                              성별 :{" "}
                              {v.sexCd == "F"
                                ? "여자"
                                : v.sexCd == "M"
                                ? "남자"
                                : "미상"}
                            </li>
                            <li>몸무게 : {v.weight}</li>
                            <li>보호소 : {v.careAddr}</li>
                            <li>상태 : {v.processState}</li>
                            <li>공고 시작일 : {v.noticeSdt}</li>
                            <li>공고번호 : {v.noticeNo}</li>
                            <li>공고 종료일 : {v.noticeEdt}</li>
                            <li>발견장소 : {v.happenPlace}</li>
                            <li>발견날짜 : {v.happenDt}</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Petindex;
