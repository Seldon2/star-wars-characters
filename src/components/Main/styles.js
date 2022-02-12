import styled from 'styled-components';

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: var(--black);
  padding: 0 20px;
  margin-top: -30px;

  @media screen and (max-width: 768px){
    height: 85px;
    margin-top: -40px;
  }

`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: var(--yellow);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--black);

  @media screen and (max-width: 768px){
    height: 40px;
  }

  input {
    font-size: var(--fontBig);
    position: absolute;
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--black);

    @media screen and (max-width: 768px){
      font-size: var(--fontSmall);
      height: 25px;
    }

    :focus{
      outline: none;
    }
  }
`;