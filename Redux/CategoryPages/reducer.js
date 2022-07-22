import {
  GET_CARS_FAILURE,
  GET_CARS_REQUEST,
  GET_CARS_SUCCESS,
  GET_MOTORCYCLES_FAILURE,
  GET_MOTORCYCLES_REQUEST,
  GET_MOTORCYCLES_SUCCESS,
  GET_RENT_HOUSE_FAILURE,
  GET_RENT_HOUSE_REQUEST,
  GET_RENT_HOUSE_SUCCESS,
  GET_SALES_HOUSE_FAILURE,
  GET_SALES_HOUSE_REQUEST,
  GET_SALES_HOUSE_SUCCESS,
  GET_SCOOTERS_FAILURE,
  GET_SCOOTERS_REQUEST,
  GET_SCOOTERS_SUCCESS,
  GET_COMMERICAL_FAILURE,
  GET_COMMERICAL_REQUEST,
  GET_COMMERICAL_SUCCESS,
  GET_SINGLE_PRODUCT_FAILURE,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "./actionTypes";

const initState = {
  products: [],
  SingleProduct: [],
  isLoading: false,
  isError: false,
};

export const Reducer = (state = initState, { type, payload }) => {
  switch (type) {
    //  CARS

    case GET_CARS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_CARS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }
    case GET_CARS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    // MOTORCYCLES
    case GET_MOTORCYCLES_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_MOTORCYCLES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }
    case GET_MOTORCYCLES_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    

    // SALES HOUSE

    case GET_SALES_HOUSE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_SALES_HOUSE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }
    case GET_SALES_HOUSE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    // SCOOTERS

    case GET_SCOOTERS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_SCOOTERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }
    case GET_SCOOTERS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    // RENT HOUSE
    case GET_RENT_HOUSE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_RENT_HOUSE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }
    case GET_RENT_HOUSE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    // COMMERICAL

    case GET_COMMERICAL_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_COMMERICAL_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }
    case GET_COMMERICAL_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }


    //Single Product Page
    case GET_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
      };

    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        SingleProduct: [...payload],
      };

    case GET_SINGLE_PRODUCT_FAILURE:
      return {
        ...state,
      };


    default: {
      return state;
    }
  }
};
