import React, { useContext, useEffect, useRef } from "react";
import { StateContext } from "./Content";

const CardDownload = () => {
  const [state, setState] = useContext(StateContext);

  const cardImage = useRef("");

  useEffect(() => {
    cardImage.current.src = state.cardData;
  }, [state.cardData]);

  return (
    <>
      <img alt="my card" ref={cardImage} />
    </>
  );
};

export default CardDownload;
