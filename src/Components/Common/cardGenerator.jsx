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
        <span style={{margin: '0 auto', color: 'white'}}>Image display is still in development</span>
        {/* {withImage ? <img src="" alt="Photo"></img> : null} */}
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      </Link>
    );
  };
}

export default cardGenerator;
