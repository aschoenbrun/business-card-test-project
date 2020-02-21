import React, { useState, useContext } from "react";
import { StateContext } from "../App";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components/macro";
import { useTheme } from "@material-ui/core/styles";

const TextFieldStyles = styled(TextField)``;

const Form = () => {
  const theme = useTheme();
  const state = useContext(StateContext);

  const [formState, setFormState] = useState(state.formState);

  console.log(formState);

  return (
    <form autoComplete="off">
      <TextFieldStyles
        label="First Name"
        variant="outlined"
        color={theme.primary.main}
      />
      <TextFieldStyles
        label="Last Name"
        variant="outlined"
        color={theme.primary.main}
      />
      <TextFieldStyles
        label="Company Name"
        variant="outlined"
        color={theme.primary.main}
      />
      <TextFieldStyles
        label="Email Address"
        variant="outlined"
        color={theme.primary.main}
      />
      <TextFieldStyles
        label="Phone Number"
        variant="outlined"
        color={theme.primary.main}
      />
      <Button variant="contained">Submit</Button>
    </form>
  );
};

export default Form;
