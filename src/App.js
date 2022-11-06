import "./App.css";

import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ImageWithButton from "./pages/ImageWithButton";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/load-image-with-button" element={<ImageWithButton />} />
      </Route>
    </Routes>
  );
}
