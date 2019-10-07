import React from "react";

const AddToShopCartBtn = ({ id, onAddToShoppingCart }) => {
  return (
    <div>
      <button onClick={() => onAddToShoppingCart(id)}>
        Add to shopping cart
      </button>
    </div>
  );
};

export default AddToShopCartBtn;
