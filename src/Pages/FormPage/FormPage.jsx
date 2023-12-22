import React from "react";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  selectorBasketFormValue,
  selectorIsForm,
  selectorBaskets,
} from "../../store/selectors";
import {
  actionAddToBasketFormValue,
  actionIsForm,
  actionsDeleteAllCardsWithBaskets,
} from "../../store/actions";
import Button from "../../components/Button/Button";
import TextAreaBox from "../../components/Form/TextAreaBox/TextAreaBox";
import InputBox from "../../components/Form/InputBox/InputBox";
import "./FormPage.scss";
import validationSchema from "./validation.js";
const FormPage = ({ setAnimation }) => {
  const isForm = useSelector(selectorIsForm);
  const dispatch = useDispatch();
  const handelShowForm = () => dispatch(actionIsForm(!isForm));
  const basketFormValue = useSelector(selectorBasketFormValue);
  const baskets = useSelector(selectorBaskets);
  const handleWrapperClick = () => {
    if (isForm && handelShowForm) {
      handelShowForm();
    }
  };
  const totalCost = baskets.reduce((acc, item) => {
    const { price, count } = item;
    return acc + price * count;
  }, 0);

  const card = baskets.map((item) => {
    const { price, url, name, count } = item;

    return (
      <div key={item.article} className="basket__form__card">
        <img src={url} alt={name} />
        <p>Name : {name}</p>
        <p>Quantity : {count}</p>
        <p>Price : {price * count} ₴</p>
      </div>
    );
  });

  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  useEffect(() => {
    if (isSubmitClicked) {
      console.log("Інформація про покупця", basketFormValue);
      console.log("Інформація про придбаний товар", baskets);
    }
  }, [isSubmitClicked, basketFormValue, baskets]);

  return (
    isForm && (
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
                setTimeout(async () => {
                  dispatch(actionsDeleteAllCardsWithBaskets(baskets));
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
                    <Button
                      className="basket__form__submit"
                      type="submit"
                      click={() => {
                        console.log(basketFormValue);
                      }}
                    >
                      Checkout
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <div className="basket__card__box">{card}</div>
          <p className="total__price">Total Price : {totalCost} ₴</p>
        </div>
      </div>
    )
  );
};
export default FormPage;
