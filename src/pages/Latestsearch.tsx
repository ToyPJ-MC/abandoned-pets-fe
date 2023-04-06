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
              {searchpage.map((v, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  {v.popfile !== "" ? (
                    <Card
                      sx={{
                        minWidth: 300,
                        marginTop: 3,
                        borderRadius: 5,
                      }}
                      elevation={0}
                      variant="outlined"
                    >
                      <div className="grid grid-cols-3">
                        <div className="w-10">
                          <img
                            src={searchpage[index].popfile}
                            className="w-80 h-full"
                          />
                        </div>
                        <div className="mt-8">
                          <CardContent className="list-none text-center font-bold text-lg">
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
                        <div className="mt-10">
                          <CardContent className="text-center list-none font-bold text-lg">
                            <li>
                              공고 시작일 :{" "}
                              {v.noticeSdt.substring(
                                0,
                                v.noticeSdt.indexOf("T")
                              )}
                            </li>
                            <li>공고번호 : {v.noticeNo}</li>
                            <li>
                              공고 종료일 :{" "}
                              {v.noticeEdt.substring(
                                0,
                                v.noticeEdt.indexOf("T")
                              )}
                            </li>
                            <li>발견장소 : {v.happenPlace}</li>
                            <li>
                              발견날짜 :{" "}
                              {v.happenDt.substring(0, v.happenDt.indexOf("T"))}
                            </li>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  ) : (
                    <div>
                      <h1>최근조회 내역 없음</h1>
                    </div>
                  )}
                </Grid>
              ))}
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};
export default Latestsearch;
