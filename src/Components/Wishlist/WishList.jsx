
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Item from '../../Components/Checkout/Item/Item';
import {
  selectWlItems,
  selectWlTotal,
} from '../../Redux/WishList/wishlist.selectors';
import {clearWL} from "../../Redux/WishList/wishlist.action";
import { useDispatch } from 'react-redux';

const mapState = createStructuredSelector({
  wlItems: selectWlItems,
  total: selectWlTotal,
});

function WishList() {
  const history = useHistory();
  const { wlItems, total } = useSelector(mapState);
  const errMsg = 'You have no items in your WishList.';
  const dispatch=useDispatch()

  const handleClearWl=()=>{
    dispatch(clearWL())
  }
  return (
    <MainMainDiv>
      <div>
        <img src="./images/cart.jpeg" alt="" />
        <h1>WishList:</h1>
      </div>
      <div>
        {wlItems.length > 0 ? (
          <MainDiv>
            {wlItems.map((item, pos) => {
              
              return (
                <ItemDiv key={pos}>
                  
                  <Item {...item} />
                </ItemDiv>
              );
            })}
            <BuyDiv>
              <h3>Total: £{total}</h3>
              <StyledLink onClick={() => history.goBack()}>
                Continue Shopping
              </StyledLink>
              <StyledLink onClick={() => history.push('/payment')}>
                Checkout
              </StyledLink>
              <button onClick={()=>handleClearWl()}>Clear Wishlist</button>
            </BuyDiv>
          </MainDiv>
        ) : (
          <p>{errMsg}</p>
        )}
      </div>
    </MainMainDiv>
  );
}

export default WishList;

const MainMainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const BuyDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemDiv = styled.div`
  height: 8vh;
  margin: 1em 0em;
  display: flex;
  background-color: gray;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.bg || 'brown'};
  border-radius: 35px;
  font-weight: ${(props) => props.fw || '600'};
  font-size: 18px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  margin: 1em 0em;
  padding: 1em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
