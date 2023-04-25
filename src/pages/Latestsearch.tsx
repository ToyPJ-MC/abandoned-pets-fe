import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Box, Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import { petindexDataState } from "../states/atom";
import { SearchAPI, removesearchlistAPI } from "../api/server";
import Loading from "../components/Loading";

const Latestsearch = () => {
  let navigate = useNavigate();
  const [searchpage, setSearchpage] = useRecoilState(petindexDataState);
  const [check, setCheck] = useState(false);
  const [scheck, setScheck] = useState(false);
  const [checkitems, setCheckitems] = useState<Array<string>>([]);
  const [loading, setLoading] = useState(true);

  const homeClick = () => {
    navigate("/");
  };
  const allcheckbtn = (checked: boolean) => {
    if (checked) {
      const noticeArray: any = [];
      searchpage.map((item) => noticeArray.push(item.noticeNo));
      setCheckitems(noticeArray);
    } else {
      setCheckitems([]);
    }
  };
  const singlecheckbtn = (checked: boolean, noticeNo: string) => {
    if (checked) {
      setCheckitems([...checkitems, noticeNo]);
    } else {
      setCheckitems(checkitems.filter((item) => item !== noticeNo));
    }
  };
  const allcheck = () => {
    setScheck(false);
    setCheck(true);
  };
  const singlecheck = () => {
    setCheck(false);
    setScheck(true);
  };
  const deleteclick = async () => {
    await removesearchlistAPI(checkitems);
    location.href = "/latestsearch";
  };

  useEffect(() => {
    SearchAPI(setSearchpage, setLoading);
  }, []);
  return (
    <>
      <div className="h-full w-full flex flex-col">
        <div className="ml-10 mr-10">
          <h1 onClick={homeClick}>MJ PET</h1>
          <h2>최근 조회 목록</h2>
          {searchpage.length !== 0 ? (
            <div className="grid grid-cols-3 gap-6">
              <button
                className="btn btn-ghost bg-white text-lg outline-none"
                onClick={allcheck}
              >
                전체선택
              </button>
              <button
                className="btn btn-ghost bg-white text-lg outline-none"
                onClick={singlecheck}
              >
                개별선택
              </button>

              <div>
                <button
                  className="btn btn-ghost bg-white text-lg outline-none"
                  onClick={deleteclick}
                >
                  삭제
                </button>
              </div>
            </div>
          ) : null}
          {searchpage.length !== 0 && !loading ? (
            <div>
              <Box sx={{ flexGrow: 1 }}>
                {searchpage.map((v, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    {scheck == true ? (
                      <input
                        type="checkbox"
                        value={v.noticeNo}
                        onChange={(e) =>
                          singlecheckbtn(e.target.checked, e.target.value)
                        }
                        checked={checkitems.includes(v.noticeNo)}
                      />
                    ) : check == true ? (
                      <input
                        type="checkbox"
                        value={v.noticeNo}
                        onChange={(e) => allcheckbtn(e.target.checked)}
                        checked={checkitems.length === searchpage.length}
                      />
                    ) : null}
                    <Card
                      sx={{
                        minWidth: 300,
                        marginTop: 3,
                        borderRadius: 5,
                      }}
                      elevation={0}
                      variant="outlined"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="h-72">
                          <img
                            src={searchpage[index].popfile}
                            className="w-full h-full object-cover"
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
                                  ? "암컷"
                                  : v.sexCd == "M"
                                  ? "숫컷"
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
                  </Grid>
                ))}
              </Box>
            </div>
          ) : searchpage.length === 0 ? (
            <div>
              <h1>최근조회 내역 없음</h1>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
};
export default Latestsearch;
