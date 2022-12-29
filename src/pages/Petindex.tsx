import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { petindexDataState } from "../states/atom";
import { Card, CardContent, CardMedia } from "@mui/material";
import { findAPI } from "../api/server";

const Petindex = () => {
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
};
export default Petindex;
