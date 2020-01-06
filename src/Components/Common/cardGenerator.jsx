import React, { Component } from "react";
import { Link } from "react-router-dom";

class cardGenerator extends Component {
  renderCard = (
    product,
    categoryId,
    categoryName,
    withImage = false,
    withDescription = false,
    className
  ) => {
    return (
      <Link
        to={`/${categoryId}/${categoryName}/${product.id}`}
        className={`${className}`}
      >
        {withImage ? <div></div> : null}
        <h2>{product.name}</h2>
        {withDescription ? <p>{product.description}</p> : null}
      </Link>
    );
  };
}

export default cardGenerator;
