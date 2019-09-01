import React from "react";

import Layout from "./dropdown-components/layout";
import BannerColors from "./dropdown-components/banner-colors";
import ButtonStyle from "./dropdown-components/button-style";
import Content from "./dropdown-components/content";
import Behavior from "./dropdown-components/behavior";

const Dropdown = props => {
  const [activeComponent, changeActiveComponent] = React.useState("button");

  return (
    <div className="dropdown-components">
      <Layout
        activeComponent={activeComponent}
        changeActiveComponent={changeActiveComponent}
        layoutChosen={props.layoutChosen}
        handleLayoutClick={props.handleLayoutClick}
      />
      <BannerColors
        layoutChosen={props.layoutChosen}
        activeComponent={activeComponent}
        changeActiveComponent={changeActiveComponent}
        //banner-colors hooks pt 1
        bannerBackground={props.bannerBackground}
        bannerTextColor={props.bannerTextColor}
        shadowVerticle={props.shadowVerticle}
        shadowHorizontal={props.shadowHorizontal}
        shadowBlurChosen={props.shadowBlurChosen}
        shadowSizeChosen={props.shadowSizeChosen}
        //banner-colors hooks pt 2
        setBannerBackground={props.setBannerBackground}
        setBannerTextColor={props.setBannerTextColor}
        setShadowVerticle={props.setShadowVerticle}
        setShadowHorizontal={props.setShadowHorizontal}
        setShadowBlur={props.setShadowBlur}
        setShadowSize={props.setShadowSize}
      />
      <ButtonStyle
        activeComponent={activeComponent}
        changeActiveComponent={changeActiveComponent}
        //button-style hooks pt 1
        acceptTextColor={props.acceptTextColor}
        acceptButtonColor={props.acceptButtonColor}
        acceptBorderColor={props.acceptBorderColor}
        declineTextColor={props.declineTextColor}
        declineButtonColor={props.declineButtonColor}
        declineBorderColor={props.declineBorderColor}
        infoTextColor={props.infoTextColor}
        infoButtonColor={props.infoButtonColor}
        infoBorderColor={props.infoBorderColor}
        //button-style hooks pt 2
        setAcceptTextColor={props.setAcceptTextColor}
        setAcceptButtonColor={props.setAcceptButtonColor}
        setAcceptBorderColor={props.setAcceptBorderColor}
        setDeclineTextColor={props.setDeclineTextColor}
        setDeclineButtonColor={props.setDeclineButtonColor}
        setDeclineBorderColor={props.setDeclineBorderColor}
        setInfoTextColor={props.setInfoTextColor}
        setInfoButtonColor={props.setInfoButtonColor}
        setInfoBorderColor={props.setInfoBorderColor}
      />
      <Content
        activeComponent={activeComponent}
        changeActiveComponent={changeActiveComponent}
      />
      <Behavior
        activeComponent={activeComponent}
        changeActiveComponent={changeActiveComponent}
      />
    </div>
  );
};

export default Dropdown;
