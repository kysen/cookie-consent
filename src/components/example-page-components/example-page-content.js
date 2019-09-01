import React from "react";

import TopBottom from "./example-banners/example-top-bottom";

const ExamplePageContent = props => {
  const [blurRadius, setBlurRadius] = React.useState("20px");
  const [shadowSpread, setShadowSpread] = React.useState("20px");

  React.useEffect(() => {
    if (props.shadowBlurChosen === "low") {
      setBlurRadius("10px");
    } else if (props.shadowBlurChosen === "high") {
      setBlurRadius("30px");
    } else {
      setBlurRadius("20px");
    }
  }, [props.shadowBlurChosen]);

  React.useEffect(() => {
    if (props.shadowSizeChosen === "small") {
      setShadowSpread("-15px");
    } else if (props.shadowSizeChosen === "large") {
      setShadowSpread("15px");
    } else {
      setShadowSpread("0px");
    }
  }, [props.shadowSizeChosen]);

  const bannerTop = {
    backgroundColor: props.bannerBackground,
    color: props.bannerTextColor,
    top: 0,
    boxShadow: `${props.shadowHorizontal}px ${props.shadowVerticle}px ${blurRadius} ${shadowSpread} black`
  };
  const bannerBottom = {
    backgroundColor: props.bannerBackground,
    color: props.bannerTextColor,
    bottom: 0,
    boxShadow: `${props.shadowHorizontal}px ${props.shadowVerticle}px ${blurRadius} black`
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

  console.log(props.shadowHorizontal);

  return (
    <div className="example-page-content-container">
      {props.layoutChosen === "top" ? (
        <TopBottom
          styleTopOrBottom={bannerTop}
          styles={styles}
          //banner-colors hooks
          bannerBackground={props.bannerBackground}
          bannerTextColor={props.bannerTextColor}
          shadowVerticle={props.shadowVerticle}
          shadowHorizontal={props.shadowHorizontal}
          // button-style hooks
          includeAccept={props.includeAccept}
          includeDecline={props.includeDecline}
          includeInfo={props.includeInfo}
          //content hooks
          content={props.content}
          acceptContent={props.acceptContent}
          declineContent={props.declineContent}
          infoContent={props.infoContent}
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
          styleTopOrBottom={bannerBottom}
          styles={styles}
          //banner-colors hooks
          bannerBackground={props.bannerBackground}
          bannerTextColor={props.bannerTextColor}
          shadowVerticle={props.shadowVerticle}
          shadowHorizontal={props.shadowHorizontal}
          // button-style hooks
          includeAccept={props.includeAccept}
          includeDecline={props.includeDecline}
          includeInfo={props.includeInfo}
          //content hooks
          content={props.content}
          acceptContent={props.acceptContent}
          declineContent={props.declineContent}
          infoContent={props.infoContent}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ExamplePageContent;
