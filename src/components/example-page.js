import React from "react";

import ExampleNavbar from "./example-page-components/example-navbar";
import ExamplePageContent from "./example-page-components/example-page-content";

const ExamplePage = props => {
  return (
    <div className="example-page-container">
      <ExampleNavbar />
      <ExamplePageContent
        layoutChosen={props.layoutChosen}
        bannerBackground={props.bannerBackground}
        bannerTextColor={props.bannerTextColor}
        shadowVerticle={props.shadowVerticle}
        shadowHorizontal={props.shadowHorizontal}
        shadowBlurChosen={props.shadowBlurChosen}
        shadowSizeChosen={props.shadowSizeChosen}
      />
    </div>
  );
};

export default ExamplePage;
