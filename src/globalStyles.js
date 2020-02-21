import { createGlobalStyle } from "styled-components/macro";
import deepPurple from "@material-ui/core/colors/purple";

export const GlobalStyles = createGlobalStyle`
  body, p, h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
  }
`;

export const colors = {
  primary: deepPurple[500],
  primaryLT: deepPurple[300],
  headerText: deepPurple[100]
};
