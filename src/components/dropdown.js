import React from "react";

import Layout from "./dropdown-components/layout";
import Style from "./dropdown-components/style";
import Content from "./dropdown-components/content";
import Behavior from "./dropdown-components/behavior";

const Dropdown = props => {
  const [activeComponent, changeActiveComponent] = React.useState("layout");

  return (
    <div className="dropdown-components">
      <Layout
        activeComponent={activeComponent}
        changeActiveComponent={changeActiveComponent}
        layoutChosen={props.layoutChosen}
        handleLayoutClick={props.handleLayoutClick}
      />
      <Style
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
