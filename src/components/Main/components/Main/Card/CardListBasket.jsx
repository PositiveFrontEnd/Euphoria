import CardBoxBasket from "./CardBox/CardBoxBasket";
import ModalBasket from "../../../../ModalBasket/ModalBasket";
import FormPage from "../../../../../Pages/FormPage/FormPage";
import NotPage from "../../../../../Pages/NotPage/NotePage";
import Animation from "../../../../Helpers/Animation";
import { ReactComponent as Orders } from "../../../../Header/Search/icons/basket.svg";
// import Orders from "../../../../Header/Search/icons/basket.svg?react";
import Button from "../../../../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  selectorBaskets,
  selectorIsModal,
  selectorCurrentCard,
  selectorIsForm,
  selectorBasketFormValue,
} from "../../../../../store/selectors";
import {
  actionsDeleteBasketCount,
  actionIsForm,
  actionIsModal,
} from "../../../../../store/actions";
import FormPageCurrentCard from "../../../../../Pages/FormPage/FormPageCurrentCard";
import { useState } from "react";
import BuyPage from "../../../../../Pages/BuyPage/BuyPage";

const CardListBasket = () => {
  const isModal = useSelector(selectorIsModal);
  const handelShowModal = () => dispatch(actionIsModal(!isModal));
  const isForm = useSelector(selectorIsForm);
  const handelShowForm = () => dispatch(actionIsForm(!isForm));
  const currentCard = useSelector(selectorCurrentCard);
  const baskets = useSelector(selectorBaskets);
  const formValue = useSelector(selectorBasketFormValue);
  const dispatch = useDispatch();
  const currentFormValue = (formValue) => {
    return Object.keys(formValue).length === 0;
  };

  const [animation, setAnimation] = useState(false);
  if (baskets.length === 0 && currentFormValue(formValue)) {
    return <NotPage />;
  }
  if (!currentFormValue(formValue) && baskets.length === 0) {
    return <BuyPage />;
  } else {
    return (
      <div className="card_container">
        <Button
          className="card__button__buy"
          animation={animation}
          click={handelShowForm}
        >
          <span>{baskets.length}</span>
          <Orders />
          Buy
        </Button>
        <Animation animation={animation} />
        <CardBoxBasket
          animation={animation}
          handelShowModal={handelShowModal}
        />
        <FormPage setAnimation={setAnimation} />
        <FormPageCurrentCard setAnimation={setAnimation} />

        <ModalBasket
          data={currentCard}
          handleClose={handelShowModal}
          handleOK={() => {
            handelShowModal();
            dispatch(
              actionsDeleteBasketCount(currentCard, currentCard.article)
            );
          }}
        ></ModalBasket>
      </div>
    );
  }
};

export default CardListBasket;
