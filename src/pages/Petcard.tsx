import React, { Suspense, useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Pagination,
  Grid,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { MaxpageAPI, allAPI, likeAPI } from "../api/server";
import { useRecoilState } from "recoil";
import { maxpageDataState, petcardDataState } from "../states/atom";
import "../index.css";
import Loading from "../components/Loading";

const Petcard = () => {
  const [alldata, setAlldata] = useRecoilState(petcardDataState);
  const [maxpage, setMaxpage] = useRecoilState(maxpageDataState);
  const [petregist, setPetregist] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    allAPI(page - 1, 6, setAlldata, setLoading);
  }, [page]);
  useEffect(() => {
    MaxpageAPI(setMaxpage);
  }, []);
  const pagehandleChange = (event: React.ChangeEvent<any>, value: number) => {
    setPage(value);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          {!loading ? (
            <>
              {alldata.map((v, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Card
                    sx={{
                      maxWidth: 300,
                      marginLeft: 10,
                      maxHeight: 500,
                      marginRight: 10,
                      borderRadius: 5,
                    }}
                    elevation={0}
                    variant="outlined"
                  >
                    <img src={alldata[index].popfile} className="h-30" />
                    <div className="relative">
                      <CardContent className="list-none text-lg">
                        <li className="font-bold">나이 : {v.age}</li>
                        <li className="font-bold">털색 : {v.colorCd}</li>
                        <li className="font-bold">
                          성별 :
                          {v.sexCd == "F"
                            ? "여자"
                            : v.sexCd == "M"
                            ? "남자"
                            : "미상"}
                        </li>
                        <li className="font-bold">몸무게 : {v.weight}</li>
                      </CardContent>
                      <div className="text-end absolute h-14 w-36 right-2 -bottom-1">
                        <button
                          className="bg-white outline-none text-2xl animate-bounce rounded-full text-center"
                          onClick={() => likeAPI(v.noticeNo)}
                        >
                          📦
                        </button>
                      </div>
                    </div>
                  </Card>
                </Grid>
              ))}
            </>
          ) : (
            <Loading />
          )}
        </Grid>

        <div>
          <Stack spacing={2} className="place-content-center mt-10">
            <Pagination
              count={10}
              page={page}
              onChange={pagehandleChange}
              sx={{ paddingLeft: "40%" }}
            />
          </Stack>
        </div>
      </Box>
    </>
  );
};
export default Petcard;
