import React, { useState } from "react";

import ExamplePage from "./example-page";
import Dropdown from "./dropdown";

const BannerCreator = () => {
  // layout hooks
  const [layoutChosen, handleLayoutClick] = useState("top");
  // banner-colors hooks
  const [bannerBackground, setBannerBackground] = useState({
    hex: "#3F359E"
  });
  const [bannerTextColor, setBannerTextColor] = useState({
    hex: "#FFFFFF"
  });
  const [shadowVerticle, setShadowVerticle] = useState(0);
  const [shadowHorizontal, setShadowHorizontal] = useState(0);
  const [shadowBlurChosen, setShadowBlur] = useState("medium");
  const [shadowSizeChosen, setShadowSize] = useState("match banner");
  // button-style hooks
  const [includeAccept, setIncludeAccept] = useState(true);
  const [includeDecline, setIncludeDecline] = useState(true);
  const [includeInfo, setIncludeInfo] = useState(true);

  const [acceptTextColor, setAcceptTextColor] = useState({ hex: "#3f359E" });
  const [acceptButtonColor, setAcceptButtonColor] = useState({
    hex: "#FFFFFF"
  });
  const [acceptBorderColor, setAcceptBorderColor] = useState({
    hex: "#FFFFFF"
  });

  const [declineTextColor, setDeclineTextColor] = useState({ hex: "#FFFFFF" });
  const [declineButtonColor, setDeclineButtonColor] = useState({
    hex: "#8F2626"
  });
  const [declineBorderColor, setDeclineBorderColor] = useState({
    hex: "#FFFFFF"
  });

  const [infoTextColor, setInfoTextColor] = useState({ hex: "#3f359E" });
  const [infoButtonColor, setInfoButtonColor] = useState({ hex: "#FFFFFF" });
  const [infoBorderColor, setInfoBorderColor] = useState({ hex: "#FFFFFF" });
  // content hooks
  const [content, setContent] = useState(
    "Would you like to allow this site to use cookies?"
  );
  const [acceptContent, setAcceptContent] = useState("Yes");
  const [declineContent, setDeclineContent] = useState("No");
  const [infoContent, setInfoContent] = useState("Learn More");

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
          //button-style hooks pt 1
          includeAccept={includeAccept}
          includeDecline={includeDecline}
          includeInfo={includeInfo}
          acceptTextColor={acceptTextColor}
          acceptButtonColor={acceptButtonColor}
          acceptBorderColor={acceptBorderColor}
          declineTextColor={declineTextColor}
          declineButtonColor={declineButtonColor}
          declineBorderColor={declineBorderColor}
          infoTextColor={infoTextColor}
          infoButtonColor={infoButtonColor}
          infoBorderColor={infoBorderColor}
          //button-style hooks pt 2
          setIncludeAccept={setIncludeAccept}
          setIncludeDecline={setIncludeDecline}
          setIncludeInfo={setIncludeInfo}
          setAcceptTextColor={setAcceptTextColor}
          setAcceptButtonColor={setAcceptButtonColor}
          setAcceptBorderColor={setAcceptBorderColor}
          setDeclineTextColor={setDeclineTextColor}
          setDeclineButtonColor={setDeclineButtonColor}
          setDeclineBorderColor={setDeclineBorderColor}
          setInfoTextColor={setInfoTextColor}
          setInfoButtonColor={setInfoButtonColor}
          setInfoBorderColor={setInfoBorderColor}
          //content hooks pt 1
          content={content}
          acceptContent={acceptContent}
          declineContent={declineContent}
          infoContent={infoContent}
          //content hooks pt 2
          setContent={setContent}
          setAcceptContent={setAcceptContent}
          setDeclineContent={setDeclineContent}
          setInfoContent={setInfoContent}
        />
        <ExamplePage
          //layout hooks
          layoutChosen={layoutChosen}
          //banner-colors hooks
          bannerBackground={bannerBackground.hex}
          bannerTextColor={bannerTextColor.hex}
          shadowVerticle={shadowVerticle}
          shadowHorizontal={shadowHorizontal}
          shadowBlurChosen={shadowBlurChosen}
          shadowSizeChosen={shadowSizeChosen}
          //button-style hooks
          includeAccept={includeAccept}
          includeDecline={includeDecline}
          includeInfo={includeInfo}
          acceptTextColor={acceptTextColor.hex}
          acceptButtonColor={acceptButtonColor.hex}
          acceptBorderColor={acceptBorderColor.hex}
          declineTextColor={declineTextColor.hex}
          declineButtonColor={declineButtonColor.hex}
          declineBorderColor={declineBorderColor.hex}
          infoTextColor={infoTextColor.hex}
          infoButtonColor={infoButtonColor.hex}
          infoBorderColor={infoBorderColor.hex}
          //content hooks
          content={content}
          acceptContent={acceptContent}
          declineContent={declineContent}
          infoContent={infoContent}
        />
      </div>
    </div>
  );
};

export default BannerCreator;
