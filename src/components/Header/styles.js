import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--black);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 10px 0;
  margin: 0 auto;
  color: var(--white);
`;

export const Navigaton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
`;

export const Item = styled.a`
  color: var(--yellow);
  font-size: var(--fontBig);
  letter-spacing: 2px;
`;

export const LogoImg = styled.img`
  width: 200px;
  height: 100px;

  @media screen and (max-width: 500px){
    width: 150px;
  }
`;
