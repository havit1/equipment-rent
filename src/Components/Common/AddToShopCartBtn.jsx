import React from "react";

const AddToShopCartBtn = ({ id, onAddToShoppingCart }) => {
  return (
    <button className="add-button" onClick={() => onAddToShoppingCart(id)}>
      Add to shopping cart
    </button>
  );
};

export default AddToShopCartBtn;
