import React from 'react';

import { Wrapper, Content, HeaderContainer} from './styles'; 

const Grid = ({ header, children}) => {
  return (
    <Wrapper>
      <HeaderContainer>
        <span><b>{header}</b> (Click card for more info)</span>
      </HeaderContainer>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Grid;