import React from "react";
import { render, screen } from "@testing-library/react";
import BuyPage from "./BuyPage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Тестування компонента BuyPage", () => {
  test("Знімок", () => {
    const mockStore = configureStore();
    const initialState = {
      favorites: [],
      cardsArr: [],
      baskets: [],
      basketFormValue: {},
    };
    const store = mockStore(initialState);
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <BuyPage />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("some text", () => {
    const mockStore = configureStore();
    const initialState = {
      favorites: [],
      cardsArr: [],
      baskets: [],
      basketFormValue: {},
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <BuyPage />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Thanks for shopping/)).toBeInTheDocument();
  });
});
