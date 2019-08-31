import React from "react";

const TopBottom = props => {
  return (
    <div
      className="top-bottom-container"
      style={{
        backgroundColor: props.bannerBackground.hex,
        color: props.bannerTextColor.hex
      }}
    >
      TopBottom
    </div>
  );
};

export default TopBottom;
