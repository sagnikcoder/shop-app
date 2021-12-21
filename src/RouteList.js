import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminMenu from "./pages/AdminMenu";
import AdminHome from "./pages/AdminHome";
const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/AdminHome" element={<AdminHome/>}/>
        <Route path="/AdminMenu" element={<AdminMenu/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteList;