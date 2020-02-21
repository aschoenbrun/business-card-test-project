import { createGlobalStyle } from "styled-components/macro";
import deepPurple from "@material-ui/core/colors/purple";
import { createMuiTheme } from "@material-ui/core/styles";

export const GlobalStyles = createGlobalStyle`
  body, p, h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
  }
`;

export const theme = createMuiTheme({
  palette: {
    primary: { main: deepPurple[500] }
  }
});

export const colors = {
  primary: deepPurple[500],
  headerText: deepPurple[100]
};
