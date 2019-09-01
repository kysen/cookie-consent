import React from "react";

const TopBottom = props => {
  console.log(props.styles.acceptButton);
  return (
    <div className="top-bottom-container" style={props.styleTopOrBottom}>
      <div className="banner-content">
        Would you like to allow this site to use cookies?
      </div>
      <div className="banner-right-side">
        <button className="info-button" style={props.styles.infoButton}>
          Learn More
        </button>
        <button className="accept-button" style={props.styles.acceptButton}>
          Yes
        </button>
        <button className="decline-button" style={props.styles.declineButton}>
          No
        </button>
      </div>
    </div>
  );
};

export default TopBottom;
