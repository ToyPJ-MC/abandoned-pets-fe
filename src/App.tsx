import React from "react";
import { Main } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Petindex from "./pages/Petindex";
import Latestsearch from "./pages/Latestsearch";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Petindex" element={<Petindex />} />
      <Route path="/Latestsearch" element={<Latestsearch />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
