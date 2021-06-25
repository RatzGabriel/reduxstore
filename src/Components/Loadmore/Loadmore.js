import React from 'react';
import Button from '../Elements/Button/Button';

function Loadmore({ onLoadMoreEvent = () => {} }) {
  return (
    <div>
      <Button onCLick={() => onLoadMoreEvent()}>Load More</Button>
    </div>
  );
}

export default Loadmore;
