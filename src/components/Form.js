import React, { useContext, useEffect } from "react";
import { TextFieldStyles, ButtonStyles } from "../globalStyles";
import { StateContext } from "./Content";

const Form = () => {
  const [state, setState] = useContext(StateContext);

  const handleSubmit = e => {
    e.preventDefault();
    setState({ ...state, formSubmitted: true, tab: "tab2" });
  };

  useEffect(() => {
    if (state.formSubmitted) {
      console.log(state);
    }
  });

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
