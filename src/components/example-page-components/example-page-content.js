import React from "react";

import TopBottom from "./example-banners/example-top-bottom";

const ExamplePageContent = props => {
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
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ExamplePageContent;
