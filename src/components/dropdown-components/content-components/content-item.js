import React from "react";

import Textarea from "react-textarea-autosize";

const ContentItem = props => {
  return (
    <div className="content-item-container">
      {" "}
      <div className="item-title">{props.title}</div>
      <div
        contentEditable="true"
        // data-text={props.content}
        className="input-field-wrapper"
      >
        {/* <div className="div-input">{props.content}</div> */}
        <Textarea
          maxLength={props.maxValue}
          type="text-area"
          value={props.content}
          onChange={e => props.setContent(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ContentItem;
