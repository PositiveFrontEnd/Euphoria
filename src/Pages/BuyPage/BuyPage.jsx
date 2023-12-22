import React from "react";
import { Link } from "react-router-dom";
import "../NotPage/NotPage.scss";
import { useSelector } from "react-redux";
import { selectorBasketFormValue } from "../../store/selectors";

const BuyPage = () => {
  const valueUser = useSelector(selectorBasketFormValue);
  return (
    <>
      <div className="note__page">
        <div>
          <p className="page__title"> Thanks for shopping {valueUser.name}</p>
          <p className="page__desc">Manager will call you later !</p>
          <p>
            <Link to="/"> Home</Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default BuyPage;
