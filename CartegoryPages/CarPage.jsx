import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCarsList } from "../Redux/CategoryPages/action";
import { VehicleInformation } from "../Components/VehicleInformation";
import { LoadingIndicator } from "../Components/LoadingIndicator";
import { LoadMoreButton } from "../Components/LoadMoreButton";
import FiltCar from "../Components/FiltCar";

export const CarPage = () => {
  const [data, setData] = React.useState(10);
  const { products, isLoading } = useSelector(
    (state) => state.products,
    shallowEqual
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCarsList());
  }, [dispatch]);

  const loadMoreItems = () => {
    setData((previous) => previous + 10);
  };

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "90%",
          margin: "auto",
          marginTop: "3%",
        }}
      >
        <div style={{ flexBasis: "35%" }}>
          <FiltCar />
        </div>
        <div
          style={{
            border: "3px solid white",
            display: "flex",
            flexBasis: "63",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {products.slice(0, data).map((item) => {
            return <VehicleInformation key={item.id} {...item} />;
          })}
        </div>
      </div>
      <LoadMoreButton loadMoreItems={loadMoreItems} />
    </>
  );
};
