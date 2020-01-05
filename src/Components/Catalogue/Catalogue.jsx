import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import "./Catalogue.scss";

const Catalogue = () => {
  useFirestoreConnect("categories");

  const categories = useSelector(state => state.firestore);

  return categories.status.requesting.categories ? (
    <h2>Loading</h2>
  ) : categories.errors.byQuery.length > 0 ? (
    <h2>{categories.error}</h2>
  ) : (
    <ol className="catalogue">
      {categories.ordered.categories &&
        categories.ordered.categories.map(category => (
          <li className="catalogue__element" key={category.id}>
            <Link to={`/${category.categoryName.toLowerCase()}/${category.id}`}>
              <span
                className={`catalogue__element_image image-${category.categoryName}`}
              >
                <h1>{category.categoryName.toUpperCase()}</h1>
              </span>
            </Link>
          </li>
        ))}
    </ol>
  );
};

export default Catalogue;
