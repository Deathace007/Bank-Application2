import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register"; // Ensure this matches the exact case of the filename

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
