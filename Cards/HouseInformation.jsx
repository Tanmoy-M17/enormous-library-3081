import React from "react";

import { CardLinkStyle, CardStyle } from "../Cssstyles";

export const HouseInformation = ({
  image,
  price,
  address,
  postDate,
  bedrooms,
  bathrooms,
  carParking,
  category,
  id,
}) => {
  return (
    // <Wrapper>
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
            {" "}
            {bedrooms} Bds - {bathrooms} Ba{" "}
          </p>
          <p>
            {" "}
            {bedrooms}BHK {carParking} Car Parking{" "}
          </p>
        </div>
        <div>
          <p>{address}</p>
          <p> {postDate}</p>
        </div>
      </CardLinkStyle>
    </CardStyle>
  );
};
