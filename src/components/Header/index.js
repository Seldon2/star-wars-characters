import React from 'react';

import { Wrapper, Content, LogoImg, Navigaton, Item } from './styles';

import Logo from "../../imgs/Star_Wars_Logo.svg";

const Header = () => {
  return(
    <Wrapper>
      <Content>
        <LogoImg src={Logo} alt="star-wars logo"/>
        <Navigaton>
          <Item>Test</Item>
          <Item>Test</Item>
          <Item>Test</Item>
        </Navigaton>
      </Content>
    </Wrapper>
  );
};

export default Header;