import axios from "axios";
import * as types from "./actionTypes";


// https://apis.myginee.com/v1/service/bhopal
// https://apis.myginee.com/v1/service/detail/17
// https://apis.myginee.com/v1/service/bhopal/photography
// https://apis.myginee.com/v1/service/bhopal/17

// get All Services

const getServices = (id) => (dispatch) => {
    dispatch({type: types.GET_SERVICE_REQUEST})
    
    return axios.get(`https://apis.myginee.com/v1/service/bhopal`)
    .then((res) => {
        dispatch({type: types.GET_SERVICE_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        dispatch({type: types.GET_SERVICE_ERROR, payload: err})
    })
}

// getServices-data
const getServiceData = (id) => (dispatch) => {
    dispatch({type: types.GET_SERVICE_DATA_REQUEST})

    return axios.get(`https://apis.myginee.com/v1/service/bhopal/${id}`)
    .then((res) => {
        dispatch({type: types.GET_SERVICE_DATA_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        dispatch({type: types.GET_SERVICE_DATA_ERROR, payload: err})
    })
}


 // getPhotography
const getPhotography = () => (dispatch) => {
     
    dispatch({type: types.GET_PHOTOGRAPHY_REQUEST})

    return axios.get(`https://apis.myginee.com/v1/service/bhopal/17`)
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




export {getServices, getServiceData, getPhotography, getBirthday}