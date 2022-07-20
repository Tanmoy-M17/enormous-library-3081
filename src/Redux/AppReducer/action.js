import axios from "axios";
import {  GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionType"

export const getProducts=(params)=>(dispatch)=>{
    dispatch({type:GET_PRODUCTS_REQUEST});
    axios.get("http://localhost:8080/all?_limit=12")
    .then((r)=>dispatch({type:GET_PRODUCTS_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:GET_PRODUCTS_FAILURE}))
}
    