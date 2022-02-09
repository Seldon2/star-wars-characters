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
  margin-left: 780px;
  width: 50%;
`;


export const Item = styled.a`
  color: var(--white);
  font-size: var(--fontBig);
  letter-spacing: 1px;

  @media (max-width: 768px) {
      font-size: var(--fontMed);
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
`;
