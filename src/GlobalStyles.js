import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap');

  :root {
    --maxWidth: 1280px;
    --black: #000;
    --yellow: rgb(255, 232, 31);
    --white: #fff;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    --fontTiny: 0.8rem;
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
  }

  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(to bottom, #e0e0e0, #919191);

    p {
      font-size: var(--fontMed);
      color: var(--white);
    }

    h1 {
      font-size: var(--fontSuperBig);
      color: var(--white);
    }

    h3 {
      font-size: var(--fontBig);
      color: var(--white);
    }

    a {
      color: var(--white);
      text-decoration: none;
    }
  }
`;