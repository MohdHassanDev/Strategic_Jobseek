import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Signup } from "../screens";

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Approutes;
