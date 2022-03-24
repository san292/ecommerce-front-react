import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
// import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 1.2rem;
  background-color: whitesmoke;
  ${mobile({
    width: ' 80%'
  })}
`;
const Title = styled.h1`
  display: flex;

  justify-content: center;
  font-size: 1.5rem;
  font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  padding: 1rem;
  cursor: pointer;
  border: none;
  width: 30%;
  background-color: white;
  &:hover {
    background-color: #d9ab9a;
    color: white;
  }
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1.2rem 0;
  padding: 0.6rem;
`;
const Link = styled.a`
  margin: 0.6rem;
  font-size: 1rem;
  text-decoration: underline;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN </Title>
        <Form>
          <Input placeholder=" username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT REMUMBER THE PASSWORD</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
