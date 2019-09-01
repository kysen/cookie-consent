import React from "react";

import TopBottom from "./example-banners/example-top-bottom";

const ExamplePageContent = props => {
  const bannerTop = {
    backgroundColor: props.bannerBackground,
    color: props.bannerTextColor,
    top: 0
  };
  const bannerBottom = {
    backgroundColor: props.bannerBackground,
    color: props.bannerTextColor,
    bottom: 0
  };
  const styles = {
    acceptButton: {
      backgroundColor: props.acceptButtonColor,
      color: props.acceptTextColor,
      borderColor: props.acceptBorderColor
    },
    declineButton: {
      backgroundColor: props.declineButtonColor,
      color: props.declineTextColor,
      borderColor: props.declineBorderColor
    },
    infoButton: {
      backgroundColor: props.infoButtonColor,
      color: props.infoTextColor,
      borderColor: props.infoBorderColor
    }
  };
  // acceptTextColor={props.acceptTextColor}
  // acceptButtonColor={props.acceptButtonColor}
  // acceptBorderColor={props.acceptBorderColor}
  // declineTextColor={props.declineTextColor}
  // declineButtonColor={props.declineButtonColor}
  // declineBorderColor={props.declineBorderColor}
  // infoTextColor={props.infoTextColor}
  // infoButtonColor={props.infoButtonColor}
  // infoBorderColor={props.infoBorderColor}

  return (
    <div className="example-page-content-container">
      {props.layoutChosen === "top" ? (
        <TopBottom
          bannerBackground={props.bannerBackground}
          bannerTextColor={props.bannerTextColor}
          shadowVerticle={props.shadowVerticle}
          shadowHorizontal={props.shadowHorizontal}
          shadowBlurChosen={props.shadowBlurChosen}
          shadowSizeChosen={props.shadowSizeChosen}
          styleTopOrBottom={bannerTop}
          styles={styles}
        />
      ) : (
        ""
      )}
      <div className="fake-content-wrapper">
        <div className="fake-title"></div>
        <div className="fake-content">
          <div className="big-box"></div>
          <div className="little-boxes">
            <div className="little-box"></div>
            <div className="little-box"></div>
          </div>
        </div>
      </div>
      {props.layoutChosen === "bottom" ? (
        <TopBottom
          bannerBackground={props.bannerBackground}
          bannerTextColor={props.bannerTextColor}
          shadowVerticle={props.shadowVerticle}
          shadowHorizontal={props.shadowHorizontal}
          shadowBlurChosen={props.shadowBlurChosen}
          shadowSizeChosen={props.shadowSizeChosen}
          styleTopOrBottom={bannerBottom}
          styles={styles}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ExamplePageContent;
