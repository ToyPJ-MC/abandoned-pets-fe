import React from "react";
import { Main } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Petindex from "./pages/Petindex";
import Latestsearch from "./pages/Latestsearch";
import Profile from "./pages/Profile";
import KakaoLogin from "./components/KakaoLogin";
import Errorpage from "./pages/Errorpage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Petindex" element={<Petindex />} />
      <Route path="/Latestsearch" element={<Latestsearch />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/oauth2/redirect" element={<KakaoLogin />} />
      <Route path="/profile" element={<Profile />} />
      {/* <Route path="/oauth2/redirect" element={<Errorpage />} /> */}
    </Routes>
  );
};

export default App;
