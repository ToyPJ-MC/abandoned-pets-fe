import React, { useEffect, useState } from "react";
import { Card, CardContent, Pagination, Stack } from "@mui/material";
import { MaxpageAPI, allAPI, likeAPI } from "../api/server";
import { useRecoilState, useSetRecoilState } from "recoil";
import { maxpageDataState, petcardDataState } from "../states/atom";
import "../index.css";
import Loading from "../components/Loading";
import { getCookie } from "../util/Cookie";

const Petcard = () => {
  const [alldata, setAlldata] = useRecoilState(petcardDataState);
  const setMaxpage = useSetRecoilState(maxpageDataState);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const callAPI = async () => {
    await setLoading(true);
    await allAPI(page - 1, 6, setAlldata, setLoading);
    await setLoading(false);
  };
  useEffect(() => {
    callAPI();
  }, [page]);
  useEffect(() => {
    MaxpageAPI(setMaxpage);
  }, []);
  const pagehandleChange = (event: React.ChangeEvent<any>, value: number) => {
    setPage(value);
  };
  const cookies = getCookie("access_token");
  return (
    <>
      {!loading ? (
        <>
          {page && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              {alldata.map((v, index) => (
                <div className="flex justify-center items-center" key={index}>
                  <Card
                    sx={{
                      maxWidth: 300,
                      maxHeight: 500,
                      borderRadius: 5,
                    }}
                    elevation={0}
                    variant="outlined"
                  >
                    <img src={v.popfile} className="h-30" />
                    <div className="relative">
                      <CardContent className="list-none text-lg">
                        <li className="font-bold">나이 : {v.age}</li>
                        <li className="font-bold">털색 : {v.colorCd}</li>
                        <li className="font-bold">
                          성별 :{" "}
                          {v.sexCd == "F"
                            ? "암컷"
                            : v.sexCd == "M"
                            ? "숫컷"
                            : "미상"}
                        </li>
                        <li className="font-bold">몸무게 : {v.weight}</li>
                      </CardContent>
                      {cookies && v.like == false ? (
                        <div className="text-end absolute h-14 w-36 right-2 -bottom-1">
                          <button
                            className="bg-white outline-none text-2xl rounded-full text-center"
                            onClick={() => likeAPI(v.noticeNo)}
                          >
                            📦
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-center items-center mt-10">
            <Stack spacing={2}>
              <Pagination count={10} page={page} onChange={pagehandleChange} />
            </Stack>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default Petcard;
