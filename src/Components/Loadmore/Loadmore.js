import React from 'react';

const LoadMore = ({ onLoadMoreEvt = () => {} }) => {
  return (
    <button color={'white'} bg={'brown'} onClick={() => onLoadMoreEvt()}>
      Load More
    </button>
  );
};

export default LoadMore;
