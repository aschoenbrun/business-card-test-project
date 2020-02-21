import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Banner from "./Banner";
import Form from "./Form";

const Content = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    isSubmitting: false
  });
  const [tab, setTab] = useState("tab1");
  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <Container>
      <Banner />
      {/*<TabBar tab={tab}/>*/}
      <Form state={formState} setState={setFormState} />
    </Container>
  );
};

export default Content;
