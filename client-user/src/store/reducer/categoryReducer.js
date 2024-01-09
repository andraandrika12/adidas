import { FETCH_CATEGORIES } from "../action/actionType";

const initialValue = {
    data: []
}

export default function categoryReducer(state = initialValue, action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}