import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #10A9FF;
    --outline: #0190E1;

    font-family: 'IBMPlexSansKR', Inter, system-ui, Avenir, Helvetica, Arial,
      sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
  }
`;