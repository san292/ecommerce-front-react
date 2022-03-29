import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';
import axios from 'axios';
const Container = styled.div`
  padding: 1.3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const fetchProduts = async () => {
      try {
        const response = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : 'http://localhost:5000/api/products'
        );
        const res = response.data;
        console.log('res', res);
        setProducts(res);
        setFilterProducts(res.categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduts();
  }, [cat]);
  useEffect(() => {
    cat &&
      setFilterProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  return (
    <Container>
      {filterProducts.map((productItem) => (
        <Product key={productItem._id} productItem={productItem} />
      ))}
    </Container>
  );
};

export default Products;
