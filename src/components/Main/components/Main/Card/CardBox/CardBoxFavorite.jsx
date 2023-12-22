import PropTypes from "prop-types";
import BoxPicture from "./BoxPicture";
import BoxInfo from "./BoxInfo";
import "./CardBox.scss";
import { ReactComponent as Heart } from "../../../../../Header/Search/icons/heart.svg";
// import Heart from "../../../../../Header/Search/icons/heart.svg?react";
import Button from "../../../../../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFavorites,
  selectorBasketsItem,
  selectorFavoritesIndex,
} from "../../../../../../store/selectors";
import {
  actionToggleFavorite,
  actionsAddCurrentCard,
} from "../../../../../../store/actions";

const CardBoxFavorite = ({ handelShowModal }) => {
  const favorites = useSelector(selectFavorites);
  const favoriteIndex = useSelector(selectorFavoritesIndex);
  const dispatch = useDispatch();
  const basketsItem = useSelector(selectorBasketsItem);

  const handleButtonClick = (item, article) => {
    dispatch(actionToggleFavorite(item, article));
  };
  const handleCurrentCard = (cardPost) =>
    dispatch(actionsAddCurrentCard(cardPost));

  const card = favorites.map((item) => (
    <div className="card__box box " key={item.article}>
      <BoxPicture data={item} /> <BoxInfo data={item} />
      <div className="card__button__box">
        <Button
          className="card__button"
          type="button"
          onClick={() => {
            handelShowModal();
            handleCurrentCard(item);
          }}
        >
          {`${basketsItem.includes(item.article) ? "In a Basket" : "Buy"}`}
        </Button>
        <Button
          className={`card__button-heart ${
            favoriteIndex.includes(item.article) ? "card__button-heart-red" : ""
          }`}
          onClick={() => {
            handleCurrentCard(item);
            handleButtonClick(item, item.article);
          }}
        >
          {<Heart />}
        </Button>
      </div>
    </div>
  ));

  return <div className="card">{card}</div>;
};

CardBoxFavorite.propTypes = {
  handelShowModal: PropTypes.func,
};

export default CardBoxFavorite;
