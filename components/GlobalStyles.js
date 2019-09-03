import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
  }
`;
