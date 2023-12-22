import React from "react";
import rootReducers from "./reducers";
import * as actions from "./actions";

describe("test reducers", () => {
  test("actionAddToCardsArr", () => {
    expect(rootReducers(undefined, { type: undefined })).toEqual({
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
      isListOrTables: false,
    });
  });

  test("actionAddToBaskets", () => {
    const initialState = {
      baskets: [],
    };
    const previsionState = initialState;
    expect(
      rootReducers(previsionState, actions.actionAddToBaskets({ card: 1 }))
    ).toEqual({
      ...initialState,
      baskets: [{ card: 1 }],
    });
  });
  test("actionsAddCurrentCard", () => {
    const initialState = {
      currentCard: {},
    };
    const previsionState = initialState;
    expect(
      rootReducers(
        previsionState,
        actions.actionsAddCurrentCard({ someCard: "dsfdf" })
      )
    ).toEqual({
      currentCard: { someCard: "dsfdf" },
    });
  });

  test("isModal", () => {
    const initialState = {
      isModal: false,
    };
    const previsionState = initialState;
    expect(rootReducers(previsionState, actions.actionIsModal(true))).toEqual({
      isModal: true,
    });
  });
});
