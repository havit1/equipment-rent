import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useFirestoreConnect } from 'react-redux-firebase';

import Loader from '../Common/loader/loader';

import './Catalogue.scss';

const Catalogue = () => {
  useFirestoreConnect('categories');

  const categories = useSelector((state) => state.firestore);

  return (
    <section className='catalogue-wrapper'>
      {categories.status.requesting.categories ? (
        <Loader />
      ) : categories.errors.byQuery.length > 0 ? (
        <h2 className='error'>{categories.error}</h2>
      ) : (
        <div className='catalogue'>
          <ol className='catalogue__elements'>
            {categories.ordered.categories &&
              categories.ordered.categories.map((category) => (
                <li className='catalogue__elements-element' key={category.id}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <Link to={`/${category.categoryName.toLowerCase()}/${category.id}`}>
                    <div className={`catalogue__elements-element-image ${category.categoryName}`}>
                      <h1 className={'catalogue__elements-element-text'}>{category.categoryName.toUpperCase()}</h1>
                    </div>
                  </Link>
                </li>
              ))}
          </ol>
        </div>
      )}
    </section>
  );
};

export default Catalogue;
