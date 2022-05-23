import React from 'react';
import styled from 'styled-components';
import Announecement from '../components/Announecement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <Container>
      <Announecement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  /* max-width: 200rem; */
`;
