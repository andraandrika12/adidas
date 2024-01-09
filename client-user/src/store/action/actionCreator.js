import {
  FETCH_CATEGORIES,
  FETCH_PRODUCT_BY_ID,
  FETCH_PRODUCT_DETAIL,
} from "./actionType";

const urlBase = "https://react.andraandrika.xyz/";

export const fetchProductByIdSuccess = (payload) => {
  return {
    type: FETCH_PRODUCT_BY_ID,
    payload,
  };
};

export const fetchProductById = (categoryId) => {
  return async function (dispatch, getState) {
    await fetch(urlBase + "user/products/category/" + categoryId)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchProductByIdSuccess(data));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchCategoriesSuccess = (payload) => {
  return {
    type: FETCH_CATEGORIES,
    payload,
  };
};

export const fetchCategories = () => {
  return async function (dispatch, getState) {
    await fetch(urlBase + "user/category")
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchCategoriesSuccess(data));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchProductDetailSuccess = (payload) => {
  return {
    type: FETCH_PRODUCT_DETAIL,
    payload,
  };
};

export const fetchProductDetail = (id) => {
  return async function (dispatch, getState) {
    await fetch(urlBase + "user/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchProductDetailSuccess(data));
      });
  };
};
