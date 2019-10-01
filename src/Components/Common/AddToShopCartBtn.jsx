import React from "react";

const AddToShopCartBtn = ({ id, onAddItemInCart }) => {
  return (
    <div>
      <button onClick={() => onAddItemInCart(id)}>Add to shopping cart</button>
    </div>
  );
};

export default AddToShopCartBtn;
