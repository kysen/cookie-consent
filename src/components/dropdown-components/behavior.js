import React from "react";

const Behavior = props => {
  return (
    <div className="dropdown-wrapper">
      <div
        className={`dropdown-title ${
          props.activeComponent === "behavior" ? "dropdown-title-active" : ""
        }`}
        onClick={() => props.changeActiveComponent("behavior")}
      >
        Behavior
      </div>
      {props.activeComponent === "behavior" ? (
        <div className="behavior-content">Behavior</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Behavior;
