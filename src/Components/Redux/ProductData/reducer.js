import * as types from "./actionTypes";

const initialState = {
    isLoading: false,
    photography: [],
    isError: false,
}

export const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case types.GET_PHOTOGRAPHY_REQUEST:
            return {...state, isLoading: true}
        
        case types.GET_PHOTOGRAPHY_SUCCESS:
            return {...state, isLoading: false, photography: payload}

        case types.GET_PHOTOGRAPHY_ERROR:
            return {...state, isLoading: false, isError: true}

        case types.GET_BIRTHDAY_REQUEST:
            return {...state, isLoading: true}

        case types.GET_BIRTHDAY_SUCCESS:
            return {...state, isLoading: false, photography: payload}

        case types.GET_BIRTHDAY_ERROR:
            return {...state, isLoading: false, isError: true}

        default:
            return state;
    }
}