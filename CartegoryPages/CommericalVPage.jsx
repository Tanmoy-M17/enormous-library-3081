import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCarsList } from "../Redux/CategoryPages/action";
import { VehicleInformation } from "../Components/VehicleInformation";
import { LoadingIndicator } from "../Components/LoadingIndicator";
import { LoadMoreButton } from "../Components/LoadMoreButton";
import FiltCar from "../Components/FiltCar";

export const CommericalVPage = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector(
    (state) => state.products,
    shallowEqual
  );
  const [visible, setVisible] = React.useState(10);

  React.useEffect(() => {
    dispatch(getCarsList());
  }, [dispatch]);

  const loadMoreItems = () => {
    setVisible((previous) => previous + 10);
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
            border: "2px solid white",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {products.slice(0, visible).map((item) => {
            return <VehicleInformation key={item.id} {...item} />;
          })}
        </div>
      </div>
      <LoadMoreButton loadMoreItems={loadMoreItems} />
    </>
  );
};
