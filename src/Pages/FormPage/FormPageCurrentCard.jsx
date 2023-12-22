import React from "react";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import {
  selectorBasketFormValue,
  selectorIsFormCurrentCurd,
  selectorCurrentCard,
} from "../../store/selectors";
import {
  actionAddToBasketFormValue,
  actionDeleteItemFromBasket,
  actionIsFormCurrentCard,
} from "../../store/actions";
import Button from "../../components/Button/Button";
import TextAreaBox from "../../components/Form/TextAreaBox/TextAreaBox";
import InputBox from "../../components/Form/InputBox/InputBox";
import "./FormPage.scss";
import { useEffect, useState } from "react";
import validationSchema from "./validation.js";
const FormPageCurrentCard = ({ setAnimation }) => {
  const isFormCurrentCard = useSelector(selectorIsFormCurrentCurd);
  const dispatch = useDispatch();
  const basketFormValue = useSelector(selectorBasketFormValue);
  const currentCard = useSelector(selectorCurrentCard);
  const handelShowForm = () =>
    dispatch(actionIsFormCurrentCard(!isFormCurrentCard));
  const handleWrapperClick = () => {
    if (isFormCurrentCard && handelShowForm) {
      handelShowForm();
    }
  };
  const cardOne = () => {
    const { price, url, name, count } = currentCard;
    return (
      <>
        <div className="basket__form__current__card">
          <img src={url} alt={name} />
          <p>Name : {name}</p>
          <p>Quantity : {count}</p>
          <p>Price : {price * count} ₴</p>
          <p>Total Prise : {price * count}</p>
        </div>
      </>
    );
  };
  const CurrentCardOne = cardOne();
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  useEffect(() => {
    if (isSubmitClicked) {
      console.log("Інформація про покупця", basketFormValue);
      console.log("Інформація про придбаний товар", currentCard);
    }
  }, [isSubmitClicked, basketFormValue, currentCard]);
  return (
    isFormCurrentCard && (
      <div onClick={handleWrapperClick} className="basket">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="basket__box"
        >
          <div className="basket__form">
            <Formik
              initialValues={{}}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                dispatch(actionAddToBasketFormValue(values));
                handelShowForm();
                setAnimation(true);
                setTimeout(() => {
                  dispatch(
                    actionDeleteItemFromBasket(currentCard, currentCard.article)
                  );

                  setAnimation(false);
                  resetForm();
                }, 3000);
                setIsSubmitClicked(true);
              }}
            >
              {({ errors, touched }) => {
                return (
                  <Form>
                    <Button
                      className="basket__form__close"
                      click={handelShowForm}
                    >
                      x
                    </Button>
                    <InputBox
                      className="mb-3"
                      label="Name"
                      name="name"
                      placeholder="name"
                      error={errors.name}
                    />
                    <InputBox
                      label="Sur Name"
                      className="mb-3"
                      name="SurName"
                      placeholder="Sur Name"
                      error={errors.SurName}
                    />
                    <InputBox
                      label="Age"
                      name="Age"
                      placeholder="Age"
                      className="mb-3"
                      error={errors.Age}
                    />
                    <InputBox
                      label="Address"
                      name="Address"
                      placeholder="Address"
                      className="mb-3"
                      error={errors.Address}
                    />
                    <InputBox
                      type="tel"
                      label="Phone"
                      name="phone"
                      placeholder="phone"
                      className="mb-3"
                      error={errors.phone}
                    />
                    <TextAreaBox
                      label="Write a comment to the order "
                      name="comment"
                    />
                    <Button className="basket__form__submit" type="submit">
                      Checkout
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <div className="basket__card__box">{CurrentCardOne}</div>
        </div>
      </div>
    )
  );
};

export default FormPageCurrentCard;
