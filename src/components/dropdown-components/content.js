import React from "react";

const Content = props => {
  const componentClick = () => {
    props.activeComponent === "content"
      ? props.changeActiveComponent("")
      : props.changeActiveComponent("content");
  };
  return (
    <div className="dropdown-wrapper">
      <div
        className={`dropdown-title ${
          props.activeComponent === "content" ? "dropdown-title-active" : ""
        }`}
        onClick={() => componentClick()}
      >
        Content
      </div>
      {props.activeComponent === "content" ? (
        <div className="content-content">Content</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Content;
