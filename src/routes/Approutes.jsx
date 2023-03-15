import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../screens";

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Approutes;
