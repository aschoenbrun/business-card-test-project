import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Banner from "./Banner";
import Form from "./Form";
import ReviewCard from "./ReviewCard";
import CardDownload from "./CardDownload";

export const StateContext = React.createContext();

const Content = () => {
  const state = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    formSubmitted: false,
    cardSubmitted: false,
    cardData: "",
    tab: "tab1"
  });

  return (
    <StateContext.Provider value={state}>
      <Container>
        <Banner />
        {/*<TabBar tab={tab}/>*/}
        <Form />
        <ReviewCard />
        <CardDownload />
      </Container>
    </StateContext.Provider>
  );
};

export default Content;
