import React from "react";

import ExamplePage from "./example-page";

const BannerCreator = () => {
  return (
    <div className="banner-creator-container">
      <div className="banner-creator-title">Cookie Consent Banner Creator</div>
      <div className="banner-creator-content">
        <div className="dropdown-wrapper">
          <div className="dropdown-title">Layout</div>
          <div className="dropdown-title">Style</div>
          <div className="dropdown-title">Content</div>
          <div className="dropdown-title">Behavior</div>
        </div>
        <ExamplePage />
      </div>
    </div>
  );
};

export default BannerCreator;
