import React from 'react';

import { Wrapper, Content, NavigationContainer, ContactContainer, Item, LogoImg} from './styles';

import Logo from "../../imgs/Star_Wars_Logo.svg";

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <LogoImg src={Logo} alt="star-wars logo"/>
        <NavigationContainer>
          <Item>Test</Item>
          <Item>Test</Item>
          <Item>Test</Item>
        </NavigationContainer>
        <ContactContainer>
          <h3>Contact</h3>
          <p>Emilio Oberheller</p>
          <p>Salvatorstraße 41f</p>
          <p>+43 660 1066671</p>
          <p>emilio.oberheller@hotmail.com</p>
        </ContactContainer>
      </Content>
    </Wrapper>
  );
};

export default Footer;