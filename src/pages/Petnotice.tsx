import React, { useEffect } from "react";
import { Paper } from "@mui/material";
import Petcard from "./Petcard";

const Petnotice = () => {
  return (
    <>
      <div className="container mx-auto mt-20 mb-10">
        <h2>유기동물 공고</h2>
        <Paper
          sx={{
            height: "800px",
            minWidth: 200,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: "30px",
          }}
          elevation={3}
        >
          <Petcard />
        </Paper>
      </div>
    </>
  );
};
export default Petnotice;
