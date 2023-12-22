import PropTypes from "prop-types";
import BoxPicture from "./BoxPicture";
import BoxInfo from "./BoxInfo";
import { ReactComponent as Heart } from "../../../../../Header/Search/icons/heart.svg";
import { ReactComponent as Orders } from "../../../../../Header/Search/icons/basket.svg";
// import Heart from "../../../../../Header/Search/icons/heart.svg?react";
// import Orders from "../../../../../Header/Search/icons/basket.svg?react";
import "./CardBox.scss";
import Button from "../../../../../Button/Button";
import BoxCounter from "./BoxCounter";
import { useSelector, useDispatch } from "react-redux";
import {
  selectorBaskets,
  selectorFavoritesIndex,
  selectorIsFormCurrentCurd,
} from "../../../../../../store/selectors";
import {
  actionIsFormCurrentCard,
  actionToggleFavorite,
  actionsAddCurrentCard,
  actionsAddToBasketsCount,
  actionsDeleteBasketCount,
} from "../../../../../../store/actions";
const CardBoxBasket = ({ handelShowModal, animation }) => {
  const favoriteIndex = useSelector(selectorFavoritesIndex);
  const baskets = useSelector(selectorBaskets);
  const dispatch = useDispatch();
  const handleButtonClick = (item, article) => {
    dispatch(actionToggleFavorite(item, article));
  };
  const handleCurrentCard = (cardPost) =>
    dispatch(actionsAddCurrentCard(cardPost));

  const handleDecrement = (item) => {
    dispatch(actionsAddToBasketsCount(item));
  };

  const handleIncrement = (item) => {
    dispatch(actionsDeleteBasketCount(item));
  };
  const isFormCurrentCard = useSelector(selectorIsFormCurrentCurd);
  const handelShowForm = () =>
    dispatch(actionIsFormCurrentCard(!isFormCurrentCard));

  const card = baskets.map((item) => (
    <div className="card__box box " key={item.article}>
      <BoxPicture data={item} /> <BoxInfo data={item} />
      {
        <BoxCounter
          item={item}
          increment={handleIncrement}
          decrement={handleDecrement}
        />
      }
      <div className="card__button__box">
        <Button
          className="card__button"
          type="button"
          click={() => {
            handelShowModal();
            handleCurrentCard(item);
          }}
        >
          {"Delete"}
        </Button>

        <Button
          className={`card__button-heart ${
            favoriteIndex.includes(item.article) ? "card__button-heart-red" : ""
          }`}
          click={() => {
            handleCurrentCard(item);
            handleButtonClick(item, item.article);
          }}
        >
          {<Heart />}
        </Button>
        <Button
          animation={animation}
          className="card__button"
          click={() => {
            handelShowForm();
            handleCurrentCard(item);
          }}
        >
          <Orders />
          Buy
        </Button>
      </div>
    </div>
  ));
  return <div className="card">{card}</div>;
};

CardBoxBasket.propTypes = {
  handelShowModal: PropTypes.func,
};

export default CardBoxBasket;
