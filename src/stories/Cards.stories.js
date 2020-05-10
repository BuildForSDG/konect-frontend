import React from "react";
import Cards from "../buildingBlocks/cards/card";
import Image from "../buildingBlocks/cards/cardImage.svg";

export default {
  title: "Cards",
  component: Cards,
};

export const Card = () => (
  <Cards
    image={Image}
    name="Item Name"
    price="Item Price"
    location="Item Location"
    buttonText="Add to Cart"
    buttonStyle={{
      display: "flex",
      margin: "0.8rem auto",
      height: "43px",
      alignItems: "center",
    }}
  />
);
