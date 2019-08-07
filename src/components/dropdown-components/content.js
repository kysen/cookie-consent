import React from "react";

const Content = props => {
  return (
    <div className="dropdown-wrapper">
      <div
        className={`dropdown-title ${
          props.activeComponent === "content" ? "dropdown-title-active" : ""
        }`}
        onClick={() => props.changeActiveComponent("content")}
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
