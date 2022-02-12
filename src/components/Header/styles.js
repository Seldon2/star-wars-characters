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

`;

export const Navigaton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  margin-left: 40vw;

  @media screen and (min-width: 1920px){
    margin-left: 30vw;
  }

  @media screen and (max-width: 1280px){
    margin-left: 40vw;
  }

  @media screen and (max-width: 768px){
    margin-left: 10vw;
    justify-content: space-between;
  }

`;


export const Item = styled.a`
  color: var(--white);
  font-size: var(--fontBig);
  letter-spacing: 1px;
  padding: 10px;

  @media (max-width: 768px) {
      font-size: var(--fontMed);
      padding: 0px;
  }

  @media screen and (max-width: 500px){
    font-size: var(--fontTiny);
    padding: 0px
  }

  @media screen and (max-width: 1280px){
    padding: 0px;
  }

  :hover {
    color: var(--yellow);
    transition: all 0.3s ease-in-out;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const LogoImg = styled.img`
  width: 200px;
  height: 100px;

  @media screen and (max-width: 768px){
    width: 150px;
  }

  @media screen and (max-width: 500px){
    width: 80px;
  }
`;
