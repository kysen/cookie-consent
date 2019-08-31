import React from "react";

import ExamplePage from "./example-page";
import Dropdown from "./dropdown";

const BannerCreator = () => {
  // layout hooks
  const [layoutChosen, handleLayoutClick] = React.useState("top");
  // banner-colors hooks
  const [bannerBackground, setBannerBackground] = React.useState({});
  const [bannerTextColor, setBannerTextColor] = React.useState({});
  const [shadowVerticle, setShadowVerticle] = React.useState(0);
  const [shadowHorizontal, setShadowHorizontal] = React.useState(0);
  const [shadowBlurChosen, setShadowBlur] = React.useState("medium");
  const [shadowSizeChosen, setShadowSize] = React.useState("match banner");

  return (
    <div className="banner-creator-container">
      <div className="banner-creator-title">Cookie Consent Banner Creator</div>
      <div className="banner-creator-content">
        <Dropdown
          //layout hooks
          layoutChosen={layoutChosen}
          handleLayoutClick={handleLayoutClick}
          //banner-colors hooks pt 1
          bannerBackground={bannerBackground}
          bannerTextColor={bannerTextColor}
          shadowVerticle={shadowVerticle}
          shadowHorizontal={shadowHorizontal}
          shadowBlurChosen={shadowBlurChosen}
          shadowSizeChosen={shadowSizeChosen}
          //banner-colors hooks pt 2
          setBannerBackground={setBannerBackground}
          setBannerTextColor={setBannerTextColor}
          setShadowVerticle={setShadowVerticle}
          setShadowHorizontal={setShadowHorizontal}
          setShadowBlur={setShadowBlur}
          setShadowSize={setShadowSize}
        />
        <ExamplePage
          //layout hooks
          layoutChosen={layoutChosen}
          //banner-colors hooks
          bannerBackground={bannerBackground}
          bannerTextColor={bannerTextColor}
          shadowVerticle={shadowVerticle}
          shadowHorizontal={shadowHorizontal}
          shadowBlurChosen={shadowBlurChosen}
          shadowSizeChosen={shadowSizeChosen}
        />
      </div>
    </div>
  );
};

export default BannerCreator;
