import React from 'react';

import { Wrapper, Content, HeaderContainer} from './styles'; 

const Grid = ({ header, info, children}) => {
  return (
    <Wrapper>
      <HeaderContainer>
        <h1>{header}</h1>
        <p>{info}</p>
      </HeaderContainer>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Grid;