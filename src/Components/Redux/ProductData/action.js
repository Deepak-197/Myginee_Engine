import axios from "axios";
import * as types from "./actionTypes";

// getPhotography

const getPhotography = () => (dispatch) => {
     
    dispatch({type: types.GET_PHOTOGRAPHY_REQUEST})

    return axios.get(`https://apis.myginee.com/v1/service/bhopal/photography`)
    .then((r) => {
        dispatch({type: types.GET_PHOTOGRAPHY_SUCCESS, payload:r.data})
    })
    .catch((e) => {
        dispatch({type: types.GET_PHOTOGRAPHY_ERROR, payload:e})
    })
}

// data inside photography inside Birthday shoot

const getBirthday = () => (dispatch) => {
    
    dispatch({type: types.GET_BIRTHDAY_REQUEST})

    // return axios.get(`https://apis.myginee.com/v1/service/bhopal/photography/12`)
    return axios.get(`https://apis.myginee.com/v1/service/package/get/all/12`)
    .then((res) => {
        dispatch({type: types.GET_BIRTHDAY_SUCCESS, payload:res.data})
    })
    .catch((err) => dispatch({type: types.GET_BIRTHDAY_ERROR, payload:err}))
}




export {getPhotography, getBirthday}