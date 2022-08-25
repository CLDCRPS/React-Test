import React, { Component, useState } from "react";
import PersonsList from "./components/PersonsList/PersonsList";
import PersonFullInfo from "./components/personFullInfo/PersonFullInfo";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

const App = () => {
  const [sort, setSort] = useState("");

  const handleChooseSort = (chosenSort) => {
    if (chosenSort === sort) {
      setSort("");
    } else {
      setSort(chosenSort);
    }
  };
  return (
    <div className="grid">
      <Navbar onClick={handleChooseSort} />
      <Routes>
        <Route path="/" element={<PersonsList sort={sort} />} />
        <Route path="/person/:personId" element={<PersonFullInfo />} />
      </Routes>
    </div>
  );
};

export default App;
