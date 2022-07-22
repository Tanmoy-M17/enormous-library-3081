import axios from "axios";
import {  GET_ATYPE_PRODUCTS_FAILURE, GET_ATYPE_PRODUCTS_REQUEST, GET_ATYPE_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_SINGEL_PRODUCTS_FAILURE, GET_SINGEL_PRODUCTS_REQUEST, GET_SINGEL_PRODUCTS_SUCCESS } from "./actionType"
import { POSTDATA_SUCCESS,POSTDATA_REQUEST,POSTDATA_FAILURE } from "./actionType";
export const getProducts=(params)=>(dispatch)=>{
    dispatch({type:GET_PRODUCTS_REQUEST});
    axios.get(`http://localhost:8080/freshrecomentation?_limit=${params}`)
    .then((r)=>dispatch({type:GET_PRODUCTS_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:GET_PRODUCTS_FAILURE}))
}

export const getAtypeproduct=({type,limit})=>(dispatch)=>{
    dispatch({type:GET_ATYPE_PRODUCTS_REQUEST});
    axios.get(` http://localhost:8080/${type}?_limit=${limit}`)
    .then((r)=>dispatch({type:GET_ATYPE_PRODUCTS_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:GET_ATYPE_PRODUCTS_FAILURE}))
}
export const getSingelProduct=({category,id})=>(dispatch)=>{
    dispatch({type:GET_SINGEL_PRODUCTS_REQUEST});
    axios.get(`http://localhost:8080/${category}/${id}`)
    .then((r)=>dispatch({type:GET_SINGEL_PRODUCTS_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:GET_SINGEL_PRODUCTS_FAILURE}))
}

//POSTING ADVERTISE/DATA
export const postData=(payload)=>(dispatch)=>{
    dispatch({type:POSTDATA_REQUEST})
    return axios.post("http://localhost:8080/cars",payload)
    .then((r)=>{dispatch({type:POSTDATA_SUCCESS,payload:r.data})
        return POSTDATA_SUCCESS;
    }).catch(()=>dispatch({type:POSTDATA_FAILURE}))
}
    