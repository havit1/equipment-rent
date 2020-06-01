import React from 'react';

import './loader.scss';

const Loader = () => {
  return (
    <span className='loader-wrapper'>
      <div className='lds-spinner'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </span>
  );
};

export default Loader;
