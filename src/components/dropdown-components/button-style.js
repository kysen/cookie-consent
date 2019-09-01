import React from "react";

import ButtonColorChanger from "./button-styles-components/button-color-changer";

const Style = props => {
  const componentClick = () => {
    props.activeComponent === "button"
      ? props.changeActiveComponent("")
      : props.changeActiveComponent("button");
  };
  return (
    <div className="dropdown-wrapper">
      <div
        className={`dropdown-title ${
          props.activeComponent === "button" ? "dropdown-title-active" : ""
        }`}
        onClick={() => componentClick()}
      >
        Button Style
      </div>
      {props.activeComponent === "button" ? (
        <div className="button-styles-content">
          <ButtonColorChanger
            title="Accept Button"
            textInitial="#3f359E"
            textColor={props.acceptTextColor}
            setTextColor={props.setAcceptTextColor}
            buttonInitial="#FFFFFF"
            buttonColor={props.acceptButtonColor}
            setButtonColor={props.setAcceptButtonColor}
            borderInitial="#FFFFFF"
            borderColor={props.acceptBorderColor}
            setBorderColor={props.setAcceptBorderColor}
          />
          <ButtonColorChanger
            title="Decline Button"
            textInitial="#FFFFFF"
            textColor={props.declineTextColor}
            setTextColor={props.setDeclineTextColor}
            buttonInitial="#8F2626"
            buttonColor={props.declineButtonColor}
            setButtonColor={props.setDeclineButtonColor}
            borderInitial="#FFFFFF"
            borderColor={props.declineBorderColor}
            setBorderColor={props.setDeclineBorderColor}
          />
          <ButtonColorChanger
            title="Info Button"
            textInitial="#3f359E"
            textColor={props.infoTextColor}
            setTextColor={props.setInfoTextColor}
            buttonInitial="#FFFFFF"
            buttonColor={props.infoButtonColor}
            setButtonColor={props.setInfoButtonColor}
            borderInitial="#FFFFFF"
            borderColor={props.infoBorderColor}
            setBorderColor={props.setInfoBorderColor}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Style;
