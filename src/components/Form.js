import React, { useContext, useEffect } from "react";
import { TextFieldStyles, ButtonStyles } from "../globalStyles";
import { StateContext } from "./Content";
import axios from "axios";

const Form = () => {
  const [state, setState] = useContext(StateContext);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .get(
        `http://apilayer.net/api/check?access_key=8cbbb9e1c781a92d8faf14c20376d3a4&email=${state.email}`
      )
      .then(res => {
        console.log(res);
        if (res.data) {
          setState({ ...state, formSubmitted: true, tab: "tab2" });
        } else {
          setState({ ...state, emailError: true });
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (state.formSubmitted) {
      console.log(state);
    }
  }, [state]);

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
        error={state.emailError ? true : false}
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
