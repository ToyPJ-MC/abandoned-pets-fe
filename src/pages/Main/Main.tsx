import React from "react";
import Search from "../Search";

const Main = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col">
        <div className="ml-10">
          <h1>MJ PET</h1>
        </div>
        <div className="left-1/2 mt-10">
          <Search />
        </div>
      </div>
    </>
  );
};
export default Main;
