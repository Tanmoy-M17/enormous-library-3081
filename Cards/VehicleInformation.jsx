import React from "react";
import { useDispatch } from "react-redux";
import { CardLinkStyle, CardStyle } from "../Cssstyles";

export const VehicleInformation = ({
  image,
  price,
  year,
  distance,
  address,
  postDate,
  brand,
  model,
  category,
  id,
}) => {
  const dispatch = useDispatch();

  return (
    <CardStyle>
      <CardLinkStyle to={`/item/${category}/${id}`}>
        <div>
          <div></div>
          <img src={image} alt={image} />
          <div></div>
        </div>
        <div>
          <p> ₹ {price}</p>
          <p>
            {year} - {distance} km
          </p>
          <p>
            {brand} {model} {year}
          </p>
        </div>
        <div>
          <p>{address}</p>
          <p>{postDate}</p>
        </div>
      </CardLinkStyle>
    </CardStyle>
  );
};
