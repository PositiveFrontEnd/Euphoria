import React from "react";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import ModalText from "./ModalText";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
const handelClick = jest.fn();
describe("test Modal", () => {
  test("render Modal", () => {
    const mockStore = configureStore();
    const initialState = {
      favorites: [],
      cardsArr: [],
      favoritesIndex: [],
      baskets: [],
      basketsItem: [],
      currentCard: {},
      basketFormValue: {},
      basketsCount: [],
      isModal: false,
      isForm: false,
      isFormCurrentCurd: false,
    };
    const data = {
      article: 1,
      color: "red",
      name: "Yevhen",
      price: 200,
      url: "/",
    };
    const store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalText data={data} />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
