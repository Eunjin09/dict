import React from "react";
import styled from "styled-components";

const Header = () => {
  return <Title>영어 단어장</Title>
}

const Title = styled.h1`
  background-color: #7d8dd0;
  color: #fff;
  padding: 16px;
  text-align: center;
  /* border-bottom: 1px solid #ddd; */
  margin:0 auto;
  font-size: 28px;
  margin-bottom: 50px;
  /* box-shadow: 10px 10px 10px rgb(190 190 190 / 72%); */
`;

export default Header;