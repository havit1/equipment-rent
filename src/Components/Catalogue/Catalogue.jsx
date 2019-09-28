import React from "react";
import { Link } from "react-router-dom";

const Catalogue = ({ catalogue }) => {
  return (
    <ol>
      {catalogue.map(product => (
        <li key={product.name}>
          <Link to={`/products/${product.name}`}>{product.name}</Link>
        </li>
      ))}
    </ol>
  );
};

export default Catalogue;
