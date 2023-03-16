import React, { useEffect, useState } from "react";
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
import { MaxpageAPI, allAPI } from "../api/server";
import { useRecoilState } from "recoil";
import { maxpageDataState, petcardDataState } from "../states/atom";
import "../index.css";

const Petcard = () => {
  const [alldata, setAlldata] = useRecoilState(petcardDataState);
  const [maxpage, setMaxpage] = useRecoilState(maxpageDataState);
  const [page, setPage] = useState(0);
  useEffect(() => {
    allAPI(page, 6, setAlldata);
  }, [page]);
  useEffect(() => {
    MaxpageAPI(setMaxpage);
  }, []);
  const pagehandleChange = (event: React.ChangeEvent<any>, value: number) => {
    setPage(value - 1);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
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
              >
                <img src={alldata[index].popfile} className="h-30" />
                <CardContent>
                  <li>나이 : {v.age}</li>
                  <li>털색 : {v.colorCd}</li>
                  <li>
                    성별 :{" "}
                    {v.sexCd == "F" ? "여자" : v.sexCd == "M" ? "남자" : "미상"}
                  </li>
                  <li>몸무게 : {v.weight}</li>
                </CardContent>
                <CardActions>
                  <Button size="small">Detail</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div>
          <Stack spacing={2} className="place-content-center mt-5">
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
