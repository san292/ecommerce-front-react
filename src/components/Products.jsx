import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';
const Container = styled.div`
  padding: 1.3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((productItem) => (
        <Product key={productItem.id} productItem={productItem} />
      ))}
    </Container>
  );
};

export default Products;
