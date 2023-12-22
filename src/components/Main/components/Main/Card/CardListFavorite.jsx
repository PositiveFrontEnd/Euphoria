import CardBoxFavorite from "./CardBox/CardBoxFavorite.jsx";
import ModalText from "../../../../ModalText/ModalText";
import NotPage from "../../../../../Pages/NotPage/NotePage";
import { useSelector, useDispatch } from "react-redux";
import {
  selectorCurrentCard,
  selectorIsModal,
  selectFavorites,
  selectorBaskets,
} from "../../../../../store/selectors";
import {
  actionsDeleteBasketCount,
  actionIsModal,
  actionAddToBasket,
} from "../../../../../store/actions.js";
const CardListFavorite = () => {
  const isModal = useSelector(selectorIsModal);
  const handelShowModal = () => dispatch(actionIsModal(!isModal));
  const currentCard = useSelector(selectorCurrentCard);
  const baskets = useSelector(selectorBaskets);
  const dispatch = useDispatch();
  const handleBaskets = (item, article) => {
    const isAddedBaskets = baskets.some((basket) => {
      return basket.article === item.article;
    });
    if (isAddedBaskets) {
      dispatch(actionsDeleteBasketCount(item));
    } else {
      dispatch(actionAddToBasket(currentCard, article));
    }
  };
  const favorites = useSelector(selectFavorites);
  if (favorites.length === 0) {
    return <NotPage />;
  } else {
    return (
      <div className="card_container">
        <CardBoxFavorite handelShowModal={handelShowModal} />
        <ModalText
          data={currentCard}
          handleClose={handelShowModal}
          handleOK={() => {
            handelShowModal();
            handleBaskets(currentCard, currentCard.article);
          }}
        ></ModalText>
      </div>
    );
  }
};

export default CardListFavorite;
