import React from "react";
import { Link } from "react-router-dom";
import "./NotPage.scss";
const NotPage = () => {
  return (
    <>
      <div className="note__page">
        <div>
          <p className="page__title"> This page has been abducted</p>
          <p className="page__desc">
            Let's head back home and try that again. The truth is out there...
          </p>
          <p>
            <Link to="/"> Home</Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default NotPage;
