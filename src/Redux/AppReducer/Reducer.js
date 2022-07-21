import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionType"
import { POSTDATA_SUCCESS,POSTDATA_REQUEST,POSTDATA_FAILURE } from "./actionType";
const intialState={
    Products:[],
    isLoading:false,
    isError:false
}
export const reducer=(state=intialState,{type,payload})=>{
    switch (type) {
        case GET_PRODUCTS_REQUEST:{
            return{
            ...state,
            isLoading:true,
            isError:false
            }
        }
        case GET_PRODUCTS_SUCCESS:{
            return {
                ...state,
                Products:payload,
                isLoading:false,
                isError:false
            }
        }
        case GET_PRODUCTS_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
        case POSTDATA_REQUEST:return {...state,isLoading:true}  
        case POSTDATA_SUCCESS:return {...state,isLoading:false,isError:false,Products:[...state.Products,payload]}  
        case POSTDATA_FAILURE:return {...state,isError:true}
        default:
            return {...state}
    }
}