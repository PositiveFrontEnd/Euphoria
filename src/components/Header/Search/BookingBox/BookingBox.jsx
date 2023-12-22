import React from "react";
import Favorite from "./Favorite";
import Order from "./Order";
import "./BookingBox.scss";

const BookingBox = () => {
  return (
    <div className="booking">
      <Favorite />
      <Order />
    </div>
  );
};

export default BookingBox;
