import { FETCH_CATEGORIES, FETCH_DETAIL_CATEGORY } from "../actions/actionType";

const initialState = {
    data: [],
    detail: {
        id : 0,
        name: ""
    }
}

export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {
                ...state,
                data: action.payload
            }
        case FETCH_DETAIL_CATEGORY: 
            return {
                ...state,
                detail: action.payload
            }
        default:
            return state
    }
}