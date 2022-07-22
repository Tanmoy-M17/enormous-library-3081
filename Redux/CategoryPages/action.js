import axios from "axios";

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

//  Cars actions
export const getCarRequest = () => {
  return {
    type: GET_CARS_REQUEST,
  };
};

export const getCarSuccess = (payload) => {
  return {
    type: GET_CARS_SUCCESS,
    payload,
  };
};

export const getCarFailure = () => {
  return {
    type: GET_CARS_FAILURE,
  };
};

export const getCarsList = (payload) => (dispatch) => {
  dispatch(getCarRequest());
  axios
    .get("https://json-server-olx.herokuapp.com/cars")
    .then((res) => {
      dispatch(getCarSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getCarFailure());
    });
};

// Motorcycles actions

export const getMotorcyclesRequest = () => {
  return {
    type: GET_MOTORCYCLES_REQUEST,
  };
};

export const getMotorcyclesSuccess = (payload) => {
  return {
    type: GET_MOTORCYCLES_SUCCESS,
    payload,
  };
};

export const getMotorcyclesFailure = () => {
  return {
    type: GET_MOTORCYCLES_FAILURE,
  };
};

export const getMotorcyclesList = (payload) => (dispatch) => {
  dispatch(getMotorcyclesRequest());
  axios
    .get("https://json-server-olx.herokuapp.com/motorcycles")
    .then((res) => {
      dispatch(getMotorcyclesSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getMotorcyclesFailure());
    });
};



// Sales house action

export const getSalesHouseRequest = () => {
  return {
    type: GET_SALES_HOUSE_REQUEST,
  };
};

export const getSalesHouseSuccess = (payload) => {
  return {
    type: GET_SALES_HOUSE_SUCCESS,
    payload,
  };
};

export const getSalesHouseFailure = () => {
  return {
    type: GET_SALES_HOUSE_FAILURE,
  };
};

export const getSalesHouseList = (payload) => (dispatch) => {
  dispatch(getSalesHouseRequest());
  axios
    .get("https://json-server-olx.herokuapp.com/salesHouse")
    .then((res) => {
      dispatch(getSalesHouseSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getSalesHouseFailure());
    });
};

// Scooters action

export const getScootersRequest = () => {
  return {
    type: GET_SCOOTERS_REQUEST,
  };
};

export const getScootersSuccess = (payload) => {
  return {
    type: GET_SCOOTERS_SUCCESS,
    payload,
  };
};

export const getScootersFailure = () => {
  return {
    type: GET_SCOOTERS_FAILURE,
  };
};

export const getScootersData = (payload) => (dispatch) => {
  dispatch(getScootersRequest());
  axios
    .get("https://json-server-olx.herokuapp.com/scooters")
    .then((res) => {
      dispatch(getScootersSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getScootersFailure());
    });
};

// Commerical action

export const getCommericalRequest = () => {
  return {
    type: GET_COMMERICAL_REQUEST,
  };
};

export const getCommericalSuccess = (payload) => {
  return {
    type: GET_COMMERICAL_SUCCESS,
    payload,
  };
};

export const getCommericalFailure = () => {
  return {
    type: GET_COMMERICAL_FAILURE,
  };
};

export const getCommericalData = (payload) => (dispatch) => {
  dispatch(getCommericalRequest());
  axios
    .get("https://json-server-olx.herokuapp.com/commerical")
    .then((res) => {
      dispatch(getCommericalSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getCommericalFailure());
    });
};

// Rent house action

export const getRentHouseRequest = () => {
  return {
    type: GET_RENT_HOUSE_REQUEST,
  };
};

export const getRentHouseSuccess = (payload) => {
  return {
    type: GET_RENT_HOUSE_SUCCESS,
    payload,
  };
};

export const getRentHouseFailure = () => {
  return {
    type: GET_RENT_HOUSE_FAILURE,
  };
};

export const getRentHouseData = (payload) => (dispatch) => {
  dispatch(getRentHouseRequest());
  axios
    .get("https://json-server-olx.herokuapp.com/rentHouse")
    .then((res) => {
      dispatch(getRentHouseSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getRentHouseFailure());
    });
};

// single product Page action

export const getSingleProductRequest = () => ({
  type: GET_SINGLE_PRODUCT_REQUEST,
});
export const getSingleProductSuccess = (payload) => ({
  type: GET_SINGLE_PRODUCT_SUCCESS,
  payload,
});
export const getSingleProductFailure = () => ({
  type: GET_SINGLE_PRODUCT_FAILURE,
});

export const getSingleProduct = (payload) => (dispatch) => {
  dispatch(getSingleProductRequest());
  axios
    .get(
      `https://json-server-olx.herokuapp.com/${payload.category}?id=${payload.id}`
    )
    .then((res) => {
      dispatch(getSingleProductSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(getSingleProductFailure());
    });
};
