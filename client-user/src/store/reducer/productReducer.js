import {
    FETCH_PRODUCT_BY_ID,
    FETCH_PRODUCT_DETAIL,
} from "../action/actionType";

const initialState = {
    data: [],
    dataById: [],
    detail: {}
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCT_BY_ID:
            return {
                ...state,
                dataById: action.payload,
            };
        case FETCH_PRODUCT_DETAIL:
            return {
                ...state,
                detail: action.payload,
            };
        default:
            return state;
    }
}
