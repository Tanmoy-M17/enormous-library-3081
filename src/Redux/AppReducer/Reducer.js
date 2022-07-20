import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionType"

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
                Books:payload,
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
            
    
        default:
            return {...state}
    }
}