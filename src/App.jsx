import React from "react";
import "./Reset.css";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import FavoritePage from "./Pages/FavoritePage/FavoritePage";
import BasketPage from "./Pages/BasketPage/BasketPage";
import NotPage from "./Pages/NotPage/NotePage";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/FavoritePage" element={<FavoritePage />} />
      <Route path="/BasketPage" element={<BasketPage />} />
      <Route path="*" element={<NotPage />} />
    </Routes>
  );
};

export default App;
