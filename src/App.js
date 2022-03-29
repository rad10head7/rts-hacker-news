import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, Search, History } from "./components";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Search />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  );
}

export default App;
