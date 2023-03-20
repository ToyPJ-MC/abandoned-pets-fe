import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Box, Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import { petindexDataState } from "../states/atom";
import { SearchAPI } from "../api/server";

const Latestsearch = () => {
  let navigate = useNavigate();
  const [searchpage, setSearchpage] = useRecoilState(petindexDataState);
  const homeClick = () => {
    navigate("/");
  };
  useEffect(() => {
    SearchAPI(setSearchpage);
  }, []);
  return (
    <>
      <div className="h-full w-full flex flex-col">
        <div className="ml-10 mr-10">
          <h1 onClick={homeClick}>MJ PET</h1>
          <h2>최근 조회 목록</h2>
          <div>
            <Box sx={{ flexGrow: 1 }}>
              {/* <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              > */}
              {searchpage.map((v, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Card sx={{ minWidth: 300, marginTop: 3, borderRadius: 5 }}>
                    <div className="w-10 float-left">
                      <img
                        src={searchpage[index].popfile}
                        className="w-80 h-64"
                      />
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="">
                        <CardContent className="text-center list-none">
                          <li>
                            공고 시작일 :{" "}
                            {v.noticeSdt.substring(0, v.noticeSdt.indexOf("T"))}
                          </li>
                          <li>공고번호 : {v.noticeNo}</li>
                          <li>
                            공고 종료일 :{" "}
                            {v.noticeEdt.substring(0, v.noticeEdt.indexOf("T"))}
                          </li>
                          <li>발견장소 : {v.happenPlace}</li>
                          <li>
                            발견날짜 :{" "}
                            {v.happenDt.substring(0, v.happenDt.indexOf("T"))}
                          </li>
                        </CardContent>
                      </div>
                      <div className="float-right mt-8">
                        <CardContent className="list-none text-center">
                          <>
                            <li>나이 : {v.age}</li>
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
                          </>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </Grid>
              ))}
              {/* </Grid> */}
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};
export default Latestsearch;
