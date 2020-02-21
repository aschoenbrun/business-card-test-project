import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { GlobalStyles } from "./globalStyles";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <GlobalStyles />
        <Header />
        <Content />
      </StylesProvider>
    </div>
  );
}

export default App;
