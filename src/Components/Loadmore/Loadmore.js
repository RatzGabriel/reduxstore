import React from 'react';
import Button from '../Elements/Button/Button';

const LoadMore = ({ onLoadMoreEvt = () => {} }) => {
  return (
    <button color={'white'} bg={'brown'} onClick={() => onLoadMoreEvt()}>
      Load More
    </button>
  );
};

export default LoadMore;
