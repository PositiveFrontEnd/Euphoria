import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions.js";
import {
  favoritesFromStorage,
  favoritesIndexFromStorage,
  basketsItemFromStorage,
  basketsFromStorage,
} from "./actions.js";

const initialState = {
  favorites: [...favoritesFromStorage],
  cardsArr: [],
  favoritesIndex: [...favoritesIndexFromStorage],
  baskets: [...basketsFromStorage],
  basketsItem: [...basketsItemFromStorage],
  currentCard: {},
  basketFormValue: {},
  isModal: false,
  isForm: false,
  isFormCurrentCurd: false,
  isListOrTables: false,
};

export default createReducer(initialState, {
  [actions.actionAddToCardsArr]: (state, { payload }) => {
    state.cardsArr = payload;
  },
  [actions.actionAddToFavorite]: (state, { payload }) => {
    state.favorites = [...state.favorites, payload];
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  },
  [actions.actionDeleteWithFavorite]: (state, { payload }) => {
    state.favorites = payload;
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  },
  [actions.actionAddToFavoriteIndex]: (state, { payload }) => {
    state.favoritesIndex = [...state.favoritesIndex, payload];
    localStorage.setItem(
      "favoritesIndex",
      JSON.stringify(state.favoritesIndex)
    );
  },
  [actions.actionDeleteToFavoriteIndex]: (state, { payload }) => {
    state.favoritesIndex = payload;
    localStorage.setItem(
      "favoritesIndex",
      JSON.stringify(state.favoritesIndex)
    );
  },
  [actions.actionAddToBaskets]: (state, { payload }) => {
    state.baskets = [...state.baskets, payload];
    localStorage.setItem("baskets", JSON.stringify(state.baskets));
  },
  [actions.actionDeleteWithBaskets]: (state, { payload }) => {
    state.baskets = payload;
    localStorage.setItem("baskets", JSON.stringify(state.baskets));
  },
  [actions.actionAddToBAsketsItem]: (state, { payload }) => {
    state.basketsItem = [...state.basketsItem, payload];
    localStorage.setItem("basketsItem", JSON.stringify(state.basketsItem));
  },
  [actions.actionDeleteWithBAsketsItem]: (state, { payload }) => {
    state.basketsItem = payload;
    localStorage.setItem("basketsItem", JSON.stringify(state.basketsItem));
  },
  [actions.actionsAddCurrentCard]: (state, { payload }) => {
    state.currentCard = payload;
  },
  [actions.actionIsModal]: (state, { payload }) => {
    state.isModal = payload;
  },
  [actions.actionIsForm]: (state, { payload }) => {
    state.isForm = payload;
  },
  [actions.actionIsListOrTables]: (state, { payload }) => {
    state.isListOrTables = payload;
  },
  [actions.actionToggleBasketsCount]: (state, { payload }) => {
    console.log(payload);
    console.log(state);
    state.baskets = payload;
    localStorage.setItem("baskets", JSON.stringify(state.baskets));
  },
  [actions.actionAddToBasketFormValue]: (state, { payload }) => {
    state.basketFormValue = payload;
  },
  [actions.actionIsFormCurrentCard]: (state, { payload }) => {
    state.isFormCurrentCurd = payload;
  },
});
