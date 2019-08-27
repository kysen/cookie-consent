import React from "react";

import BackgroundTextColor from "./banner-color-components/background-text-color";
import Shadow from "./banner-color-components/shadow";

const BannerColors = props => {
  const [backgroundColorChosen, handleBackgroundColorChange] = React.useState(
    {}
  );
  const [bannerTextColorChosen, handleBannerTextColorChange] = React.useState(
    {}
  );

  const [shadowVerticlePosition, setShadowVerticlePostition] = React.useState(
    0
  );
  const [
    shadowHorizontalPosition,
    setShadowHorizontalPostition
  ] = React.useState(0);

  const [shadowBlurChosen, handleBlurSelection] = React.useState("medium");
  const [shadowSizeChosen, handleSizeSelection] = React.useState(
    "match banner"
  );

  return (
    <div className="dropdown-wrapper">
      <div
        className={`dropdown-title ${
          props.activeComponent === "colors" ? "dropdown-title-active" : ""
        }`}
        onClick={() => props.changeActiveComponent("colors")}
      >
        Banner Colors
      </div>
      {props.activeComponent === "colors" ? (
        <div className="banner-colors-content">
          <BackgroundTextColor
            title="Background"
            color={backgroundColorChosen}
            setColor={handleBackgroundColorChange}
            initial="#FFFFFF"
          />
          <BackgroundTextColor
            title="Text"
            color={bannerTextColorChosen}
            setColor={handleBannerTextColorChange}
            initial="#BBBBBB"
          />
          <Shadow
            shadowVerticlePosition={shadowVerticlePosition}
            setShadowVerticlePostition={setShadowVerticlePostition}
            shadowHorizontalPosition={shadowHorizontalPosition}
            setShadowHorizontalPostition={setShadowHorizontalPostition}
            shadowBlurChosen={shadowBlurChosen}
            handleBlurSelection={handleBlurSelection}
            shadowSizeChosen={shadowSizeChosen}
            handleSizeSelection={handleSizeSelection}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BannerColors;
