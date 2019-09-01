import React from "react";

import ContentItem from "./content-components/content-item";

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
        <div className="content-content">
          <ContentItem
            title="Banner Text"
            content={props.content}
            setContent={props.setContent}
            maxValue="100"
          />
          <ContentItem
            title="Accept Button"
            content={props.acceptContent}
            setContent={props.setAcceptContent}
            maxValue="15"
          />
          <ContentItem
            title="Decline Button"
            content={props.declineContent}
            setContent={props.setDeclineContent}
            maxValue="15"
          />
          <ContentItem
            title="More Information Button"
            content={props.infoContent}
            setContent={props.setInfoContent}
            maxValue="15"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Content;
