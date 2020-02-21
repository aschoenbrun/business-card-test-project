import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components/macro";
import { colors } from "../globalStyles";

const TextFieldStyles = styled(TextField)`
  .MuiFormLabel-root,
  .MuiFormLabel-root.Mui-focused,
  fieldset legend span {
    color: ${colors.primary};
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${colors.primary};
  }
`;

const ButtonStyles = styled(Button)`
  background-color: ${colors.primary};
  color: white;
  &:hover {
    background-color: ${colors.primaryLT};
  }
`;

const Form = props => {
  const state = props.state;
  const setState = props.setState;

  const handleSubmit = e => {
    e.preventDefault();
    setState({ ...state, isSubmitting: true });
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <TextFieldStyles
        label="First Name"
        variant="outlined"
        onChange={e => setState({ ...state, firstName: e.target.value })}
      />
      <TextFieldStyles
        label="Last Name"
        variant="outlined"
        onChange={e => setState({ ...state, lastName: e.target.value })}
      />
      <TextFieldStyles
        label="Company Name"
        variant="outlined"
        onChange={e => setState({ ...state, companyName: e.target.value })}
      />
      <TextFieldStyles
        label="Email Address"
        variant="outlined"
        onChange={e => setState({ ...state, email: e.target.value })}
      />
      <TextFieldStyles
        label="Phone Number"
        variant="outlined"
        onChange={e => setState({ ...state, phone: e.target.value })}
      />
      <ButtonStyles variant="contained" type="submit">
        Submit
      </ButtonStyles>
    </form>
  );
};

export default Form;
