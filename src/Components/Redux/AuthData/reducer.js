import * as types from "./actionTypes";


const initialState = {
    isLoading: false,
     register:[],
     login:[],
     isError:false,
     isAuth:false
}


export const reducer = (state=initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case types.POST_REGISTER_REQUEST:
            return {...state, isLoading: true}
        
        case types.POST_REGISTER_SUCCESS:
            return {...state, isLoading: false, register: payload}

        case types.POST_REGISTER_ERROR:
            return {...state, isLoading: false, isError: true}

        case types.POST_LOGIN_REQUEST:
            return {...state, isLoading: true}

        case types.POST_LOGIN_SUCCESS:
            return {...state, isLoading: false, login: payload, isAuth: true}
        
        case types.POST_LOGIN_ERROR:
            return {...state, isLoading: false, isError: true}

        default:
           return state;
    }
}
