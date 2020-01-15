import React, { Component } from "react";
import { Link } from "react-router-dom";

class cardGenerator extends Component {
  renderCard = (
    product,
    categoryId,
    categoryName,
    withImage = false,
    className
  ) => {
    return (
      <Link
        to={`/${categoryId}/${categoryName}/${product.id}`}
        className={`${className}`}
      >
        {withImage ? <img src="" alt="Something cool"></img> : null}
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      </Link>
    );
  };
}

export default cardGenerator;
