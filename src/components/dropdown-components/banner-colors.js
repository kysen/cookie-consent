import React from "react";

import BackgroundTextColor from "./banner-color-components/background-text-color";
import Shadow from "./banner-color-components/shadow";

const BannerColors = props => {
  const componentClick = () => {
    props.activeComponent === "colors"
      ? props.changeActiveComponent("")
      : props.changeActiveComponent("colors");
  };

  return (
    <div className="dropdown-wrapper">
      <div
        className={`dropdown-title ${
          props.activeComponent === "colors" ? "dropdown-title-active" : ""
        }`}
        onClick={() => componentClick()}
      >
        Banner Colors
      </div>
      {props.activeComponent === "colors" ? (
        <div className="banner-colors-content">
          <BackgroundTextColor
            title="Background"
            color={props.bannerBackground}
            setColor={props.setBannerBackground}
            initial="#3F359E"
          />
          <BackgroundTextColor
            title="Text"
            color={props.bannerTextColor}
            setColor={props.setBannerTextColor}
            initial="#FFFFFF"
          />
          <Shadow
            shadowVerticle={props.shadowVerticle}
            setShadowVerticle={props.setShadowVerticle}
            shadowHorizontal={props.shadowHorizontal}
            setShadowHorizontal={props.setShadowHorizontal}
            shadowBlurChosen={props.shadowBlurChosen}
            setShadowBlur={props.setShadowBlur}
            shadowSizeChosen={props.shadowSizeChosen}
            setShadowSize={props.setShadowSize}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BannerColors;
