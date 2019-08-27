import React from "react";

import ColorInputWrapper from "./color-input-wrapper";

const ButtonColorChanger = props => {
  return (
    <div className="button-style-wrapper">
      <div className="button-style-title">{props.title}</div>

      <ColorInputWrapper
        title="Text"
        initial={props.textInitial}
        color={props.textColor}
        setColor={props.setTextColor}
      />
      <ColorInputWrapper
        title="Color"
        initial={props.buttonInitial}
        color={props.buttonColor}
        setColor={props.setButtonColor}
      />
      <ColorInputWrapper
        title="Border"
        initial={props.borderInitial}
        color={props.borderColor}
        setColor={props.setBorderColor}
      />
      {/* <ColorInputWrapper title="Color" /> */}
      {/* <ColorInputWrapper title="Border" /> */}
    </div>
  );
};

export default ButtonColorChanger;
