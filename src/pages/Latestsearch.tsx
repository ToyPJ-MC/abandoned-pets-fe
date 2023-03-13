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
          <h1 className="text-green-700" onClick={homeClick}>
            MJ PET
          </h1>
          <h1>최근 조회 목록</h1>
          <div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {searchpage.map((v, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Card sx={{ minWidth: 300, marginTop: 5 }}>
                      <img
                        src={searchpage[index].popfile}
                        className="w-60 h-60"
                      />
                      <CardContent>
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
                          <li>공고 시작일 : {v.noticeSdt}</li>
                          <li>공고번호 : {v.noticeNo}</li>
                          <li>공고 종료일 : {v.noticeEdt}</li>
                          <li>발견장소 : {v.happenPlace}</li>
                          <li>발견날짜 : {v.happenDt}</li>
                        </>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};
export default Latestsearch;