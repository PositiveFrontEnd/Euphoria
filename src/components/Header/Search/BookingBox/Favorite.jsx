import React from "react";
import { ReactComponent as Favorites } from "../icons/heart.svg";
// import Favorites from "../icons/heart.svg?react";
import Button from "../../../Button/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../../../store/selectors";

const Favorite = () => {
  const favorites = useSelector(selectFavorites);
  if (favorites.length === 0) {
    return (
      <span>
        <Link to="/FavoritePage">
          <Button className="booking__button">
            <Favorites />
          </Button>
        </Link>
      </span>
    );
  } else
    return (
      <span>
        {favorites.length}
        <Link to="/FavoritePage">
          <Button className="booking__button">
            <Favorites />
          </Button>
        </Link>
      </span>
    );
};
export default Favorite;
