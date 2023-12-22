import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../Button/Button";
import { ReactComponent as Orders } from "../icons/basket.svg";
// import Orders from "../icons/basket.svg?react";
import { useSelector } from "react-redux";
import { selectorBaskets } from "../../../../store/selectors";
const Order = () => {
  const baskets = useSelector(selectorBaskets);
  if (baskets.length === 0) {
    return (
      <span>
        <Link to="/BasketPage">
          <Button className="booking__button">
            <Orders />
          </Button>
        </Link>
      </span>
    );
  } else
    return (
      <span>
        {baskets.length}
        <Link to="/BasketPage">
          <Button className="booking__button">
            <Orders />
          </Button>
        </Link>
      </span>
    );
};

export default Order;
