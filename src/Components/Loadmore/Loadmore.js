import React from 'react';
import Button from '../Elements/Button/Button';

const LoadMore = ({ onLoadMoreEvt = () => {} }) => {
  return (
    <Button color={'white'} bg={'brown'} onClick={() => onLoadMoreEvt()}>
      Load More
    </Button>
  );
};

export default LoadMore;
