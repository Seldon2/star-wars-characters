import React from 'react';

import { Wrapper, Content, LogoImg, Navigaton, Item } from './styles';

import Logo from "../../imgs/Star_Wars_Logo.svg";

const Header = () => {
  return(
    <Wrapper>
      <Content>
        <LogoImg src={Logo} alt="star-wars logo"/>
        <Navigaton>
          <Item>Home</Item>
          <Item>About</Item>
          <Item>Contact</Item>
        </Navigaton>
        <Item title="my Github page" href="https://github.com/Seldon2" target="_blank"><i class="fab fa-github"></i></Item>
      </Content>
    </Wrapper>
  );
};

export default Header;