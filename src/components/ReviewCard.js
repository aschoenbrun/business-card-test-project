import React, { useRef, useEffect, useContext } from "react";
import { saveAs } from "file-saver";
import { StateContext } from "./Content";
import styled from "styled-components/macro";
import { colors } from "../globalStyles";
import { ButtonStyles } from "../globalStyles";

const ReviewCardStyle = styled.canvas`
  border: 1px solid ${colors.primary};
  border-radius: 20px;
`;

const ReviewCard = () => {
  const [state, setState] = useContext(StateContext);

  const canvas = useRef(null);

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    ctx.font = "16px 'Roboto'";
    if (state.formSubmitted) {
      ctx.fillText(`${state.firstName} ${state.lastName}`, 20, 30);
      ctx.textAlign = "center";
      ctx.fillText(state.companyName, 175, 100);
      ctx.textAlign = "left";
      ctx.fillText(state.email, 20, 180);
      ctx.textAlign = "right";
      ctx.fillText(state.phone, 330, 180);
    }
  }, [state.formSubmitted]);

  const handleClick = () => {
    canvas.current.toBlob(function(blob) {}, "image/jpeg", 1.0);
    setState({
      ...state,
      cardSubmitted: true,
      tab: "tab3",
      cardData: canvas.current.toDataURL("image/jpeg", 1.0)
    });
    console.log(state);
  };

  // TODO: Maybe - left out changing content for now

  return (
    <>
      <ReviewCardStyle width={350} height={200} ref={canvas}></ReviewCardStyle>
      <ButtonStyles onClick={handleClick}>Looks Good</ButtonStyles>
    </>
  );
};

export default ReviewCard;
