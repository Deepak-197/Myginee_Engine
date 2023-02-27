import axios from "axios";
import * as types from "./actionTypes";

// Register
const getRegister = (payload) => (dispatch) => {

      
    dispatch({type: types.POST_REGISTER_REQUEST})

    return axios.post(`https://apis.myginee.com/v1/account/register`, payload)
    .then((res) => {
        dispatch({type: types.POST_REGISTER_SUCCESS, payload:res.data})
    }).catch((err) => {
        dispatch({type: types.POST_REGISTER_ERROR, payload:err})
    })
}


const getLogin = (payload) => (dispatch) => {

    // const LogPayload = {
    //     email:"",
    //     password:""
    // }
      
    dispatch({type: types.POST_LOGIN_REQUEST})

    return axios.post(`https://apis.myginee.com/v1/account/authenticate`, payload)
    .then((res) => {
        dispatch({type: types.POST_LOGIN_SUCCESS, payload:res.data})
    }).catch((err) => {
        dispatch({type: types.POST_LOGIN_ERROR, payload:err})
    })
}



    // "first_name": "Deepak",
    // "last_name": "Soni",
    // "extended_type": "C",
    // "gst_no": null,
    // "phone_number": "+917987827505",
    // "email": "deepaksoni4200@gmail.com",
    // "date_joined": "2023-02-21T12:55:21.408884+05:30",
    // "id": 31,
    // "username": null,

    export {getRegister, getLogin}