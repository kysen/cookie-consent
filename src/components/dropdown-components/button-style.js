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
            include={props.includeAccept}
            setInclude={props.setIncludeAccept}
            title="Accept Button"
            textColor={props.acceptTextColor}
            setTextColor={props.setAcceptTextColor}
            buttonColor={props.acceptButtonColor}
            setButtonColor={props.setAcceptButtonColor}
            borderColor={props.acceptBorderColor}
            setBorderColor={props.setAcceptBorderColor}
          />
          <ButtonColorChanger
            include={props.includeDecline}
            setInclude={props.setIncludeDecline}
            title="Decline Button"
            textColor={props.declineTextColor}
            setTextColor={props.setDeclineTextColor}
            buttonColor={props.declineButtonColor}
            setButtonColor={props.setDeclineButtonColor}
            borderColor={props.declineBorderColor}
            setBorderColor={props.setDeclineBorderColor}
          />
          <ButtonColorChanger
            include={props.includeInfo}
            setInclude={props.setIncludeInfo}
            title="Info Button"
            textColor={props.infoTextColor}
            setTextColor={props.setInfoTextColor}
            buttonColor={props.infoButtonColor}
            setButtonColor={props.setInfoButtonColor}
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
