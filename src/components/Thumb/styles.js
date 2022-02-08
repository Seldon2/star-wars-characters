import styled from 'styled-components';

export const Wrapper = styled.div`
  color: var(--yellow);
  background: var(--black);
  border-radius: 20px;
  padding: 5px;
  text-align: center;

  :hover{
    opacity: 0.9;
  }

  h3 {
    margin: 10px 0 0 0;
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 720px;
  height: 500px;
  transition: all 0.3s;
  object-fit: fit;
  border-radius: 20px;
  animation: animateThumb 0.5s;

  @keyframes animateThumb {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }
`