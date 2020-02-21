import React from "react";
import Container from "@material-ui/core/Container";
import styled from "styled-components/macro";
import { colors } from "../globalStyles";

const HeaderStyles = styled(Container)`
  background-color: ${colors.primary};
  max-width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  margin-bottom: 50px;
  h1 {
    font-weight: 300;
    color: ${colors.headerText};
  }
`;

const HeaderMargin = styled(Container)`
  margin-top: 0;
  margin-bottom: 0;
  height: 100px;
  display: flex;
  justify-content: left;
  align-items: flex-end;
`;

const Header = () => {
  return (
    <HeaderStyles>
      <HeaderMargin>
        <h1>Business Card Generator</h1>
      </HeaderMargin>
    </HeaderStyles>
  );
};

export default Header;
