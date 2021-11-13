import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contactus from "./pages/Contactus";
import Blogs from "./pages/Blogs";
import Art from "./pages/Art";
import Arttwo from "./pages/Arttwo";
import Artthree from "./pages/Artthree";
import Artfour from "./pages/Artfour";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contactus" element={<Contactus />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/Art" element={<Art />}></Route>
          <Route path="/Arttwo" element={<Arttwo />}></Route>
          <Route path="/Artthree" element={<Artthree />}></Route>
          <Route path="/Artfour" element={<Artfour />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
