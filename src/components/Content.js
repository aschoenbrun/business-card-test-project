import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Banner from "./Banner";
import Form from "./Form";

export const StateContext = React.createContext();

const Content = () => {
  const state = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    isSubmitting: false,
    tab: "tab1"
  });

  return (
    <StateContext.Provider value={state}>
      <Container>
        <Banner />
        {/*<TabBar tab={tab}/>*/}
        <Form />
      </Container>
    </StateContext.Provider>
  );
};

export default Content;
