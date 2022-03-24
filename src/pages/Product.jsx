import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Announecement from '../components/Announecement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
  ${mobile({
    padding: '0.6rem',
    flexDirection: 'column'
  })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  ${mobile({
    height: '40vh'
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0rem 3rem;
  ${mobile({
    padding: '0.6rem'
  })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 1.2rem 0rem;
  font-size: 1.5rem;
  font-weight: 300;
`;
const Price = styled.span`
  font-weight: 200;
  font-size: 3rem;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 1.8rem 3rem;
  display: flex;
  justify-content: space-between;
  ${mobile({
    width: '100%',
    margin: ' 1rem 0rem'
  })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-weight: 200;
  font-size: 1.5rem;
`;
const FilterColor = styled.select`
  width: 2rem;
  height: 2rem;
  padding: 1rem;
  border-radius: 50%;
  margin: 0rem 0.3rem;
  cursor: pointer;
  background-color: ${(props) => props.color};
`;
const FilterSize = styled.select`
  margin-left: 1rem;
  padding: 0.3rem;
  ${mobile({
    marginLeft: '1 rem'
  })}
`;
const FilterSizeOption = styled.option`
  ${mobile({
    margin: '0rem'
  })}
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: space;
  justify-content: space-between;
  ${mobile({
    width: '100%'
  })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 2rem;
  height: 2rem;
  border-radius: 0.6rem;
  border: 1px solid #d9ab9a;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0rem 0.3rem;
`;
const Button = styled.button`
  padding: 1rem;
  border: 3px solid #d9ab9a;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #d9ab9a;
    color: white;
  }
`;

function Product(props) {
  return (
    <Container>
      <Navbar />
      <Announecement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://images.pexels.com/photos/2129970/pexels-photo-2129970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jump Suit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nulla
            at incidunt. Non, nam, illum eos ad est, numquam odio dolore
            dignissimos fugiat blanditiis adipisci eum qui. Ab optio velit
            expedita, voluptatibus adipisci quas fuga totam. Iste perferendis
            dicta atque. Mollitia quasi praesentium quas nam quis consectetur
          </Desc>
          <Price>20£</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="red" />
              <FilterColor color="blue" />
            </Filter>
            <Filter>
              <FilterTitle>SIZE</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Product;
