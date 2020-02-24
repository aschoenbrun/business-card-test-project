import React, { useContext } from "react";
import { Tabs, Tab } from "@material-ui/core";
import { StateContext } from "./Content";

const TabBar = () => {
  const [state, setState] = useContext(StateContext);

  const a11yProps = index => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  };

  return (
    <>
      <Tabs aria-label="business card creator">
        <Tab label="Your Information" {...a11yProps(0)} />
        <Tab label="Your Information" {...a11yProps(1)} />
        <Tab label="Your Information" {...a11yProps(2)} />
      </Tabs>
    </>
  );
};

export default TabBar;
