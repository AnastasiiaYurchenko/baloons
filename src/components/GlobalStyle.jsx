import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'InterMedium';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/Inter-Medium.ttf') format('truetype');
}

    @font-face {
  font-family: 'AnzeigenGroT';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/AnzeigenGroT.ttf') format('truetype');
}

   @font-face {
  font-family: 'AnzeigenGro-T';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/AnzeigenGroteskTRegular.otf') format('opentype');
}

    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
li {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`