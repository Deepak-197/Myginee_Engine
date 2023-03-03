import * as types from "./actionTypes";


const initialState = {
    isAuthLoading: false,
    register:[],
    login:[],
    isAuthError:false,
    isAuth:false
}


export const reducer = (state=initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case types.POST_REGISTER_REQUEST:
            return {...state, isAuthLoading: true}
        
        case types.POST_REGISTER_SUCCESS:
            return {...state, isAuthLoading: false, register: payload}

        case types.POST_REGISTER_ERROR:
            return {...state, isAuthLoading: false, isAuthError: true}

        case types.POST_LOGIN_REQUEST:
            return {...state, isAuthLoading: true}

        case types.POST_LOGIN_SUCCESS:
            return {...state, isAuthLoading: false, login: payload, isAuth: true}
        
        case types.POST_LOGIN_ERROR:
            return {...state, isAuthLoading: false, isAuthError: true}

        default:
           return state;
    }
}
