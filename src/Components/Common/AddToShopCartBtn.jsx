import React from 'react';

const AddToShopCartBtn = ({ id, onAddToShoppingCart, className, text }) => {
  return (
    <button className={className} onClick={() => onAddToShoppingCart(id)}>
      {text}
    </button>
  );
};

export default AddToShopCartBtn;
