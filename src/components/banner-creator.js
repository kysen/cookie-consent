import React from "react";

import ExamplePage from "./example-page";
import Dropdown from "./dropdown";

const BannerCreator = () => {
  const [layoutChosen, handleLayoutClick] = React.useState("top");

  return (
    <div className="banner-creator-container">
      <div className="banner-creator-title">Cookie Consent Banner Creator</div>
      <div className="banner-creator-content">
        <Dropdown
          layoutChosen={layoutChosen}
          handleLayoutClick={handleLayoutClick}
        />
        <ExamplePage />
      </div>
    </div>
  );
};

export default BannerCreator;
