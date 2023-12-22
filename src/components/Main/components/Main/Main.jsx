import React from "react";
import ShopNow from "../ShopNow/ShopNow";
import CardList from "./Card/CardsList";
const Main = () => {
  return (
    <section className="main">
      <ShopNow />
      <CardList />
    </section>
  );
};

export default Main;
