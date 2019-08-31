import React from "react";

import Layout from "./dropdown-components/layout";
import BannerColors from "./dropdown-components/banner-colors";
import ButtonStyle from "./dropdown-components/button-style";
import Content from "./dropdown-components/content";
import Behavior from "./dropdown-components/behavior";

const Dropdown = props => {
  const [activeComponent, changeActiveComponent] = React.useState("colors");

  return (
    <div className="dropdown-components">
      <Layout
        activeComponent={activeComponent}
        changeActiveComponent={changeActiveComponent}
        layoutChosen={props.layoutChosen}
        handleLayoutClick={props.handleLayoutClick}
      />
      <BannerColors
        activeComponent={activeComponent}
        changeActiveComponent={changeActiveComponent}
        bannerBackground={props.bannerBackground}
        setBannerBackground={props.setBannerBackground}
        bannerTextColor={props.bannerTextColor}
        setBannerTextColor={props.setBannerTextColor}
        shadowVerticle={props.shadowVerticle}
        setShadowVerticle={props.setShadowVerticle}
        shadowHorizontal={props.shadowHorizontal}
        setShadowHorizontal={props.setShadowHorizontal}
        shadowBlurChosen={props.shadowBlurChosen}
        setShadowBlur={props.setShadowBlur}
        shadowSizeChosen={props.shadowSizeChosen}
        setShadowSize={props.setShadowSize}
      />
      <ButtonStyle
        activeComponent={activeComponent}
        changeActiveComponent={changeActiveComponent}
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
