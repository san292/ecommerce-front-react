import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announecement from '../components/Announecement';
import Footer from '../components/Footer';
import { Add, Height, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 1.2rem;
  ${mobile({
    padding: '0.6rem'
  })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.3rem;
`;
const TopButton = styled.button`
  padding: 0.6rem;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
`;
const TopTextS = styled.div`
  ${mobile({
    display: 'none'
  })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0rem 0.6rem;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: 'column'
  })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: 'column'
  })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 12rem;
`;
const Details = styled.div`
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;

  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  /* ; */
  margin: 1.3rem 0rem;
  ${mobile({
    margin: '0.3rem 1rem ',
    justifyContent: 'center'
  })}
`;
const ProductAmount = styled.div`
  font-size: 1.5rem;
  margin: 0.3rem;
  ${mobile({
    margin: '0.3rem 1rem '
  })}
`;
const Productprice = styled.div`
  font-size: 2rem;
  font-weight: 300;
  ${mobile({
    fontSize: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem'
  })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.1rem solid lightgray;
  border-radius: 0.6rem;
  padding: 1.3rem;
  height: 50vh;
  ${mobile({
    marginTop: '1rem',
    height: '15vh'
  })}
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 2rem 0rem;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '1.3rem'};
`;

const SummaryItemtext = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  padding: 0.6rem;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announecement />
      <Wrapper>
        <Title>YOU BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOOPING</TopButton>
          <TopTextS>
            <TopText>Shooping Bag(2)</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTextS>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>

        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                {/* <Image src="https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> */}
                <Details>
                  <ProductName>
                    <b>Product: </b>JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>Id: </b>152346987
                  </ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>size: </b>42
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <Productprice>$ 140</Productprice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                {/* <Image src="https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> */}
                <Details>
                  <ProductName>
                    <b>Product: </b>JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>Id: </b>152346987
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>size: </b>42
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <Productprice>$ 35</Productprice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemtext>Subtotal</SummaryItemtext>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemtext>Estimated Shipping</SummaryItemtext>
              <SummaryItemPrice>$ 3.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemtext>Shipping Discount</SummaryItemtext>
              <SummaryItemPrice>$ -3.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemtext>Total</SummaryItemtext>
              <SummaryItemPrice>$ 175</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
