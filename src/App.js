import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { GlobalStyles } from "./globalStyles";
import Header from "./components/Header";
import Content from "./components/Content";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./globalStyles";

const initialState = {
  formSubmission: "idle",
  formState: {
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: ""
  },
  tab: "tab1"
};

export const StateContext = React.createContext();

function App() {
  return (
    <div className="App">
      <StateContext.Provider value={initialState}>
        <ThemeProvider theme={theme}>
          <StylesProvider injectFirst>
            <GlobalStyles />
            <Header />
            <Content />
          </StylesProvider>
        </ThemeProvider>
      </StateContext.Provider>
    </div>
  );
}

export default App;
