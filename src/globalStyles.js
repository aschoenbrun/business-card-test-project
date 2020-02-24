import styled, { createGlobalStyle } from "styled-components/macro";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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

export const TextFieldStyles = styled(TextField)`
  .MuiFormLabel-root,
  .MuiFormLabel-root.Mui-focused,
  fieldset legend span {
    color: ${colors.primary};
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${colors.primary};
  }
`;

export const ButtonStyles = styled(Button)`
  background-color: ${colors.primary};
  color: white;
  &:hover {
    background-color: ${colors.primaryLT};
  }
`;
