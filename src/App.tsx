import React from "react";
import { Main } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Petindex from "./pages/Petindex";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Petindex" element={<Petindex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
