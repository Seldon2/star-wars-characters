import styled from 'styled-components';

export const Wrapper = styled.footer`
  background: var(--black);
  padding: 0 20px;
  margin-top: 30px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 10px 0;
  margin: 0 auto;
`;

export const Item = styled.a`
  font-size: var(--fontBig);
  letter-spacing: 2px;
  margin: 20px;

  :hover {
    color: var(--yellow);
    transition: all 0.3s ease-in-out;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media screen and (max-width: 768px){
    font-size: var(--fontMed);
  }

  @media screen and (max-width: 500px){
    font-size: var(--fontSmall);
  }
`;

export const LogoImg = styled.img`
  width: 200px;
  height: 100px;

  @media screen and (max-width: 768px){
    width: 150px;
  }

  @media screen and (max-width: 500px){
    width: 100px;
  }
`;


export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
      text-decoration: underline;
      @media screen and (max-width: 768px){
        font-size: var(--fontMed);
      } 

      @media screen and (max-width: 500px){
        font-size: var(--fontSmall);
      }
    }

  p {
    margin: 5px 0;
    @media screen and (max-width: 768px){
    font-size: var(--fontSmall);
    }

    @media screen and (max-width: 500px){
        font-size: var(--fontTiny);
    }
  }
`;