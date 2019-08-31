import React, { useState } from "react";

import ButtonColorChanger from "./button-styles-components/button-color-changer";

const Style = props => {
  const [acceptTextColor, setAcceptTextColor] = useState({});
  const [acceptButtonColor, setAcceptButtonColor] = useState({});
  const [acceptBorderColor, setAcceptBorderColor] = useState({});

  const [declineTextColor, setDeclineTextColor] = useState({});
  const [declineButtonColor, setDeclineButtonColor] = useState({});
  const [declineBorderColor, setDeclineBorderColor] = useState({});

  const [infoTextColor, setInfoTextColor] = useState({});
  const [infoButtonColor, setInfoButtonColor] = useState({});
  const [infoBorderColor, setInfoBorderColor] = useState({});

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
            textColor={acceptTextColor}
            setTextColor={setAcceptTextColor}
            buttonInitial="#FFFFFF"
            buttonColor={acceptButtonColor}
            setButtonColor={setAcceptButtonColor}
            borderInitial="#FFFFFF"
            borderColor={acceptBorderColor}
            setBorderColor={setAcceptBorderColor}
          />
          <ButtonColorChanger
            title="Decline Button"
            textInitial="#FFFFFF"
            textColor={declineTextColor}
            setTextColor={setDeclineTextColor}
            buttonInitial="#8F2626"
            buttonColor={declineButtonColor}
            setButtonColor={setDeclineButtonColor}
            borderInitial="#FFFFFF"
            borderColor={declineBorderColor}
            setBorderColor={setDeclineBorderColor}
          />
          <ButtonColorChanger
            title="Info Button"
            textInitial="#3f359E"
            textColor={infoTextColor}
            setTextColor={setInfoTextColor}
            buttonInitial="#FFFFFF"
            buttonColor={infoButtonColor}
            setButtonColor={setInfoButtonColor}
            borderInitial="#FFFFFF"
            borderColor={infoBorderColor}
            setBorderColor={setInfoBorderColor}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Style;
