import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
const InfoContainer = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: all 0.5s ease;
  z-index: 3;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 0.3rem;
  height: 22rem;
  min-width: 17.5rem;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${InfoContainer} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  height: 12.5rem;
  width: 12.5rem;
  background-color: white;
  position: absolute;
  border-radius: 50%;
`;
const Image = styled.img`
  flex: 1;
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.6rem;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1, 1);
  }
`;

function Product({ productItem }) {
  return (
    <Container>
      <Circle />
      <Image src={productItem.img} />
      <InfoContainer>
        <Icon>
          <ShoppingCartIcon />
        </Icon>
        <Icon>
          <SearchIcon />
        </Icon>
        <Icon>
          <FavoriteIcon />
        </Icon>
      </InfoContainer>
    </Container>
  );
}

export default Product;
