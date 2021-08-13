
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
import ButtonElement from '../Elements/Button/Button';
import {color} from "../../colors"

const mapState = createStructuredSelector({
  wlItems: selectWlItems,
  total: selectWlTotal,
});

function WishList({dm}) {
  const history = useHistory();
  const { wlItems, total } = useSelector(mapState);
  const errMsg = 'You have no items in your WishList.';
  const dispatch=useDispatch()

  const handleClearWl=()=>{
    dispatch(clearWL())
  }
  return (
    <MainMainDiv dm={dm}>
      <div>
        <Img src="./images/cart.jpeg" alt="" />
        <h1>WishList:</h1>
      </div>
      <div>
        {wlItems.length > 0 ? (
          <MainDiv>
            {wlItems.map((item, pos) => {
              
              return (
                <ItemDiv key={pos}>
                  <Item dm={dm}product={item} text={"wishlist"} />
                </ItemDiv>
              );
            })}
            <BuyDiv>
              <h3>Total: £{(Math.round(total * 100) / 100).toFixed(2)}</h3>
              
              <StyledLink dm={dm}onClick={() => history.goBack()}>
                Continue Shopping
              </StyledLink>
              <StyledLink dm={dm}onClick={() => history.push('/payment')}>
                Checkout
              </StyledLink>
              <ButtonElement onClick={()=>handleClearWl()}>Clear Wishlist</ButtonElement>
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

const Img=styled.img`
width: 100%;
`

const MainMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  background-color:${props=>props.dm?"black":"white"};
  color:${props=>props.dm?"white":"black"};
  @media(max-width:962px){
    width: 100%;
  }
  
  
`;

const BuyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
`;

const ItemDiv = styled.div`
  height: 8vh;
  margin: 1em 0em;
  display: flex;
  background-color: gray;
  width: 100%;
  
`;

const StyledLink = styled(Link)`
  color: ${props=>props.dm?"black":"white"};
  background-color: ${props=>props.dm?"white":color};
  border-radius: 35px;
  font-weight: ${(props) => props.fw || '600'};
  font-size: 18px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  margin: 1em 0em;
  padding: 1em;
  width: 13em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
