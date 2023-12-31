import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: transparent;
    font-family: Arial, Helvetica, sans-serif;
  }

  html {
    margin: 0;
    padding: 0;
  }

body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
  }     



  *:focus {
    outline: none;
  }

  p {
    font-size: 14px;
    line-height: 16px;
  }

  a {
    text-decoration: underline;
    font-size: 14px;
    line-height: 22px;
  }
`;
