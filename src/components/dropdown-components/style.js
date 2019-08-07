import React from "react";

const Style = props => {
  return (
    <div className="dropdown-wrapper">
      <div
        className={`dropdown-title ${
          props.activeComponent === "style" ? "dropdown-title-active" : ""
        }`}
        onClick={() => props.changeActiveComponent("style")}
      >
        Style
      </div>
      {props.activeComponent === "style" ? (
        <div className="style-content">Style</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Style;
