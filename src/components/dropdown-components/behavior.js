import React from "react";

const Behavior = props => {
  const componentClick = () => {
    props.activeComponent === "behavior"
      ? props.changeActiveComponent("")
      : props.changeActiveComponent("behavior");
  };
  return (
    <div className="dropdown-wrapper">
      <div
        className={`dropdown-title ${
          props.activeComponent === "behavior" ? "dropdown-title-active" : ""
        }`}
        onClick={() => componentClick()}
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
