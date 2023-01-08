import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../View/Home/Home";

export default function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}
