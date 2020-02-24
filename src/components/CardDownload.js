import React, { useContext, useEffect, useRef } from "react";
import { TextFieldStyles, ButtonStyles } from "../globalStyles";
import { StateContext } from "./Content";

const CardDownload = () => {
  const [state, setState] = useContext(StateContext);

  const cardImage = useRef("");

  useEffect(() => {
    if (state.cardData) {
      cardImage.current.src = state.cardData;
    }
  }, [state]);

  return (
    <>
      <img alt="my card" ref={cardImage} />
      <ButtonStyles>Download</ButtonStyles>
    </>
  );
};

export default CardDownload;
