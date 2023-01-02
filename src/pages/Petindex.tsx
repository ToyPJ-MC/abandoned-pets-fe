<<<<<<< Updated upstream
<<<<<<< Updated upstream
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { petindexDataState } from '../states/atom';
import { Card, CardContent, CardMedia, Stack, Box, Grid } from '@mui/material';

const Petindex = () => {
   let navigate = useNavigate();
   const [petindex, setPetindex] = useRecoilState(petindexDataState);

   const homeClick = () => {
      navigate('/');
   };
   return (
      <>
         <div className="h-full w-full flex flex-col">
            <div className="ml-10 mr-10">
               <h1 className="text-green-700" onClick={homeClick}>
                  MJ PET
               </h1>
               <h3>{petindex[0].careNm}</h3>
               <h3>{petindex[0].kindCd}</h3>
               <div>
                  <Box sx={{ flexGrow: 1 }}>
                     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {petindex.map((v, index) => (
                           <Grid item xs={2} sm={4} md={4} key={index}>
                              <Card sx={{ minWidth: 300 }}>
                                 <img src={petindex[index].popfile} className="w-60 h-60" />
                                 <CardContent>
                                    <>
                                       <li>나이 : {v.age}</li>
                                       <li>털색 : {v.colorCd}</li>
                                       <li>성별 : {v.sexCd == 'F' ? '여자' : v.sexCd == 'M' ? '남자' : '미상'}</li>
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
=======
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { petindexDataState } from "../states/atom";
import { Card, CardContent, CardMedia } from "@mui/material";
import { findAPI } from "../api/server";

const Petindex = () => {
=======
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { petindexDataState } from "../states/atom";
import { Card, CardContent, CardMedia } from "@mui/material";
import { findAPI } from "../api/server";

const Petindex = () => {
>>>>>>> Stashed changes
  let navigate = useNavigate();
  const [petindex, setPetindex] = useRecoilState(petindexDataState);
  //const [petindex, setPetindex] = useState("");

  const homeClick = () => {
    navigate("/");
  };

  //   useEffect(() => {
  //     findAPI(
  //       "유기동물보호센터",
  //       "20221228",
  //       "안동시",
  //       "치와와",
  //       "417000",
  //       "N",
  //       "경상북도",
  //       "20221211",
  //       "notice",
  //       setPetindex
  //     );
  //   }, []);
  return (
    <>
      <div className="h-full w-full flex flex-col">
        <div className="ml-10">
          <h1 className="text-green-700" onClick={homeClick}>
            MJ PET
          </h1>
          {petindex.map((v, index) => (
            <Card sx={{ maxWidth: 345 }}>
              <img src={petindex[index].popfile} className="w-60 h-60" />
              <CardContent>
                <>
                  <li>{v.age}</li>
                  <li>{v.colorCd}</li>
                  <li>{v.sexCd}</li>
                </>
              </CardContent>
            </Card>
          ))}
          {/* <Card sx={{ maxWidth: 345 }}>
            <img src={petindex[0].popfile} className="w-60 h-60" />
            <CardContent>
              {petindex.map((item) => (
                <>
                  <li>{item.age}</li>
                  <li>{item.colorCd}</li>
                  <li>{item.sexCd}</li>
                </>
              ))}
            </CardContent>
          </Card> */}
        </div>
      </div>
    </>
  );
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
};
export default Petindex;
