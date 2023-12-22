import React from "react";
import CardBox from "./CardBox/CardBox";
import ModalText from "../../../../ModalText/ModalText";
import CardBoxList from "./CardBox/CardBoxList";
import Button from "../../../../Button/Button";
import "./CardList.scss";
import { ReactComponent as List } from "./CardBox/icons/list.svg";
import { ReactComponent as Tables } from "./CardBox/icons/tables.svg";
import {
  selectorBaskets,
  selectorCurrentCard,
  selectorIsListOrTables,
  selectorIsModal,
} from "../../../../../store/selectors";
import { useSelector, useDispatch } from "react-redux";
import {
  actionIsModal,
  actionAddToBasket,
  actionsAddToBasketsCount,
  actionIsListOrTables,
} from "../../../../../store/actions";

const CardList = () => {
  const dispatch = useDispatch();
  const isModal = useSelector(selectorIsModal);
  const handelShowModal = () => dispatch(actionIsModal(!isModal));
  const baskets = useSelector(selectorBaskets);
  const currentCard = useSelector(selectorCurrentCard);
  const isListOrTables = useSelector(selectorIsListOrTables);
  const handelListOrTables = () =>
    dispatch(actionIsListOrTables(!isListOrTables));
  const handleBaskets = (item, article) => {
    const isAddedBaskets = baskets.some((basket) => {
      return basket.article === item.article;
    });

    if (isAddedBaskets) {
      dispatch(actionsAddToBasketsCount(item));
    } else {
      dispatch(actionAddToBasket(item, article));
    }
  };

  return (
    <div className="card_container">
      <Button click={handelListOrTables} className="card__list__button">
        {isListOrTables ? <Tables /> : <List />}
      </Button>
      {isListOrTables ? (
        <CardBoxList handelShowModal={handelShowModal} />
      ) : (
        <CardBox handelShowModal={handelShowModal} />
      )}

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
};

export default CardList;
