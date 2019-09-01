import React from "react";

import ExampleNavbar from "./example-page-components/example-navbar";
import ExamplePageContent from "./example-page-components/example-page-content";

const ExamplePage = props => {
  return (
    <div className="example-page-container">
      <ExampleNavbar />
      <ExamplePageContent
        //layout hooks
        layoutChosen={props.layoutChosen}
        //banner-colors hooks
        bannerBackground={props.bannerBackground}
        bannerTextColor={props.bannerTextColor}
        shadowVerticle={props.shadowVerticle}
        shadowHorizontal={props.shadowHorizontal}
        shadowBlurChosen={props.shadowBlurChosen}
        shadowSizeChosen={props.shadowSizeChosen}
        //button-style hooks
        includeAccept={props.includeAccept}
        includeDecline={props.includeDecline}
        includeInfo={props.includeInfo}
        acceptTextColor={props.acceptTextColor}
        acceptButtonColor={props.acceptButtonColor}
        acceptBorderColor={props.acceptBorderColor}
        declineTextColor={props.declineTextColor}
        declineButtonColor={props.declineButtonColor}
        declineBorderColor={props.declineBorderColor}
        infoTextColor={props.infoTextColor}
        infoButtonColor={props.infoButtonColor}
        infoBorderColor={props.infoBorderColor}
        //content hooks
        content={props.content}
        acceptContent={props.acceptContent}
        declineContent={props.declineContent}
        infoContent={props.infoContent}
      />
    </div>
  );
};

export default ExamplePage;
