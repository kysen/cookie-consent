import React from "react";

import ExamplePage from "./example-page";
import Dropdown from "./dropdown";

const BannerCreator = () => {
  return (
    <div className="banner-creator-container">
      <div className="banner-creator-title">Cookie Consent Banner Creator</div>
      <div className="banner-creator-content">
        <Dropdown />
        <ExamplePage />
      </div>
    </div>
  );
};

export default BannerCreator;
