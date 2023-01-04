import React, { useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { allAPI } from "../api/server";
import { useRecoilState } from "recoil";
import { petcardDataState } from "../states/atom";

const Petcard = () => {
  const [alldata, setAlldata] = useRecoilState(petcardDataState);
  useEffect(() => {
    allAPI(1, 6, setAlldata);
  }, []);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {alldata.map((v, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card sx={{ maxWidth: 300, marginLeft: 10 }}>
                <img src={alldata[index].popfile} className="w-40 h-30" />
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
      </Box>
    </>
  );
};
export default Petcard;
