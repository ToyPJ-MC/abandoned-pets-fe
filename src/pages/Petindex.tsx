import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { errorState, petindexDataState } from "../states/atom";
import { Card, CardContent, Box, Grid } from "@mui/material";
import { getCookie } from "../util/Cookie";
import { likeAPI } from "../api/server";

const Petindex = () => {
  let navigate = useNavigate();
  const [petindex, setPetindex] = useRecoilState(petindexDataState);
  const [error, setError] = useRecoilState(errorState);
  const cookies = getCookie("access_token");

  const homeClick = () => {
    navigate("/");
  };

  return (
    <>
      {error === 404 || 400 ? (
        <div className="ml-10">
          <div className="text-3xl mt-6 font-bold" onClick={homeClick}>
            Home
          </div>
          <h1>잘못된 조회</h1>
        </div>
      ) : petindex.length == 0 ? (
        <div className="ml-10">
          <div className="text-3xl mt-6 font-bold" onClick={homeClick}>
            Home
          </div>
          <div className="font-bold text-2xl mt-4">검색결과가 없습니다.</div>
        </div>
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
                          <div className="grid grid-cols-2">
                            <div>
                              <ul className="list-none font-bold">
                                <li>털색 : {v.colorCd}</li>
                                <li>
                                  성별 :{" "}
                                  {v.sexCd == "F"
                                    ? "암컷"
                                    : v.sexCd == "M"
                                    ? "숫컷"
                                    : "미상"}
                                </li>
                                <li>몸무게 : {v.weight}</li>
                                <li>보호소 : {v.careAddr}</li>
                                <li>상태 : {v.processState}</li>
                                <li>
                                  공고 시작일 : {v.noticeSdt.substring(0, 10)}
                                </li>
                                <li>공고번호 : {v.noticeNo}</li>
                                <li>
                                  공고 종료일 : {v.noticeEdt.substring(0, 10)}
                                </li>
                                <li>발견장소 : {v.happenPlace}</li>
                                <li>
                                  발견날짜 : {v.happenDt.substring(0, 10)}
                                </li>
                              </ul>
                            </div>
                            <div>
                              {cookies && v.like == false ? (
                                <div className="fixed text-end mr-6 bottom-0">
                                  <button
                                    className="bg-white outline-none text-lg"
                                    onClick={() => likeAPI(v.noticeNo)}
                                  >
                                    📦
                                  </button>
                                </div>
                              ) : null}
                            </div>
                          </div>
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
