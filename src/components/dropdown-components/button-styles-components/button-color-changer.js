import React from "react";

import ColorInputWrapper from "./color-input-wrapper";

const ButtonColorChanger = props => {
  return (
    <div className="button-style-wrapper">
      <div className="button-style-title">
        {props.title}{" "}
        <div className="button-include">
          include?{" "}
          <input
            type="checkbox"
            checked={props.include}
            onChange={() => {
              props.setInclude(!props.include);
            }}
          />
        </div>
      </div>
      {props.include ? (
        <div className="button-style-items">
          <div className="button-style-item">
            <div className="sub-title">Text</div>
            <ColorInputWrapper
              initial={props.textInitial}
              color={props.textColor}
              setColor={props.setTextColor}
            />
          </div>
          <div className="button-style-item">
            <div className="sub-title">Color</div>

            <ColorInputWrapper
              title="Color"
              initial={props.buttonInitial}
              color={props.buttonColor}
              setColor={props.setButtonColor}
            />
          </div>
          <div className="button-style-item">
            <div className="sub-title">Border</div>
            <ColorInputWrapper
              title="Border"
              initial={props.borderInitial}
              color={props.borderColor}
              setColor={props.setBorderColor}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ButtonColorChanger;
