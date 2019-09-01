import React from "react";

const TopBottom = props => {
  return (
    <div className="top-bottom-container" style={props.styleTopOrBottom}>
      <div className="banner-content">{props.content}</div>
      <div className="banner-right-side">
        {props.includeAccept ? (
          <button className="info-button" style={props.styles.infoButton}>
            {props.infoContent}
          </button>
        ) : (
          ""
        )}
        {props.includeDecline ? (
          <button className="accept-button" style={props.styles.acceptButton}>
            {props.acceptContent}
          </button>
        ) : (
          ""
        )}
        {props.includeInfo ? (
          <button className="decline-button" style={props.styles.declineButton}>
            {props.declineContent}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TopBottom;
