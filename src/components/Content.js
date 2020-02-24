import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Banner from "./Banner";
import Form from "./Form";
import ReviewCard from "./ReviewCard";
import CardDownload from "./CardDownload";
// import TabBar from "./TabBar";

export const StateContext = React.createContext();

const Content = () => {
  const state = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    emailError: false,
    phone: "",
    phoneError: false,
    formSubmitted: false,
    cardSubmitted: false,
    cardData: "",
    tab: "tab1"
  });

  const switchContent = () => {
    switch (state.tab) {
      case "tab1":
        return <Form />;
      case "tab2":
        return <ReviewCard />;
      case "tab3":
        return <CardDownload />;
      default:
        return <Form />;
    }
  };

  return (
    <StateContext.Provider value={state}>
      <Container>
        <Banner />
        {/* <TabBar /> */}
        {switchContent()}
      </Container>
    </StateContext.Provider>
  );
};

export default Content;
