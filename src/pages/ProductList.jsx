import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announecement from '../components/Announecement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';

const Container = styled.div``;
const Title = styled.h1``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 1.3rem;
  ${mobile({
    margin: ' 0rem 1.3rem',
    display: 'flex',
    flexDirection: 'column'
  })}
`;
const FilterText = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  margin-right: 1rem;
  ${mobile({
    fontSize: '0.8rem',
    marginRight: '0rem'
  })}
`;
const Select = styled.select`
  margin-right: 1rem;
  padding: 0.6rem;
  ${mobile({
    marginRight: '0rem'
  })}
`;
const Option = styled.option`
  font-size: 1.2rem;
  ${mobile({
    fontSize: '0.5rem'
  })}
`;
const Price = styled.option`
  font-size: 1.2rem;
  ${mobile({
    fontSize: '0.5rem'
  })}
`;

function ProductList(props) {
  return (
    <Container>
      <Navbar />
      <Announecement />
      <Title>DRESSES</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products :</FilterText>
          <Select>
            <Option selected>color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products :</FilterText>
          <Select>
            <Option selected>NEWEST</Option>
            <Price>price (asc)</Price>
            <Price>price (desc)</Price>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList;
