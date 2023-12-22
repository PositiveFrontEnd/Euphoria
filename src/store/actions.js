import { createAction } from "@reduxjs/toolkit";
import { sendRequest } from "../components/Helpers/SendRequest";

export const actionAddToCardsArr = createAction("ACTION_ADD_TO_CARDS_ARR");

export const actionAddToFavorite = createAction("ACTION_ADD_TO_FAVORITE");

export const actionDeleteWithFavorite = createAction(
  "ACTION_DELETE_WITH_FAVORITE"
);

export const actionAddToFavoriteIndex = createAction(
  "ACTION_ADD_TO_FAVORITE_INDEX"
);
export const actionDeleteToFavoriteIndex = createAction(
  "ACTION_DELETE_TO_FAVORITE_INDEX"
);
export const actionAddToBaskets = createAction("ACTIONS_ADD_TO_BASKETS");

export const actionDeleteWithBaskets = createAction(
  "ACTION_DELETE_WITH_BASKETS"
);
export const actionAddToBAsketsItem = createAction(
  "ACTIONS_ADD_TO_BASKETS_ITEM"
);
export const actionDeleteWithBAsketsItem = createAction(
  "ACTIONS_DELETE_WITH_BASKETS_ITEM"
);
export const actionIsListOrTables = createAction("ACTION_IS_LIST_OR_TABLES");
export const actionIsModal = createAction("ACTIONS_IS_MODAL");
export const actionIsForm = createAction("ACTION_IS_FORM");
export const actionsAddCurrentCard = createAction("ACTIONS_ADD_CURRENT_CARD");
export const actionToggleBasketsCount = createAction(
  "ACTION_TOGGLE_BASKETS_COUNT"
);
export const actionDeleteWithBasketsCount = createAction(
  "ACTION_DELETE_WITH_BASKETS_COUNT"
);
export const actionAddToBasketFormValue = createAction(
  "ACTION_ADD_TO_BASKET_FORM_VALUE"
);
export const actionIsFormCurrentCard = createAction(
  "ACTION_IS_FORM_CURRENT_CURD"
);
export const actionAddCardsToHomePages = () => (dispatch) => {
  return sendRequest("/Cards.json").then((result) => {
    dispatch(actionAddToCardsArr(result));
  });
};
export const actionToggleFavorite = (item, article) => (dispatch, getState) => {
  const { favorites, favoritesIndex } = getState();
  const isAddedFavorites = favorites.some(
    (favorite) => favorite.article === item.article
  );
  if (isAddedFavorites) {
    const exitClickedIndex = favoritesIndex.filter(
      (added) => added !== article
    );
    dispatch(actionDeleteToFavoriteIndex(exitClickedIndex));

    const exitFavorite = favorites.filter(
      (favorite) => favorite.article !== item.article
    );

    dispatch(actionDeleteWithFavorite(exitFavorite));
  } else {
    dispatch(actionAddToFavoriteIndex(article));
    dispatch(actionAddToFavorite(item));
  }
};
export const actionAddToBasket = (item) => (dispatch, getState) => {
  const { baskets } = getState();
  const isAddedBaskets = baskets.some((basket) => {
    basket.article === item.article;
  });
  if (!isAddedBaskets) {
    dispatch(actionAddToBaskets(item));
    dispatch(actionAddToBAsketsItem(item.article));
  }
};

export const actionDeleteItemFromBasket =
  (item, article) => (dispatch, getState) => {
    const { basketsItem, baskets } = getState();
    const isDeleteBaskets = baskets.some((basket) => {
      basket.article === item.article;
    });

    if (!isDeleteBaskets) {
      const isDeleteBasketsIndex = basketsItem.filter(
        (added) => added !== article
      );
      dispatch(actionDeleteWithBAsketsItem(isDeleteBasketsIndex));
      const isDeleteBaskets = baskets.filter(
        (basket) => basket.article !== item.article
      );
      dispatch(actionDeleteWithBaskets(isDeleteBaskets));
    }
  };

export const actionsDeleteBasketCount = (item) => (dispatch, getState) => {
  const { baskets } = getState();
  if (item.count === 1) {
    dispatch(actionDeleteItemFromBasket(item, item.article));
  } else {
    const updatedItem = { ...item, count: item.count - 1 };
    const updatedBaskets = baskets.map((basketItem) =>
      basketItem.article === item.article ? updatedItem : basketItem
    );
    dispatch(actionToggleBasketsCount(updatedBaskets));
  }
};

export const actionsAddToBasketsCount = (item) => (dispatch, getState) => {
  const { baskets } = getState();
  const updatedItem = { ...item, count: item.count + 1 };
  const updatedBaskets = baskets.map((basketItem) =>
    basketItem.article === item.article ? updatedItem : basketItem
  );
  dispatch(actionToggleBasketsCount(updatedBaskets));
};
export const actionsDeleteAllCardsWithBaskets = (baskets) => (dispatch) => {
  baskets.forEach((item) => {
    dispatch(actionDeleteItemFromBasket(item, item.article));
  });
};
export const favoritesFromStorage = JSON.parse(
  localStorage.getItem("favorites") || "[]"
);

export const favoritesIndexFromStorage = JSON.parse(
  localStorage.getItem("favoritesIndex") || "[]"
);

export const basketsFromStorage = JSON.parse(
  localStorage.getItem("baskets") || "[]"
);

export const basketsItemFromStorage = JSON.parse(
  localStorage.getItem("basketsItem") || "[]"
);
