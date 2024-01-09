import {
  FETCH_DETAIL_PRODUCTS,
  FETCH_PRODUCTS,
} from "../actions/actionType";

const initialState = {
  data: [],
  detail: {
    name: "",
    description: "",
    price: "",
    stock: "",
    mainImg: "",
    categoryId: 1,
    image1: "",
    image2: "",
    image3: "",
  },
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        data: action.payload,
      };
    case FETCH_DETAIL_PRODUCTS:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return state;
  }
}
