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
        activeComponent={activeComponent}
        changeActiveComponent={changeActiveComponent}
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
