import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;

  span {
    color: var(--black)!important;
    font-size: var(--fontMed)!important;
    @media (max-width: 768px) {
      font-size: var(--fontSmall);
    }

    b{
      margin-right: 10px;
      color: var(--black)!important;
      font-size: var(--fontSuperBig);
  
      @media (max-width: 768px) {
        font-size: var(--fontBig);
      }
    }
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
`;